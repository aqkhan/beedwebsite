import React, {useState} from "react"
import {Navbar, Nav, Container, Col, Form, Button, FormControl} from "react-bootstrap";
import Style from "./style";

const Header = () => {
    const [showdown, setShowDown] = useState(false)
    const Logout = () => {

        localStorage.removeItem("beedUser");
        window.location.href = "/login"
    }
    return (
        <div className="nav-main">

                <Container className="p-0">
                    <div className="main-nav d-flex align-items-center justify-content-between">
                        <Col md={2}><img src="https://i.ibb.co/V91VVb0/logoth.png" className="logo-img"/></Col>
                        <Col md={5}>
                            <ul className="header-list">
                                <li>HOME</li>
                                <li>STORE</li>
                                <li>PAGES</li>
                                <li>CONTACT</li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <div className="lougout-div d-flex">
                                <div className="user-img-div"/>
                                <div className="logout-dropdown">
                                    {showdown &&
                                    <ul>
                                        <li>Logout</li>
                                    </ul>
                                    }


                                    <i className={!showdown ? "fa fa-angle-down" : " fa fa-angle-down rotate-arrow"}
                                       onClick={() => setShowDown(!showdown)}/>
                                </div>
                            </div>
                        </Col>

                    </div>

                </Container>

            <Style/>
        </div>
    )
}


export default Header
