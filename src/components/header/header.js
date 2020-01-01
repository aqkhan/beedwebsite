import React, {useState, useEffect} from "react"
import {Container, Col} from "react-bootstrap";
import Style from "./style";
import {Link} from "gatsby";
import Dropdown from "./dropdown"


const Header = () => {

    const [showdown, setShowDown] = useState(false);


    const Logout = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

    const Showdownfunction = () => {
        setShowDown(!showdown);

    }
    const outsideCLick = () => {
        setShowDown(false);

    }
    return (
        <div className="nav-main">

            <Container className="p-0">
                <div className="main-nav d-flex align-items-center justify-content-between">
                    <Col md={5}><Link to={"/"}><img src="https://i.ibb.co/V91VVb0/logoth.png"
                                                    className="logo-img"/></Link></Col>
                    <Col md={4}>
                        <ul className="header-list">
                            <li><Link to={"/"}>HOME</Link></li>
                            <li><Link to="/about-us">ABOUT US</Link></li>
                            <li><Link to="/contact-us">CONTACT</Link></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <div className="lougout-div d-flex">
                            <div className="user-img-div"
                                 style={{backgroundImage: "url(" + (typeof localStorage !== "undefined" && localStorage.getItem("userImg") ? localStorage.getItem("userImg") : "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png") + ")",}}/>
                            <div className="logout-dropdown">

                                <Dropdown
                                    outside={outsideCLick}
                                    Logout={Logout}
                                    Showdownfunction={Showdownfunction}
                                    showdown={showdown}
                                />
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
