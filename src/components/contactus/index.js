import React, {useState, useEffect} from "react";
import {Container, Col, Row} from "react-bootstrap";
import {Formik} from 'formik';
import {formPath} from "../../../config";
import axios from "axios";
import {useSpring, animated} from 'react-spring';
import jwt_decode from "jwt-decode";
const ContactUs = () => {
    const [confirmModal, SetconfirmModal] = useState(false);
    const [buttonText, SetbuttonText] = useState("SUBMIT");
    let token = typeof window !== 'undefined' && window.localStorage.getItem("token");
    token = token && jwt_decode(token);
    let phoneNumer = token && token.phone_number ? token.phone_number : "";
    let email = token && token.email ? token.email : "";
    const MenuOpen = useSpring({
        delay: confirmModal ? 300 : 0,
        height: confirmModal ? "100px" : "0px",
    });
    const Menup = useSpring({
        delay: confirmModal ? 1000 : 0,
        display: confirmModal ? "block" : "none",
    });

    const SubmitHandler = (values, resetForm) => {
        SetbuttonText("PLEASE WAIT ...")
        let data = {
            Name: values.name,
            Email: values.email,
            Message: values.message,
            contact: values.phone
        }
        axios.post(formPath, data).then(res => {
            SetconfirmModal(true);
            setTimeout(() => {
                SetconfirmModal(false)
            }, 5000);
            SetbuttonText("SUBMIT")
        })
        resetForm();
    }
    const validate = (values) => {

        const errors = {};
        if (!values.name) {
            errors.name = 'Please Enter Name';

        }
        if (!values.email) {
            errors.email = 'Please Enter Email';
        }
        if (!values.message) {
            errors.message = 'Please Enter Message';
        }

        return errors;
    }

    return (
        <Container className="mt-165">

            <Formik validateOnChange={false} initialValues={{
                name: '',
                email: email,
                message: '',
                phone: phoneNumer

            }}
                    validate={(values) => validate(values)}
                    onSubmit={(values, {resetForm}) => SubmitHandler(values, resetForm)}

            >
                {({
                      handleSubmit, handleChange, values, touched, handleBlur,
                      errors
                  }) => (
                    <form className="mbr-form contact-form" method="post" data-form-title="Mobirise Form"
                          onSubmit={handleSubmit}>
                        <Row className="row-sm-offset pt-80">
                            <Col md={4} className="multi-horizontal" data-for="name">
                                <div className="form-group">
                                    <label className="form-control-label mbr-fonts-style display-7">Name</label>
                                    <input type="text" className="form-control" name="name" data-form-field="Name"
                                           required="" id="name-form1-4"
                                           onChange={handleChange}
                                           value={values.name}
                                           onBlur={handleBlur}
                                    />

                                </div>
                                <div className="error-div">
                                    {errors.name && touched.name &&

                                    <p>{errors.name}</p>

                                    }
                                </div>
                            </Col>
                            <Col md={4} className="multi-horizontal" data-for="email">
                                <div className="form-group">
                                    <label className="form-control-label mbr-fonts-style display-7">Email</label>
                                    <input type="email" className="form-control" name="email" data-form-field="Email"
                                           required="" id="email-form1-4"
                                           onChange={handleChange}
                                           value={values.email}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                <div className="error-div">
                                    {errors.email && touched.email &&

                                    <p>{errors.email}</p>

                                    }
                                </div>
                            </Col>
                            <Col md={4} className="multi-horizontal" data-for="phone">
                                <div className="form-group">
                                    <label className="form-control-label mbr-fonts-style display-7">Phone</label>
                                    <input type="tel" className="form-control" name="phone" data-form-field="Phone"
                                           id="phone-form1-4"
                                           onChange={handleChange}
                                           value={values.phone}
                                           onBlur={handleBlur}
                                    />
                                </div>

                            </Col>
                        </Row>
                        <div className="form-group" data-for="message">
                            <label className="form-control-label mbr-fonts-style display-7">Message</label>
                            <textarea type="text" className="form-control" name="message" rows="7"
                                      data-form-field="Message" id="message-form1-4"
                                      onChange={handleChange}
                                      value={values.message}
                                      onBlur={handleBlur}
                            />
                        </div>
                        <div className="error-div">
                            {errors.message && touched.message &&

                            <p>{errors.message}</p>

                            }
                        </div>
                        <span className="input-group-btn d-flex justify-content-center">
                <button type="submit" className="btn btn-medium btn-success">{buttonText}</button>
            </span>
                    </form>
                )}
            </Formik>
            <animated.div className="order-submission-modal" style={MenuOpen}>
                <animated.p style={Menup}>Thank You For Contacting Us.</animated.p>
            </animated.div>


        </Container>
    )
}

export default ContactUs;