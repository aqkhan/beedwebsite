import React, {useState, useEffect} from "react"
import {Container, Col} from "react-bootstrap";
import Style from "./style";
import {Link} from "gatsby";


const Header = () => {

    const [showdown, setShowDown] = useState(false);


    const Logout = () => {
        let userToken = localStorage.getItem("token");
        localStorage.removeItem("token")
        window.location.href = "/login"
    }
    return (
        <div className="nav-main">

            <Container className="p-0">
                <div className="main-nav d-flex align-items-center justify-content-between">
                    <Col md={2}><Link to={"/"}><img src="https://i.ibb.co/V91VVb0/logoth.png"
                                                    className="logo-img"/></Link></Col>
                    <Col md={5}>
                        <ul className="header-list">
                            <li><Link to={"/"}>HOME</Link></li>
                            <li>STORE</li>
                            <li>PAGES</li>
                            <li>CONTACT</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <div className="lougout-div d-flex">
                            <div className="user-img-div"
                                 style={{backgroundImage: "url(" + (typeof localStorage!=="undefined" && localStorage.getItem("userImg") ? localStorage.getItem("userImg") : "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png") + ")",}}/>
                            <div className="logout-dropdown">
                                {showdown &&
                                <ul>
                                    <li onClick={() => Logout()}>Logout</li>
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
