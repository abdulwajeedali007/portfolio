import React, { useRef, useEffect } from "react";
import "./projects.scss";
import { Container, Row, Col } from "react-bootstrap";
import Cardbox from "./Cardbox";
import foodExplore from "../../Utils/Projectscreens/foodExplore.jpg";
import movieApp from "../../Utils/Projectscreens/movieApp.jpg";
import fitnessPro from "../../Utils/Projectscreens/fitnessPro.jpg";
import sequal from "../../Utils/Projectscreens/sequel.jpg";

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
      id={"projects"}
      className="projects"
      initial="hidden"
      animate={mainControls}
      variants={container}
      ref={ref}
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <motion.p className="m-0" variants={element}>
              MY WORK
            </motion.p>
            <motion.h2 variants={element} className="mb-3 fw-bolder">
              Projects.
            </motion.h2>
            <motion.p variants={element} className="text">
              Following projects showcase my skills and experience through
              real-world example of my work. Each project is briefly described
              with links to code respositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </motion.p>
          </Col>
        </Row>
        <Row>
          <motion.div
            variants={element}
            className="col-lg-3 col-md-6 col-xs-12 mb-3"
          >
            <Cardbox
              variants={element}
              title="foodExplore"
              description="Good food & Great vibes, The only thing we're serious about is food."
              url="https://abdulwajeedali007.github.io/Explore-foodItemShop/"
              tags={{ tag1: "React", tag2: "SCSS", tag3: "Bootstrap" }}
              image={foodExplore}
            />
          </motion.div>
          <motion.div
            variants={element}
            className="col-lg-3 col-md-6 col-xs-12 mb-3"
          >
            <Cardbox
              variant={element}
              title="movieApp"
              description="MovieApp One platform for all Latest MOVIE update, get the old movies updates with a total details of that movie"
              url="https://abdulwajeedali007.github.io/movies-watchlist/"
              image={movieApp}
              tags={{ tag1: "React", tag2: "SCSS", tag3: "Bootstrap" }}
            />
          </motion.div>
          <motion.div
            variants={element}
            className="col-lg-3 col-md-6 col-xs-12 mb-3"
          >
            <Cardbox
              variants={element}
              title="fitnessPro"
              description="FitnessPro is designed for people who want to track their progress and reach tranining goals"
              tags={{
                tag1: "React",
                tag2: "SCSS",
                tag3: "Bootstrap",
                tag4: "Nodejs",
              }}
              url="https://main--cranky-beaver-3fbacd.netlify.app/"
              image={fitnessPro}
            />
          </motion.div>
          <motion.div
            variants={element}
            className="col-lg-3 col-md-6 col-xs-12 mb-3"
          >
            <Cardbox
              title="Sequel"
              description="Our organization is an assembly of hardworking, experience, dynamic andedicated professional working to provide quality and superior business solutions. "
              tags={{ tag1: "React", tag2: "SCSS", tag3: "Bootstrap" }}
              url="https://abdulwajeedali007.github.io/sequel/home.html"
              image={sequal}
            />
          </motion.div>
        </Row>
      </Container>
    </motion.section>
  );
}

export default Index;
