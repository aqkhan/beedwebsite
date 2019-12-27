import React from "react";
import Style from "./style";
import {Container} from "react-bootstrap"
const Homemain = () => {
    return (

        <div className="main-header">
            <Container>
            <div className="content-div">
                <div className="header-main-text-desc">
                    <h1>CONNECTING <span className="span1">STORES</span> WITH <br/><span className="span2">FARMS</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            </Container>
            <Style/>
        </div>
    )
}
export default Homemain;