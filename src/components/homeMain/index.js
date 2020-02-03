import React from "react";
import Style from "./style";
import {Container} from "react-bootstrap";
import Background from "../../images/home-Main.png"
const Homemain = () => {
    return (

        <div className="main-header" >
            <Container>
            <div className="content-div"
                 // style={{backgroundImage: `url(${Background})`}}
            >
                <div className="header-main-text-desc">
                    <h1>ORDER STRAIN DIRECTLY
                        FROM THE FARM <br/><span className="span2">HASSLE FREE!</span></h1>
                    <img src={require("../../images/home-Main.png")}/>
                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has*/}
                        {/*been the industry's standard dummy text ever since the 1500s, when an unknown printer took a*/}
                        {/*galley of type and scrambled it to make a type specimen book.</p>*/}
                </div>
            </div>
            </Container>
            <Style/>
        </div>
    )
}
export default Homemain;