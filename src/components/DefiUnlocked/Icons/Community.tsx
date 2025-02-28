import React from "react";
import { motion } from "framer-motion";

const Community = () => {
  const roofAnimation = {
    animate: {
      y: [0, -2, 0],
      transition: {
        delay: 4,
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }
    }
  };

  const pillarAnimation = {
    animate: {
      scaleX: [1, 1.2, 1],
      scaleY: [1, 0.9, 1],
      transition: {
        delay: 4,
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }
    }
  };

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <motion.path
        className="roof"
        d="M13.551 4.24983C14.823 3.4813 16.4161 3.4813 17.6881 4.24983L26.56 9.61025C28.7267 10.9194 27.7986 14.25 25.2671 14.25H5.97197C3.44046 14.25 2.51241 10.9194 4.67912 9.61025L13.551 4.24983Z"
        fill="#1C488D"
        style={{ transformOrigin: "15.6195px 8.96172px" }}
        animate="animate"
        variants={roofAnimation}
      />
      <motion.rect
        className="pillar"
        x="5"
        y="17"
        width="5"
        height="11"
        rx="2"
        fill="#6188C0"
        style={{ transformOrigin: "7.5px 22.5px" }}
        animate="animate"
        variants={pillarAnimation}
      />
      <motion.rect
        className="pillar"
        x="13"
        y="17"
        width="5"
        height="11"
        rx="2"
        fill="#6188C0"
        style={{ transformOrigin: "15.5px 22.5px" }}
        animate="animate"
        variants={pillarAnimation}
      />
      <motion.rect
        className="pillar"
        x="21"
        y="17"
        width="5"
        height="11"
        rx="2"
        fill="#6188C0"
        style={{ transformOrigin: "23.5px 22.5px" }}
        animate="animate"
        variants={pillarAnimation}
      />
    </svg>
  );
};

export default Community;