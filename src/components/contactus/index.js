import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function ContactUs() {
    return(
        <Container className="mt-165">
        <form className="mbr-form"  method="post" data-form-title="Mobirise Form">
            <Row className="row-sm-offset pt-80">
                <Col md={4} className="multi-horizontal" data-for="name">
                    <div className="form-group">
                        <label className="form-control-label mbr-fonts-style display-7">Name</label>
                        <input type="text" className="form-control" name="name" data-form-field="Name" required="" id="name-form1-4"/>
                    </div>
                </Col>
                <Col md={4}  className="multi-horizontal" data-for="email">
                    <div className="form-group">
                        <label className="form-control-label mbr-fonts-style display-7">Email</label>
                        <input type="email" className="form-control" name="email" data-form-field="Email" required="" id="email-form1-4"/>
                    </div>
                </Col>
                <div className="col-md-4 multi-horizontal" data-for="phone">
                    <div className="form-group">
                        <label className="form-control-label mbr-fonts-style display-7">Phone</label>
                        <input type="tel" className="form-control" name="phone" data-form-field="Phone" id="phone-form1-4"/>
                    </div>
                </div>
            </Row>
            <div className="form-group" data-for="message">
                <label className="form-control-label mbr-fonts-style display-7" >Message</label>
                <textarea type="text" className="form-control" name="message" rows="7" data-form-field="Message" id="message-form1-4"/>
            </div>
            <span className="input-group-btn d-flex justify-content-center">
                <button type="submit" className="btn btn-medium btn-success">SEND</button>
            </span>
        </form>
        </Container>
    )
}

export default ContactUs;