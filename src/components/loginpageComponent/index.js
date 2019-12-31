import React, {useState, useEffect} from "react";
import Style from "./style";
import {Container, Form, Button} from "react-bootstrap";
import {Formik} from 'formik';
import axios from "axios";
import {apiPath} from "../../../config";
import jwt_decode from "jwt-decode";
const LoginComponent = () => {

    const [error, seterror] = useState("")
    const [submitBtn, setSubmitbtn] = useState("Submit")

    const Login = (values) => {
        setSubmitbtn("Loading...")

        let data = {
            user_name: values.username,
            password: values.password
        }

        axios.post(apiPath + "/login", data).then(res => {
            setSubmitbtn("Submit")
            if (res.data.idToken) {
                localStorage.setItem("token", res.data.idToken)
                let Newtoken = jwt_decode(res.data.idToken);
                localStorage.setItem("userImg", Newtoken["custom:thumbnail"] ? Newtoken["custom:thumbnail"] : "");
                window.location.href = "/"
            }
            else {
                seterror(res.data.message)
                setTimeout(() => {
                    seterror("")
                }, 3000)
            }


        })

    }
    const validate = (values) => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Please Enter Password';

        }

        if (!values.username) {
            errors.username = 'Please Enter Username';
        }


        return errors;
    }


    return (
        <Container className="login-container">


            <Formik validateOnChange={false} initialValues={{username: '', password: ''}}
                    validate={(values) => validate(values)}
                    onSubmit={(values) => Login(values)}
            >
                {({
                      handleSubmit, handleChange, values, touched, handleBlur,
                      errors
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <h1>Login </h1>
                        <Form.Group>
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter email"
                                          name="username"
                                          onChange={handleChange}
                                          value={values.username}
                                          onBlur={handleBlur}

                            />

                        </Form.Group>
                        <div className="error-div">
                            {errors.username && touched.username &&
                            <p>{errors.username}</p>

                            }
                        </div>
                        <Form.Group>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          name="password"
                                          onChange={handleChange}
                                          value={values.password}
                                          onBlur={handleBlur}


                            />
                        </Form.Group>
                        <p className="forgot-password">Forgot Password ? </p>
                        <div className="error-div">
                            {errors.password && touched.password &&

                            <p>{errors.password}</p>

                            }
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">
                                {submitBtn}
                            </Button>
                        </div>
                        <div className="error-div">
                            <p className="error">{error}</p>
                        </div>
                        <p className="dont-have-account">Don't Have an Account.<span>Sign Up</span></p>
                    </Form>
                )}
            </Formik>
            <Style/>
        </Container>
    )
}
export default LoginComponent;