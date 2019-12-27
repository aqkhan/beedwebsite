import React from "react";
import {Container, Row, Card, Col} from "react-bootstrap";
import Style from "./style";
import {Link, graphql, useStaticQuery} from "gatsby";
import Mainsction from "../homeMain";
import {useMutation, useQuery} from '@apollo/react-hooks';
import {listProducts} from "../quries";

const Productspage = () => {
    const {loading, data, error} = useQuery(listProducts, {
        variables: {
            limit: 1000
        },
        headers: {
            authorization:  `Bearer ${"eyJraWQiOiIybVdpaFdjYVBtUnJHVUVab1Y1bFE3MkpOczgwXC94Q1FrOWhzSDdlZmxaQT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4ZGRjYmM4MC04ZjE4LTRjMzctODFmNC1kNmI2NWE2MGU3ZjciLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVVdSZUc0SlJmIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoicG1paW50ZWxsZWN0IiwiYXVkIjoiN2N2cW90bWZwMDY1Z3ZoaW51MHR2NG8xNHYiLCJldmVudF9pZCI6IjUwNGJkYzhhLTNiMjctNGQxOS04ZWI3LTFlMzhkMDdiNzNmZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTc3NDQzMjkzLCJwaG9uZV9udW1iZXIiOiIrOTIzNDI5NDYyMjkxIiwiZXhwIjoxNTc3NDQ2ODkzLCJpYXQiOjE1Nzc0NDMyOTMsImVtYWlsIjoicG1AaWludGVsbGVjdC5jby51ayJ9.fbLzP1RRUC5g8H0JnanhQJfq02keZiMGEeyFAXAh1Xr9WPmwtCef4XcllwU0vFciy2NOIwgyfam359Rt_d5swhDK7p-i8BAfko_WQs_bfb2YHzLVjn2ZXpxN3ZZ1YZl1kAU3KcV6Zo-j2gYLI17e_YI-G_T-1vMv-OK_WYqRykcg3iconsFiaRMb0NF60lqAvLskm3oHOYxEVpVKDS8o8VACJsHXJwzBqk_I-xDMOWMUGbQvRSfXRIiME6B-BwE0Rt_IYyZZpffAqtV8tAcAQjoOfo9qhEmXO10bCp4txkV8jx3rWGi5VonXjqq3N37hd3AyLw7p-xHwsVHzOHv24A"}`
        }
    });


    const products = useStaticQuery(graphql`
query{
  allMdx{
    edges{
      node{
        frontmatter{
          title
          price
          img
        }
        fields{
          slug
        }
      }
    }
  }
}
  `)
    let productsData = products && products.allMdx.edges;

    console.log(productsData, "products data");
    console.log(data,"new data")
    return (
        <div>
            <Mainsction/>
            <Container className="products-container">
                <Col md={12} className="filter-section d-flex align-items-center">
                    <Col md={6}>
                        <h1>Products</h1>
                    </Col>
                    <Col md={6}>
                        <div className="filter-div">
                            <div className="single-search-div">
                                <input type="text" placeholder="Search Product"/>
                                <i className="fa fa-search"/>
                            </div>
                            <div className="single-search-div filter-select">
                                <select>
                                    <option>Sort By</option>
                                    <option>Option one</option>
                                    <option>Option one</option>
                                </select>
                                <i className="fa fa-angle-down"/>
                            </div>
                        </div>
                    </Col>
                </Col>
                {/*<Row className="justify-content-between">*/}
                {/*{*/}
                {/*productsData && productsData.map((sin, i) => {*/}

                {/*return (*/}
                {/*<Col md={4} key={i}>*/}
                {/*<Link to={`/product-detail/${sin.node.fields.slug}`}>*/}
                {/*<Card>*/}

                {/*<Card.Img variant="top"*/}
                {/*src={sin.node.frontmatter.img ? sin.node.frontmatter.img : "" }/>*/}
                {/*<Card.Body>*/}
                {/*<Card.Title>{sin.node.frontmatter.title ? sin.node.frontmatter.title : "" }</Card.Title>*/}
                {/*<Card.Text>*/}
                {/*{sin.node.frontmatter.price ? "$" + sin.node.frontmatter.price : "N/A"  }*/}
                {/*</Card.Text>*/}
                {/*</Card.Body>*/}
                {/*</Card>*/}
                {/*</Link>*/}
                {/*</Col>*/}
                {/*)*/}
                {/*})*/}
                {/*}*/}


                {/*</Row>*/}
                <div className="d-flex flex-wrap">
                    <Col md={4}>
                        <div className="single-product-card">
                            <div className="single-product-thumbnaail"/>
                            <div className="single-product-detail">
                                <p className="single-product-title">Product Title</p>
                                <p className="single-product-farm">Farm Name</p>
                                <p className="single-product-price">$ 100.00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-product-card">
                            <div className="single-product-thumbnaail"/>
                            <div className="single-product-detail">
                                <p className="single-product-title">Product Title</p>
                                <p className="single-product-farm">Farm Name</p>
                                <p className="single-product-price">$ 100.00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-product-card">
                            <div className="single-product-thumbnaail"/>
                            <div className="single-product-detail">
                                <p className="single-product-title">Product Title</p>
                                <p className="single-product-farm">Farm Name</p>
                                <p className="single-product-price">$ 100.00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-product-card">
                            <div className="single-product-thumbnaail"/>
                            <div className="single-product-detail">
                                <p className="single-product-title">Product Title</p>
                                <p className="single-product-farm">Farm Name</p>
                                <p className="single-product-price">$ 100.00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-product-card">
                            <div className="single-product-thumbnaail"/>
                            <div className="single-product-detail">
                                <p className="single-product-title">Product Title</p>
                                <p className="single-product-farm">Farm Name</p>
                                <p className="single-product-price">$ 100.00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-product-card">
                            <div className="single-product-thumbnaail"/>
                            <div className="single-product-detail">
                                <p className="single-product-title">Product Title</p>
                                <p className="single-product-farm">Farm Name</p>
                                <p className="single-product-price">$ 100.00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-product-card">
                            <div className="single-product-thumbnaail"/>
                            <div className="single-product-detail">
                                <p className="single-product-title">Product Title</p>
                                <p className="single-product-farm">Farm Name</p>
                                <p className="single-product-price">$ 100.00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-product-card">
                            <div className="single-product-thumbnaail"/>
                            <div className="single-product-detail">
                                <p className="single-product-title">Product Title</p>
                                <p className="single-product-farm">Farm Name</p>
                                <p className="single-product-price">$ 100.00</p>
                            </div>
                        </div>
                    </Col>
                </div>
                <div className="cards-button-div d-flex justify-content-center">
                    <button className="btn view-more-btn">View More</button>
                </div>
                <Style/>
            </Container>
        </div>
    )
}
export default Productspage