import React, {useState, useEffect} from "react";
import {Container, Col, Form} from "react-bootstrap";
import Style from "./style";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {getProduct} from "../quries";
import {useQuery} from '@apollo/react-hooks';
import Loader from "../loader"

const Productdetail = (props) => {
    const [date, setDate] = useState(null);
    const [productDetail, setproductDetail] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setprice] = useState(null);
    const [totalprice, settotalprice] = useState(null);
    let iniwindow = typeof window !== 'undefined' && window;
    let path = iniwindow && iniwindow.location.search;
    path = path && path.split("=");
    path = path && path[1];
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
        if(error){
            localStorage.removeItem("token")
            window.location.href = "/login"
        }
    }, [data]);

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
    }

    return productDetail?  (
        <div>
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
                                {/*<h1 className="product-id">Product Id:000123</h1>*/}
                                {/*<h1 className="in-stock">In Stock</h1>*/}
                            </div>
                            <hr/>
                            <Form onSubmit={(event) => submitHandler(event)}>
                                <div className="product-quantity-order">
                                    <div className="d-flex flex-wrap">
                                        <Col md={6} className="pl-0">
                                            <div className="quantity">
                                                <p className="headings">Select Quantity</p>
                                                <div className="d-flex">

                                                    <div className="add-remove-div" onClick={() => decreasequantity()}>
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
                                        <Col md={6}>
                                            <p className="headings">Select Quantity</p>
                                            <div className="changing-price">
                                                <p className="headings">Total</p>
                                                <p>{totalprice && "$" + (Math.round(totalprice * 100) / 100).toFixed(2)}</p>
                                            </div>
                                        </Col>
                                        <Col md={6} className="pl-0 date-col">
                                            <p className="headings">Delivery Date</p>
                                            <DatePicker
                                                selected={date && date}
                                                disabledKeyboardNavigation
                                                onChange={event => setDate(event)}
                                                placeholderText="Select Delivery Date"
                                            />
                                            <i className="fa fa-calendar"/>

                                        </Col>
                                    </div>
                                </div>

                                <button className="btn view-more-btn">PLACE ORDER</button>
                            </Form>

                        </Col>
                    </div>
                    <div className="product-detail">
                        <h1>Product Detail</h1>
                        <p
                            dangerouslySetInnerHTML={{__html: productDetail.description && productDetail.description}}
                        />
                    </div>
                </Container>
            }

            <Style/>
        </div>

    ):<Loader/>
}
export default Productdetail