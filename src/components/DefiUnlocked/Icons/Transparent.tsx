import React from "react";
import { motion } from "framer-motion";

const Transparent = () => {
  const leftCircleAnimation = {
    animate: {
      cx: [9, 13, 9],
      transition: {
        delay: 2,
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }
    }
  };

  const rightCircleAnimation = {
    animate: {
      cx: [21, 17, 21],
      transition: {
        delay: 2,
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
      <mask id="transparent-mask-left" width="32" height="32">
        <rect x="-16" y="0" width="64" height="32" fill="white" />
        <motion.ellipse
          className="ellipse-left-outline"
          cy="16"
          rx="0"
          ry="0"
          fill="black"
          animate="animate"
          variants={leftCircleAnimation}
        />
      </mask>
      <motion.ellipse
        mask="url(#transparent-mask-right)"
        className="ellipse-left"
        cy="16"
        rx="6"
        ry="10"
        fill="#D4D3FD"
        animate="animate"
        variants={leftCircleAnimation}
      />
      <mask id="transparent-mask-right" width="32" height="32">
        <rect x="-16" y="0" width="64" height="32" fill="white" />
        <motion.ellipse
          className="ellipse-right-outline"
          cy="16"
          rx="11"
          ry="16"
          fill="black"
          animate="animate"
          variants={rightCircleAnimation}
        />
      </mask>
      <motion.ellipse
        mask="url(#transparent-mask-left)"
        className="ellipse-right"
        cy="16"
        rx="8"
        ry="13"
        fill="#9896FF"
        animate="animate"
        variants={rightCircleAnimation}
      />
    </svg>
  );
};

export default Transparent;