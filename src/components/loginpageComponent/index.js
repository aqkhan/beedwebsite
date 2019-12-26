import React, {useState} from "react";
import Style from "./style";
import {Container, Form, Button} from "react-bootstrap";
import {Formik} from 'formik';
const LoginComponent = () => {

    const [error, seterror] = useState("")

    const Login = (values) => {
        let loginData = {
            email: "test@test.com",
            password: "beed123!"
        }
        if (values.email === loginData.email && values.password === loginData.password) {
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
    const validate = (values) => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Please Enter Password';

        }

        if (!values.email) {
            errors.email = 'Please Enter Email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    return (
        <Container className="login-container">
            <h1>Log in to your account</h1>

            <Formik  validateOnChange={false} initialValues={{email: '', password: ''}}
                    validate={(values) => validate(values)}
                    onSubmit={(values) => Login(values)}
            >
                {({
                      handleSubmit, handleChange, values, touched, handleBlur,
                      errors
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                          name="email"
                                          onChange={handleChange}
                                          value={values.email}
                                          onBlur={handleBlur}

                            />

                        </Form.Group>
                        <div className="error-div">
                        {errors.email && touched.email &&
                        <p>{errors.email}</p>

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
                        <div className="error-div">
                        {errors.password && touched.password &&

                        <p>{errors.password}</p>

                        }
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className="error">{error}</p>
                    </Form>
                )}
            </Formik>
            <Style/>
        </Container>
    )
}
export default LoginComponent;