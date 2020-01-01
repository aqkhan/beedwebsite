import React, {useState, useEffect} from "react";
import {Container, Col, Form} from "react-bootstrap";
import Style from "./style";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {getProduct} from "../quries";
import {useQuery} from '@apollo/react-hooks';
import Loader from "../loader";
import {createOrder} from "../quries";
import {useMutation} from '@apollo/react-hooks';
import jwt_decode from "jwt-decode";
import axios from "axios";
import {useSpring, animated} from 'react-spring';
import SEO from "../../components/seo";

const Productdetail = (props) => {

    const [date, setDate] = useState(null);
    const [productDetail, setproductDetail] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setprice] = useState(null);
    const [dateError, setDateError] = useState(false);
    const [totalprice, settotalprice] = useState(null);
    const [submitOrder] = useMutation(createOrder);
    const [confirmModal, SetconfirmModal] = useState(false);
    const [buttonText, SetbuttonText] = useState("PLACE ORDER");
    const [submitError, setSubmiterror] = useState("");

    let iniwindow = typeof window !== 'undefined' && window;
    let path = iniwindow && iniwindow.location.search;
    path = path && path.split("=");
    path = path && path[1];

    const MenuOpen = useSpring({
        delay: confirmModal ? 300 : 0,
        height: confirmModal ? "100px" : "0px",
    });
    const Menup = useSpring({
        delay: confirmModal ? 1000 : 0,
        display: confirmModal ? "block" : "none",
    });

    const {data, error} = useQuery(getProduct, {
        variables: {
            id: path
        }
    });

    useEffect(() => {
        if (data && data.getProduct) {
            setproductDetail(data.getProduct);
            setprice(data.getProduct.price && parseInt(data.getProduct.price));
            settotalprice(data.getProduct.price && parseInt(data.getProduct.price));
        }

        if (error) {
            localStorage.removeItem("token")
            window.location.href = "/login"
        }
    }, [error,data]);


    const decreasequantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            settotalprice(totalprice - price)
        }
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        settotalprice(totalprice + price)
    }

    const submitHandler = (event) => {

        event.preventDefault();
        let token = localStorage.getItem("token");
        token = token && jwt_decode(token);
        if (!date) {
            setDateError(true);
            setTimeout(() => {
                setDateError(false)
            }, 5000)
        }
        else {
            let payload = {
                variables: {
                    input: {
                        orderProductId: path,
                        notes: "notes",
                        user_email: token.email,
                        status: "unconfirmed",
                        qty: quantity,
                        delivery_date: date,
                        order_total: totalprice
                    }
                }
            };
            SetbuttonText("Loading ...")
            submitOrder(payload).then(({data}) => {
                let Newtoken = localStorage.getItem("token");
                let emailData =
                    {
                        orderId: data.createOrder.id
                    }
                let header = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Newtoken}`
                    }
                };
                axios.post("https://bls1feondl.execute-api.us-east-1.amazonaws.com/dev/v1/order/submit", emailData, header,).then(res => {
                    SetconfirmModal(true);
                    setQuantity(1);
                    setDate(null);
                    settotalprice(price);
                    setTimeout(() => {
                        SetconfirmModal(false)
                    }, 5000);
                    SetbuttonText("PLACE ORDER")

                }).catch(error => {
                    SetbuttonText("PLACE ORDER");
                    setSubmiterror("Unable to submit order");
                    setTimeout(() => {
                        setSubmiterror("");
                    }, 5000);

                })
            }).catch(error => {
                SetbuttonText("PLACE ORDER")
            })


        }
    }

    return productDetail ? (
        <div>
            <SEO title={productDetail.title && productDetail.title}/>
            {
                productDetail &&
                <Container className="product-detail-container">
                    <div className="d-flex flex-wrap">
                        <Col md={5}>
                            <div className="product-image"
                                 style={{backgroundImage: "url(" + (productDetail.thumbnail ? productDetail.thumbnail : "") + ")",}}/>
                        </Col>
                        <Col md={7}>
                            <div className="product-detail-div">
                                <h1 className="title">{productDetail.title && productDetail.title}</h1>
                                <h1 className="price">{productDetail.price ? "$" + (Math.round(parseInt(productDetail.price) * 100) / 100).toFixed(2) : "N/A"}</h1>
                                <h1 className="farm-name">{productDetail.farm && productDetail.farm.name}</h1>

                            </div>
                            <hr/>
                            <Form onSubmit={(event) => submitHandler(event)}>
                                <div className="product-quantity-order">
                                    <div className="d-flex flex-wrap">
                                        <Col md={6} className="pl-0">
                                            <div className="quantity">
                                                <p className="headings">Select Quantity</p>
                                                <div className="d-flex">

                                                    <div className="add-remove-div remove-minus"
                                                         onClick={() => decreasequantity()}>
                                                        <i className="fa fa-minus"/>
                                                    </div>

                                                    <input type="number"
                                                           onChange={(event) => setQuantity(event.target.value)}
                                                           value={quantity} min={1}/>
                                                    <div className="add-remove-div" onClick={() => increaseQuantity()}>
                                                        <i className="fa fa-plus"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} className="pl-0 grand-total">
                                            <p className="headings">Grand Total</p>
                                            <div className="changing-price">
                                                <p className="headings">Total</p>
                                                <p>{totalprice && "$" + (Math.round(totalprice * 100) / 100).toFixed(2)}</p>
                                            </div>
                                        </Col>
                                        <Col md={6} className="pl-0 date-col" id="date-col">
                                            <p className="headings">Delivery Date</p>
                                            <DatePicker
                                                selected={date && date}
                                                disabledKeyboardNavigation
                                                onChange={event => setDate(event)}
                                                placeholderText="Select Delivery Date"
                                            />
                                            <i className="fa fa-calendar"/>
                                            <div className="date-error">
                                                {
                                                    dateError &&
                                                    <p >Please Select Valid Date.</p>
                                                }
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <button className="btn view-more-btn">{buttonText}</button>
                                {submitError &&
                                <p className="submit-error">{submitError}</p>
                                }


                            </Form>

                        </Col>
                    </div>
                    <div className="product-detail">
                        <h1>Product Detail</h1>
                        <div dangerouslySetInnerHTML={{__html: productDetail.description && productDetail.description}}
                        />
                    </div>
                </Container>
            }

            <animated.div className="order-submission-modal" style={MenuOpen}>
                <animated.p style={Menup}>Your order has been placed successfully.Please check your email for
                    conformation.
                </animated.p>
            </animated.div>


            <Style/>
        </div>

    ) : <Loader/>
}
export default Productdetail