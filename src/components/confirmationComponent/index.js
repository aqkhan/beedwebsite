import React, {useState, useEffect} from "react";
import Style from "./style";
import {Container} from "react-bootstrap";
import axios from "axios";
import Loader from "../../components/loader";

const ConfirmComponent = () => {
    const [success, setSuccuess] = useState(false);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        let iniwindow = typeof window !== 'undefined' && window;
        let path = iniwindow && iniwindow.location.search;
        path = path && path.split("=");
        path = path && path[1];

        let submirData = {
                orderId: path
            };
        axios.post("https://bls1feondl.execute-api.us-east-1.amazonaws.com/dev/v1/user/order/confirm", submirData).then(res => {
            setLoader(true);
            setSuccuess(true)
        }).catch(err => {
            setLoader(true);
            setSuccuess(false);
        })

    }, []);

    return (
        <Container>
            {
                loader ?
                <div>
                    {
                        success ?
                        <div className="details">
                            <h1>Congratulations!</h1>
                            <p>Your order has been confirmed.</p>
                        </div> : <div className="details">
                        <h1 className="confirmation-soory">Sorry!</h1>
                        <p>Your order could not be confirmed. Please contact your provider</p>
                        </div>
                    }
                </div> : <Loader/>
            }


            <Style/>
        </Container>
    )
}
export default ConfirmComponent