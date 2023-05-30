import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage } from "formik";
// import contact_image from "../../Images/contact-us.jpg";
import MessageError from "./MessageError";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { motion, useInView, useAnimation } from "framer-motion";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  mobile: "",
  message: "",
};

const validationSchema = Yup.object({
  firstname: Yup.string().required("Field can't be empty"),
  lastname: Yup.string().required("Field can't be empty"),
  email: Yup.string()
    .required("Field can't be empty")
    .email("Email has to be valid"),
  mobile: Yup.number().required("Field can't be empty").positive().integer(),
  message: Yup.string().required("Field can't be empty"),
});

const container = {
  hidden: {
    opcaity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
      when: "beforeChildren",
      staggerChildren: 0.09,
      delay: 0.02,
    },
  },
};

const element = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
    },
  },
};

function Index() {
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <>
      <section className="contact" id={"contact"}>
        <Container>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={mainControls}
            variants={container}
          >
            <Row className="mb-5 justify-content-center">
              <Col lg={8} xs={12}>
                <motion.p variants={element} className="p-0 m-0 text-uppercase">
                  Quick Message
                </motion.p>
                <motion.h2 variants={element} className="heading fw-bold">
                  Contact.
                </motion.h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={8} xs={12}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, onsubmitProps) => {
                    try {
                      emailjs
                        .send(
                          process.env.REACT_APP_SERVICE_ID,
                          process.env.REACT_APP_TEMPLATE_ID,
                          values,
                          process.env.REACT_APP_PUBLIC_KEY
                        )
                        .then((result) => {
                          console.log(result.text);
                          if (result.text === "OK") {
                            setSuccess(true);
                            setTimeout(() => {
                              setSuccess(false);
                            }, 3000);
                          }
                          onsubmitProps.resetForm();
                        });
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  {(props) => {
                    return (
                      <Form>
                        {success ? (
                          <div class="alert alert-success " role="alert">
                            Your form has been successfuly submitted.
                          </div>
                        ) : null}
                        <div className="row">
                          <motion.div variants={element} className="col">
                            <div className="form-floating mb-3">
                              <Field
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder=" what's your frist name?"
                                className="form-control"
                              />
                              <label htmlFor="firstname">First Name</label>
                              <ErrorMessage
                                name="firstname"
                                component={MessageError}
                              />
                            </div>
                          </motion.div>
                          <motion.div variants={element} className="col">
                            <div className="form-floating mb-3">
                              <Field
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder=" what's your last name?"
                                className="form-control"
                              />
                              <label htmlFor="lastname">Last Name</label>
                              <ErrorMessage
                                name="lastname"
                                component={MessageError}
                              />
                            </div>
                          </motion.div>
                        </div>
                        <div className="row">
                          <motion.div variants={element} className="col">
                            <div className="form-floating mb-3">
                              <Field
                                type="email"
                                name="email"
                                id="email"
                                placeholder=" what's your email?"
                                className="form-control"
                              />
                              <label htmlFor="email">Email</label>
                              <ErrorMessage
                                name="email"
                                component={MessageError}
                              />
                            </div>
                          </motion.div>
                          <motion.div variants={element} className="col">
                            <div className="form-floating mb-3">
                              <Field
                                type="number"
                                name="mobile"
                                id="mobile"
                                placeholder=" what's your email?"
                                className="form-control"
                              />
                              <label htmlFor="mobile">Mobile Number</label>
                              <ErrorMessage
                                name="mobile"
                                component={MessageError}
                              />
                            </div>
                          </motion.div>
                        </div>
                        <motion.div
                          variants={element}
                          className="form-floating mb-3"
                        >
                          <Field
                            as="textarea"
                            name="message"
                            id="message"
                            placeholder=" what do you want to say?"
                            className="form-control"
                            style={{ height: "100px" }}
                          />
                          <label htmlFor="name"> Message</label>
                          <ErrorMessage
                            name="message"
                            component={MessageError}
                          />
                        </motion.div>
                        <motion.button
                          variants={element}
                          type="submit"
                          className="submit_button"
                        >
                          Submit
                        </motion.button>
                      </Form>
                    );
                  }}
                </Formik>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
      <section className="footer text-center">
        <p className="m-0">&copy; copyright- {new Date().toDateString()}</p>
      </section>
    </>
  );
}

export default Index;
