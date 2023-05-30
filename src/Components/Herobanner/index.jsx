import React from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "react-bootstrap";
import "./herobanner.scss";
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
    <div>
      <section className="navbar_section" id={"home"}>
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
                <motion.p variants={element}>
                  I'm javascript developer based on Hyderabad, India, I have
                  almost 5 years of experience and I specialize creating web
                  apps, I am open for new opportunities and intersting projects.
                </motion.p>
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
