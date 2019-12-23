import React from "react";
import {Container, Row, Card, Col} from "react-bootstrap";
import Style from "./style";

const Productspage = () => {


    return (
        <Container className="products-container">
            <h1 className="text-center" style={{fontSize: '4rem', padding: '30px 0px'}}>I&nbsp;
                <span>&nbsp;&#9829;&nbsp;</span>LAMP</h1>
            <Row className="justify-content-between">
                <Col md={4}>
                    <Card >
                        <Card.Img variant="top"
                                  src="https://parmsang.github.io/gatsby-starter-ecommerce/static/12af663b87c3a4933fc3930bae18e7e7/fdbb0/486349d6-c234-4c31-87ab-131f90230fb5.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                $500
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card >
                        <Card.Img variant="top"
                                  src="https://parmsang.github.io/gatsby-starter-ecommerce/static/12af663b87c3a4933fc3930bae18e7e7/fdbb0/486349d6-c234-4c31-87ab-131f90230fb5.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                $500
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card >
                        <Card.Img variant="top"
                                  src="https://parmsang.github.io/gatsby-starter-ecommerce/static/12af663b87c3a4933fc3930bae18e7e7/fdbb0/486349d6-c234-4c31-87ab-131f90230fb5.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                $500
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card >
                        <Card.Img variant="top"
                                  src="https://parmsang.github.io/gatsby-starter-ecommerce/static/12af663b87c3a4933fc3930bae18e7e7/fdbb0/486349d6-c234-4c31-87ab-131f90230fb5.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                $500
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card >
                        <Card.Img variant="top"
                                  src="https://parmsang.github.io/gatsby-starter-ecommerce/static/12af663b87c3a4933fc3930bae18e7e7/fdbb0/486349d6-c234-4c31-87ab-131f90230fb5.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                $500
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card >
                        <Card.Img variant="top"
                                  src="https://parmsang.github.io/gatsby-starter-ecommerce/static/12af663b87c3a4933fc3930bae18e7e7/fdbb0/486349d6-c234-4c31-87ab-131f90230fb5.png"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                $500
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
            <Style/>
        </Container>
    )
}
export default Productspage