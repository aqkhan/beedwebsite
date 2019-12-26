import React, {useState} from "react";
import Style from "./style";
import {Container, Form, Button} from "react-bootstrap";
import {useFormik, Formik} from 'formik';


const validate = values => {

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
};
const LoginComponent = () => {
    const [email, setEmail] = useState(null);
    const [password, setpassword] = useState(null);
    const [error, seterror] = useState("")

    // const Login = (event) => {
    //     event.preventDefault();
    //     let loginData = {
    //         email:"test@test.com",
    //         password:"beed123!"
    //     }
    //     if (email=== loginData.email && password===loginData.password){
    //         localStorage.setItem("beedUser", true);
    //         window.location.href = "/"
    //     }
    //     else {
    //         seterror("Invalid Email Or Password")
    //         setTimeout(() => {
    //             seterror("")
    //         }, 3000)
    //     }
    //
    // }


    const formik = useFormik({
        initialValues: {
            password: "",
            email: "",
        },
        validate,
        onSubmit: values => {
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
        },
    });
    return (
        <Container className="login-container">
            <h1>Log in to your account</h1>


                <Form onSubmit={formik.handleSubmit}
                      validateOnChange={false}
                >
                    <Form.Group>
                        <Form.Label htmlFor="email">Email </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      name="email"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.email}
                        />

                    </Form.Group>

                    <p className="error">{formik.errors.email}</p>


                    <Form.Group>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      name="password"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.password}

                        />
                    </Form.Group>

                    <p className="error">{formik.errors.password}</p>

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