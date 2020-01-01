import React from "react";
import Style from "./style";
import {Container, Col, Form} from "react-bootstrap";
function General({ detail }) {
    return <Container className="product-detail-container">
        <div dangerouslySetInnerHTML={{__html: detail}}/>
        <Style/>
    </Container>
}

export default General;