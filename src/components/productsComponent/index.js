import React from "react";
import {Container, Row, Card, Col} from "react-bootstrap";
import Style from "./style";
import {Link, graphql, useStaticQuery} from "gatsby"

const Productspage = () => {
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

    console.log(productsData, "products data")
    return (
        <Container className="products-container">
            <h1 className="text-center" style={{fontSize: '4rem', padding: '30px 0px'}}>I&nbsp;
                <span>&nbsp;&#9829;&nbsp;</span>LAMP</h1>
            <Row className="justify-content-between">
                {
                    productsData && productsData.map((sin, i) => {

                        return (
                            <Col md={4} key={i}>
                                <Link to={`/product-detail/${sin.node.fields.slug}`}>
                                    <Card>

                                        <Card.Img variant="top"
                                                  src={sin.node.frontmatter.img ? sin.node.frontmatter.img : "" }/>
                                        <Card.Body>
                                            <Card.Title>{sin.node.frontmatter.title ? sin.node.frontmatter.title : "" }</Card.Title>
                                            <Card.Text>
                                                {sin.node.frontmatter.price ? "$" + sin.node.frontmatter.price : "N/A"  }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })
                }


            </Row>
            <Style/>
        </Container>
    )
}
export default Productspage