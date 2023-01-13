import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Form from "./Form";
import Serchlogo from "/assets/images/Serch-logo-white.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.3 },
  },
};

function SignIn() {
  return (
    <motion.div
      className="signin-page"
      id="signin"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <header>
        <Link to="/" className="serch-logo icon">
          <img src={Serchlogo} alt="logo" />
        </Link>
        <Link to="/sign-up">New admin? Signup</Link>
      </header>

      <div className="signin-column column">
        <Link to="/" className="serch-logo icon">
          <img src={Serchlogo} alt="logo" />
        </Link>

        <div className="title">
          <h1 className="serch-title">Serch</h1>
          <p className="tagline">service made easy</p>
        </div>

        <div className="footer">
          <p>Manage and see what other Serchers are doing</p>
          <Link to="/sign-up">New admin? Signup</Link>
        </div>
      </div>

      <Form />
    </motion.div>
  );
}

export default SignIn;
