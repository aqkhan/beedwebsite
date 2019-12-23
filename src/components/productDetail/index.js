import React from "react";
import {Container, Col, Row, Table} from "react-bootstrap";
import Style from "./style"
const productdetail = () => {
    return (
        <Container className="product-detail-container">
            <Row>
                <Col md={6}>
                    <div className="detail-background"/>
                </Col>
                <Col md={4}>
                    <div className="product-into">
                        <p>White Mod</p>
                        <span >$400.00</span>
                    </div>

                </Col>
            </Row>
            <Col md={12}>
                <div className="about-produc">
                    <h1>About this product</h1>
                    <p>Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure
                        generates a clever geometric presence, which works well in a contemporary environment. The lamp
                        is a tripod floor lamp with lagoon blue base and white metal shade.</p>
                </div>
                <hr/>
                <div className="before-table">
                    <p>Attributes</p>
                </div>
                <Table striped bordered hover>

                    <tbody>
                    <tr>
                        <td>Material</td>
                        <td>Steel & acrylic</td>
                    </tr>
                    <tr>
                        <td>Max watt.	</td>
                        <td>60W</td>
                    </tr>   <tr>
                        <td>Bulb qty.</td>
                        <td>6</td>
                    </tr>   <tr>
                        <td>Finish</td>
                        <td>Matt blue
                        </td>
                    </tr>
                    <tr>
                        <td>Fitting	</td>
                        <td>E27

                        </td>
                    </tr>

                    </tbody>
                </Table>
            </Col>
            <Style/>
        </Container>
    )
}
export default productdetail