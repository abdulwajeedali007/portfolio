import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import { SiPlatformdotsh } from "react-icons/si";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { CgMenuOreos } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";

import { motion, AnimatePresence } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";
import resume from "../../Images/Wajeed_Ali_resume.pdf";
import "./navbar.scss";
function Index() {
  const [nav, setNav] = useState(false);
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "linear",
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 1,
        delay: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      // transition: { delay: 0.6 },
    },
  };

  const menuItems = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
      },
    },
  };
  //lets start animation
  const mobileContainer = {
    initial: { height: 0, opacity: 0 },
    visible: {
      height: "100vh",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.1,
      },
    },

    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };
  //lets start animation
  const mobileItem = {
    initial: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },

    exit: {
      opacity: 0,
      y: 70,
      transition: {
        ease: "easeInOut",
        delay: 0.6,
      },
    },
  };
  return (
    <>
      <div
        className="navbar "
        expand="lg"
        style={
          window.pageYOffset < 0
            ? { backgroundColor: "red" }
            : { backgroundColor: "transparent" }
        }
      >
        <Container fluid>
          <motion.div
            initial={{ transform: "translateY(-100px)" }}
            animate={{ transform: "translateY(0)" }}
            transition={{ delay: 0.2 }}
            className="container-fluid d-flex justify-content-between"
          >
            <motion.div
              className="d-flex align-items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* <img src={logo} alt="" className="logo" /> */}
              <SiPlatformdotsh className="logo" />{" "}
              <h2 className="logo_w">W.</h2>
            </motion.div>

            <Row>
              <motion.div
                className="d-flex"
                variants={list}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={menuItems}
                  className="phone  align-items-center d-none d-md-flex"
                >
                  <div className="phone_icon">
                    <BsPhone />
                  </div>
                  <div className="phone_number_details">
                    <p className="phone_number_details__text m-0">
                      For WhatsApp & Call
                    </p>
                    <p className="phone_number_details__number m-0">
                      +91 9133 666 188
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={menuItems}
                  className="email mx-5 d-flex align-items-center d-none d-md-flex"
                >
                  <div className="email_icon">
                    <MdOutlineMarkEmailUnread />
                  </div>
                  <div className="email_details">
                    <p className="email_details__text m-0">Official Contact</p>
                    <p className="email_details__id m-0">
                      imwajeedali@gmail.com
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={menuItems}
                  className="resume  d-none d-md-block"
                >
                  <a
                    href={resume}
                    download={resume}
                    className="d-flex align-items-center resume_button_desktop"
                  >
                    <div className="resume_icon m-0">
                      <BsCreditCard2Front />
                    </div>

                    <button href="/" download>
                      Resume
                    </button>
                  </a>
                </motion.div>
                {/* mobile menu button */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="email align-items-center  d-flex d-md-none"
                  onClick={() => setNav(true)}
                >
                  <div className="email_icon">
                    <CgMenuOreos />
                  </div>
                </motion.div>
              </motion.div>
            </Row>
          </motion.div>
        </Container>
      </div>
      <motion.div
        initial={{ transform: "translateX(-100px) rotate(90deg)" }}
        animate={{ transform: "translateX(0) rotate(90deg)" }}
        transition={{ delay: 0.2 }}
        className="nav_bar_desktop d-none d-md-block"
      >
        <motion.div
          variants={list}
          initial="hidden"
          animate="visible"
          className="mx-auto w-75 d-flex "
        >
          <motion.div variants={item}>
            <NavHashLink smooth className="nav-link" to="#home">
              W.
            </NavHashLink>
          </motion.div>
          <motion.div variants={item}>
            <NavHashLink smooth className="nav-link" to="#aboutus">
              About
            </NavHashLink>
          </motion.div>
          <motion.div variants={item}>
            <NavHashLink smooth className="nav-link" to="#experience">
              Exp.
            </NavHashLink>
          </motion.div>
          <motion.div variants={item}>
            <NavHashLink smooth className="nav-link" to="#projects">
              Projects
            </NavHashLink>
          </motion.div>
          <motion.div variants={item}>
            <NavHashLink smooth className="nav-link" to="#contact">
              Contact
            </NavHashLink>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Mobile view */}
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={mobileContainer}
            initial="initial"
            animate="visible"
            exit="exit"
            className="nav_bar_mobile d-flex"
          >
            <motion.div
              className="close_button  d-flex align-items-center"
              onClick={() => setNav(false)}
            >
              <div className="email_icon m-0">
                <TfiClose />
              </div>
            </motion.div>

            <motion.div
              variants={mobileItem}
              className="email d-flex align-items-center "
            >
              <div className="email_icon">
                <MdOutlineMarkEmailUnread />
              </div>
              <div className="email_details">
                <p className="email_details__text m-0">Official Contact</p>
                <p className="email_details__id m-0">imwajeedali@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              variants={mobileItem}
              className="phone mb-5 d-flex align-items-center"
            >
              <div className="phone_icon ">
                <BsPhone />
              </div>
              <div className="phone_number_details">
                <p className="phone_number_details__text m-0">
                  For WhatsApp & Call
                </p>
                <p className="phone_number_details__number m-0 ">
                  +91 9133 666 188
                </p>
              </div>
            </motion.div>
            <motion.div variants={mobileItem} onClick={() => setNav(false)}>
              <NavHashLink smooth className="nav-link" to="#home">
                W.
              </NavHashLink>
            </motion.div>
            <motion.div variants={mobileItem} onClick={() => setNav(false)}>
              <NavHashLink smooth className="nav-link" to="#aboutus">
                About
              </NavHashLink>
            </motion.div>
            <motion.div variants={mobileItem} onClick={() => setNav(false)}>
              <NavHashLink smooth className="nav-link" to="#experience">
                Exp.
              </NavHashLink>
            </motion.div>
            <motion.div variants={mobileItem} onClick={() => setNav(false)}>
              <NavHashLink smooth className="nav-link" to="#projects">
                Projects
              </NavHashLink>
            </motion.div>
            <motion.div variants={mobileItem} onClick={() => setNav(false)}>
              <NavHashLink smooth className="nav-link" to="#contact">
                Contact
              </NavHashLink>
            </motion.div>
            <motion.div
              className="resume d-flex align-items-center "
              onClick={() => setNav(false)}
            >
              <a
                href={resume}
                download={resume}
                className="d-flex align-items-center resume_button_mobile"
              >
                <div className="resume_icon m-0">
                  <BsCreditCard2Front />
                </div>

                <button>Resume</button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile view */}
    </>
  );
}

export default Index;
