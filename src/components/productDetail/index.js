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

                            <button className="btn view-more-btn">PLACE ORDER</button>
                        </Form>

                    </Col>
                </div>
                <div className="product-detail">
                    <h1>Product Detail</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                </div>
            </Container>
            <Style/>
        </Layout>
    )
}
export default Productdetail