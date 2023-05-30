import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./career.scss";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import {
//   html,
//   css,
//   js,
//   ts,
//   react,
//   vue,
//   node,
//   mongodb,
//   express,
// } from "../../Utils/Logos";

import { projects } from "../../Utils/data/Projects";

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
      id={"experience"}
      className="project"
      initial="hidden"
      ref={ref}
      variants={container}
      animate={mainControls}
    >
      <Container>
        <Row className="mb-5 ">
          <Col>
            <motion.p variants={element} className="m-0">
              WHAT I HAVE DONE SO FAR
            </motion.p>
            <motion.h2 variants={element} className="fw-bolder title m-0 mb-5">
              Work Experience
            </motion.h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <VerticalTimeline>
              {projects.map((project, index) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #fff",
                  }}
                  date={project.date}
                  iconStyle={{
                    background: "#fff",
                    overflow: "hidden",
                  }}
                  icon={
                    <div className="image_container">
                      <img src={project.icon} alt="" className="w-100" />
                    </div>
                  }
                  key={index}
                >
                  <h2 className="fw-bolder m-0">{project.title}</h2>
                  <p className="fw-normal m-0 sub_title">{project.name}</p>
                  <p className="project_description mb-3">{project.text}</p>
                  <ul className="project_points">
                    {project?.points?.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-center titles">
              <h3>HTML-</h3>
              <h3>CSS-</h3>
              <h3>Javascript</h3>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center titles">
              <h3>TypeScript-</h3>
              <h3>ReactJs-</h3>
              <h3>Vuejs</h3>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center titles">
              <h3>ExpressJs-</h3>
              <h3>MongoDB-</h3>
              <h3>NodeJs </h3>
            </div>
          </Col>
        </Row>
        {/* <Row className="justify-content-center">
          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={html} alt="html" className="w-100" />
            </div>
          </Col>
          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={css} alt="css" className="w-100" />
            </div>
          </Col>
          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={js} alt="javascript" className="w-100" />
            </div>
          </Col>
          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={ts} alt="typescript" className="w-100" />
            </div>
          </Col>
          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={react} alt="react" className="w-100" />
            </div>
          </Col>
          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={vue} alt="vue" className="w-100" />
            </div>
          </Col>

          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={express} alt="express" className="w-100" />
            </div>
          </Col>
          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={mongodb} alt="mongodb" className="w-100" />
            </div>
          </Col>
          <Col lg={2} md={6} xs={6} className="mb-2">
            <div className="project_logo__container_box">
              <img src={node} alt="node" className="w-100" />
            </div>
          </Col>
        </Row> */}
      </Container>
    </motion.section>
  );
}

export default Index;
