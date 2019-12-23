import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Style from "./style"
const footer = () => {

    return (
        <footer>
            <Container fluid={true} className="p-0">
                <Container className="p-0">
                    <div className="d-flex flex-wrap">
                        <Col md={3} sm={12}>
                            <div className="footer-one">
                                <p>About</p>
                                <ul>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms</a></li>
                                </ul>
                            </div>

                        </Col>
                        <Col md={4} sm={12}>
                            <div className="footer-one">
                                <p>Services</p>
                                <ul>
                                    <li><a href="#">Our Products</a></li>

                                </ul>
                            </div>

                        </Col>
                        <Col md={5} sm={12}>
                            <div className="footer-one">
                                <p>Footer Header</p>
                                <span>
                                 Extra space for a call to action inside the footer that could help re-engage users.
                             </span>
                                <div className="d-flex">
                                    <div className="d-flex align-items-center single-link"><i className="fa fa-twitter"/>
                                        <div ><a href="https://twitter.com/parmsang" alt="twitter link">Twitter</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center single-link"><i className="fa fa-facebook"/>
                                        <div className="content"><a href="https://facebook.com/" alt="facebook link">Facebook</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center single-link"><i className="fa fa-envelope"/>
                                        <div className="content"><a href="mailto:john@doe.com"
                                                                    alt="email link">Email</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </div>
                </Container>


            </Container>
            <Style/>
        </footer>
    )
}
export default footer