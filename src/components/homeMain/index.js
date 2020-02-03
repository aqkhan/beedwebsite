import React from "react";
import Style from "./style";
import {Container} from "react-bootstrap";
import Background from "../../images/home-Main.png"
const Homemain = () => {
    return (

        <div className="main-header">
            <Container>
                <div className="content-div"
                    // style={{backgroundImage: `url(${Background})`}}
                >
                    <div className="header-main-text-desc">
                        <h1>ORDER SKEWS DIRECTLY
                            FROM THE FARMS<br/><span className="span2">HASSLE FREE!</span></h1>
                        <img src={require("../../images/home-Main.png")}/>
                        <p>Trap house connection makes it easy to order skews from your favorite farms. We automate the
                            ordering and fulfillment process so you can focus on selling and getting customers.</p>
                    </div>
                </div>
            </Container>
            <Style/>
        </div>
    )
}
export default Homemain;