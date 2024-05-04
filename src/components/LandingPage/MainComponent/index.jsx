/* eslint-disable react/prop-types */
import "./styles.css";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="crypto-meter-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Real Time.
        </motion.h1>
        <p className="info-text">lorem ipsum eed 3r 3cefe fess gsgggg</p>
        <Link to="/dashboard">
          <Button2 text={"Start Tracking"} />
        </Link>
      </div>
      <div className="right-component">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

function Button2({ text }) {
  return <div className="btn-2">{text}</div>;
}

export default MainComponent;
