import React, {useState} from "react";
import Style from "./style";
import {Container, Form, Button} from "react-bootstrap";

const LoginComponent = () => {
    const [email, setEmail] = useState(null);
    const [password, setpassword] = useState(null);
    const [error, seterror] = useState("")

    const Login = (event) => {
        event.preventDefault();
        let loginData = {
            email:"test@test.com",
            password:"beed123!"
        }
        if (email=== loginData.email && password===loginData.password){
            localStorage.setItem("beedUser", true);
            window.location.href = "/"
        }
        else {
            seterror("Invalid Email Or Password")
            setTimeout(() => {
                seterror("")
            }, 3000)
        }

    }

    return (
        <Container className="login-container">
            <h1>Log in to your account</h1>
            <Form onSubmit={(event) => Login(event)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                                  onChange={(event) => setEmail(event.target.value)}/>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                  onChange={(event) => setpassword(event.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className="error">{error}</p>
            </Form>
            <Style/>
        </Container>
    )
}
export default LoginComponent;