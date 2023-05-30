import React from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./herobanner.scss";
import { TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opcaity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      duration: 1.2,
      delay: 0.25,
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
      ease: "easeInOut",
    },
  },
};

function Index() {
  return (
    <div id={"home"}>
      <section className="navbar_section">
        <Container>
          <Navbar />
        </Container>
      </section>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="hero_content">
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="hero_content_details"
              >
                <motion.h2 variants={element}>
                  Hi, I'm wajeed a Front-End Developer
                </motion.h2>
                <motion.p variants={element} className="mb-4">
                  I'm javascript developer based on Hyderabad, India, I have
                  almost 5 years of experience and I specialize creating web
                  apps, I am open for new opportunities and intersting projects.
                </motion.p>
                <motion.div variants={element} className="social_icons">
                  <Link
                    to="https://www.linkedin.com/in/abdul-wajeed-ali-4460a5b4/"
                    target="_blank"
                  >
                    <TfiLinkedin />
                  </Link>
                  <Link
                    to="https://twitter.com/abdul_wajeedali"
                    target="_blank"
                    className="mx-4"
                  >
                    <TfiTwitterAlt />
                  </Link>
                  <Link
                    to="https://www.instagram.com/imwajeedali"
                    target="_blank"
                  >
                    <BsInstagram />
                  </Link>
                </motion.div>
              </motion.div>
              {/* <div className="btn_indicator"></div> */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="pattern d-none d-md-block"
              ></motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
