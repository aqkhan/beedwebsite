import React from "react";
import {Container, Col, Row, Table} from "react-bootstrap";
import Style from "./style";
import Layout from "../layout";
import {graphql} from "gatsby";
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
const productdetail = (props) => {
    let data = props.data && props.data.mdx.frontmatter;

    return (
        <Layout>
        <Container className="product-detail-container">
            <Row>
                <Col md={6}>
                    <div className="detail-background"/>
                </Col>
                <Col md={4}>
                    <div className="product-into">
                        <p>{data.title ? data.title : ""}</p>
                        <span >{data.price ?  "$ "+ data.price :"N/A" } </span>
                    </div>

                </Col>
            </Row>
            <Col md={12}>
                <div className="about-produc">
                    <h1>About this product</h1>
                    <p>{data.desc ? data.desc : ""}</p>
                </div>
                <hr/>
                <div className="before-table">
                    <p>Attributes</p>
                </div>
                <Table striped bordered hover>

                    <tbody>
                    <tr>
                        <td>Material</td>
                        <td>{data.material ? data.material : ""}</td>
                    </tr>
                    <tr>
                        <td>Max watt.</td>
                        <td>{data.maxWatt ? data.maxWatt+" W" : ""}</td>
                    </tr>   <tr>
                        <td>Bulb qty.</td>
                        <td>{data.bulbQty ? data.bulbQty : ""}</td>
                    </tr>   <tr>
                        <td>Finish</td>
                        <td>{data.finish ? data.finish : ""}
                        </td>
                    </tr>
                    <tr>
                        <td>Fitting	</td>
                        <td>{data.fitting ? data.fitting : ""}</td>
                    </tr>

                    </tbody>
                </Table>
            </Col>
            <Style/>
        </Container>
        </Layout>
    )
}
export default productdetail