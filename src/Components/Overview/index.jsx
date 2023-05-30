import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import webdeveloper from "../../Images/js.png";
import backenddeveloper from "../../Images/node-js.png";
import figma from "../../Images/figma.png";
import "./overview.scss";
import { motion, useInView, useAnimation } from "framer-motion";

const container = {
  hidden: {
    opcaity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
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

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.section
      id={"aboutus"}
      className="intro"
      ref={ref}
      variants={container}
      initial="hidden"
      animate={mainControls}
    >
      <Container>
        <div className="intro_content mb-5">
          <motion.p variants={element} className="mb-2">
            INTRODUCTION
          </motion.p>
          <motion.h2 variants={element} className="mb-3">
            Overview.
          </motion.h2>
          <motion.p variants={element} className="intro_text">
            I'm a skilled software developer with experience in Javascript, and
            expertise in frameworks like React, Nodejs, and Express.I'm a quick
            learner and collaborate closely with clients to create efficient,
            scalable, and use-friendly solutions that solve real-world problems.
            Let's work together to bring your ideas to life!
          </motion.p>
        </div>
        <div className="card_content">
          <Row>
            <Col lg={3} sm={`12 column`}>
              <motion.div variants={element} className="card_container h-100">
                <img src={webdeveloper} alt="" className="mb-4" />
                <h4 className="card_title mt-auto">
                  Web <br /> Developer
                </h4>
                <h3 className="card_number">01</h3>
              </motion.div>
            </Col>
            <Col lg={3} sm={`12 column`}>
              <motion.div variants={element} className="card_container h-100">
                <img src={backenddeveloper} alt="" className="mb-4" />
                <h4 className="card_title mt-auto">
                  Backend <br /> Developer
                </h4>
                <h3 className="card_number">02</h3>
              </motion.div>
            </Col>
            <Col lg={3} sm={`12 column`}>
              <motion.div variants={element} className="card_container h-100">
                <img src={figma} alt="" className="mb-4" />
                <h4 className="card_title mt-auto">
                  UX / UI <br /> Developer
                </h4>
                <h3 className="card_number">03</h3>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </motion.section>
  );
}

export default Index;
