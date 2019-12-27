import React, {useState} from "react";
import {Container, Col, Row, Table, Form, Button} from "react-bootstrap";
import Style from "./style";
import Layout from "../layout";
import {graphql} from "gatsby";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        price
        desc
        img
        material
        maxWatt
       bulbQty
       finish
       fitting
      }
    }
  }
`
const Productdetail = (props) => {
    let data = props.data && props.data.mdx.frontmatter;
    const [count, setCount] = useState(1);
    const [date, setDate] = useState(null);
    return (
        <Layout>

            {/*<Container className="product-detail-container">*/}


            {/*<Row>*/}
            {/*<Col md={6}>*/}
            {/*<div className="detail-background"/>*/}
            {/*</Col>*/}
            {/*<Col md={4}>*/}
            {/*<div className="product-into">*/}
            {/*<p>{data.title ? data.title : ""}</p>*/}
            {/*<span >{data.price ? "$ " + data.price : "N/A" } </span>*/}
            {/*</div>*/}

            {/*</Col>*/}
            {/*</Row>*/}


            {/*<Col md={12}>*/}
            {/*<div className="about-produc">*/}
            {/*<h1>About this product</h1>*/}
            {/*<p>{data.desc ? data.desc : ""}</p>*/}
            {/*</div>*/}
            {/*<hr/>*/}
            {/*<div className="before-table">*/}
            {/*<p>Attributes</p>*/}
            {/*</div>*/}
            {/*<Table striped bordered hover>*/}

            {/*<tbody>*/}
            {/*<tr>*/}
            {/*<td>Material</td>*/}
            {/*<td>{data.material ? data.material : ""}</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*<td>Max watt.</td>*/}
            {/*<td>{data.maxWatt ? data.maxWatt + " W" : ""}</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*<td>Bulb qty.</td>*/}
            {/*<td>{data.bulbQty ? data.bulbQty : ""}</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*<td>Finish</td>*/}
            {/*<td>{data.finish ? data.finish : ""}*/}
            {/*</td>*/}
            {/*</tr>*/}
            {/*<tr>*/}
            {/*<td>Fitting</td>*/}
            {/*<td>{data.fitting ? data.fitting : ""}</td>*/}
            {/*</tr>*/}

            {/*</tbody>*/}
            {/*</Table>*/}
            {/*</Col>*/}
            {/*<Form className="product-form">*/}
            {/*<p>Place You Order!</p>*/}
            {/*<Form.Group >*/}
            {/*<Form.Label>Quantity</Form.Label>*/}
            {/*<div className="quantity-group">*/}
            {/*<Form.Control type="number" className="quantity-of-products" disabled={true}*/}
            {/*value={count}/>*/}
            {/*<div className="add-remove-arrow">*/}
            {/*<div className="arrow-div" onClick={() => setCount(count + 1)}>*/}
            {/*<i className="fa fa-plus"/>*/}
            {/*</div>*/}
            {/*{*/}
            {/*count > 1 &&*/}
            {/*<div className="arrow-div">*/}
            {/*<i className="fa fa-minus" onClick={() => setCount(count - 1)}/>*/}
            {/*</div>*/}
            {/*}*/}

            {/*</div>*/}
            {/*</div>*/}
            {/*</Form.Group>*/}
            {/*<Form.Group controlId="formBasicEmail">*/}
            {/*<Form.Control as="textarea" rows="5" placeholder="Additional notes..."/>*/}
            {/*</Form.Group>*/}
            {/*<Button variant="primary" type="submit">*/}
            {/*Submit*/}
            {/*</Button>*/}
            {/*</Form>*/}
            {/*</Container>*/}


            {/*-------------------------------------------------*/}
            {/*newHtmlCss*/}

            <Container className="product-detail-container">
                <div className="d-flex flex-wrap">
                    <Col md={5}>
                        <div className="product-image"/>
                    </Col>
                    <Col md={7}>
                        <div className="product-detail-div">
                            <h1 className="title">Product Title</h1>
                            <h1 className="price">$100.00</h1>
                            <h1 className="farm-name">Product Title</h1>
                            <h1 className="product-id">Product Id:000123</h1>
                            <h1 className="in-stock">In Stock</h1>
                        </div>
                        <hr/>
                        <Form>
                            <div className="product-quantity-order">
                                <div className="d-flex flex-wrap">
                                    <Col md={6} className="pl-0">
                                        <div className="quantity">
                                            <p className="headings">Select Quantity</p>
                                            <div className="d-flex">
                                                <div className="add-remove-div">
                                                    <i className="fa fa-minus"/>
                                                </div>
                                                <input type="number"/>
                                                <div className="add-remove-div">
                                                    <i className="fa fa-plus"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <p className="headings">Select Quantity</p>
                                        <div className="changing-price">
                                            <p className="headings">Total</p>
                                            <p>$500</p>
                                        </div>
                                    </Col>
                                    <Col md={6} className="pl-0 date-col">
                                        <p className="headings">Delivery Date</p>
                                        <DatePicker
                                            selected={date && date}
                                            disabledKeyboardNavigation
                                            onChange={event => setDate(event) }
                                            placeholderText="Select Delivery Date"
                                        />
                                        <i className="fa fa-calendar"/>

                                    </Col>
                                </div>
                            </div>


                        </Form>

                    </Col>
                </div>
                <div className="product-detail">
                    <h1>Product Detail</h1>

                </div>
            </Container>

            <Style/>
        </Layout>
    )
}
export default Productdetail