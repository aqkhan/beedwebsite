import React, {useState, useEffect} from "react"
import {Container, Col} from "react-bootstrap";
import Style from "./style";
import {Link} from "gatsby";
import Dropdown from "./dropdown"


const Header = () => {

    const [showdown, setShowDown] = useState(false);
    const [ham, setHam] = useState('passive');
    const [header, setHeader] = useState('hide-res-list');

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
    const responsiveFunction = () => {
        if (header === 'hide-res-list' && ham === 'passive') {
            setHam('active')
            setHeader('show-res-list')
        }
        else {
            setHeader('hide-res-list')
            setHam('passive')
        }
    }
    return (
        <div className="nav-main">
            <Container className="p-0">
                <div className="main-nav d-flex align-items-center justify-content-between">
                    <Col md={5}><Link to={"/"}><img src="https://i.ibb.co/V91VVb0/logoth.png"
                                                    className="logo-img"/></Link></Col>
                    <Col md={4} className="header-list-col">
                        <ul className="header-list">
                            <li><Link to={"/"}>HOME</Link></li>
                            <li><Link to="/about-us">ABOUT US</Link></li>
                            <li><Link to="/contact-us">CONTACT</Link></li>
                        </ul>
                    </Col>
                    <Col md={2} className="header-img-col">
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
                    <Col md={7} className="responsove-header p-0">
                        <div className="ham-nav" onClick={() => responsiveFunction()}>
                            <div className={"burger-button " + ham}>
                                <span className="burger-top"/>
                                <span className="burger-middle"/>
                                <span className="burger-bottom"/>
                            </div>
                            {/* <img
                             src="/images/menu-button-of-three-horizontal.png" alt=""/> */}
                        </div>

                        <div className={"responsive-nav-div " + header }>
                            <ul>
                                <li className="user-img-list">
                                    <div className="user-img-div"
                                         style={{backgroundImage: "url(" + (typeof localStorage !== "undefined" && localStorage.getItem("userImg") ? localStorage.getItem("userImg") : "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png") + ")",}}/>
                                </li>
                                <li><Link to={"/"}>HOME</Link></li>
                                <li><Link to="/about-us">ABOUT US</Link></li>
                                <li><Link to="/contact-us">CONTACT</Link></li>
                                <li onClick={() => Logout()}>LOGOUT</li>
                            </ul>
                        </div>
                    </Col>




                </div>

            </Container>

            <Style/>
        </div>
    )
}


export default Header
