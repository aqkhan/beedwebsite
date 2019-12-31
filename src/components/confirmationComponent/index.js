import React, {useState, useEffect} from "react";
import Style from "./style";
import {Container} from "react-bootstrap";
import axios from "axios";


const ConfirmComponent = () => {
    const [success, setSuccuess] = useState(false);

    useEffect(() => {
        let iniwindow = typeof window !== 'undefined' && window;
        let path = iniwindow && iniwindow.location.search;
        path = path && path.split("=");
        path = path && path[1];

        let submirData =
            {
                orderId: path
            }
        axios.post("https://bls1feondl.execute-api.us-east-1.amazonaws.com/dev/v1/user/order/confirm", submirData).then(res => {
            setSuccuess(true)
        })

    }, [])

    return (
        <Container>
            {
                success &&
                <div className="details">
                    <h1>Congratulations!</h1>
                    <p>Your Order Has Been Confirmed.</p>
                </div>
            }

            {
                !success && <div className="details">
                    <h1>Sorry!</h1>
                    <p>Your Order Could Not Been Confirmed.</p>
                </div>
            }
            <Style/>
        </Container>
    )
}
export default ConfirmComponent