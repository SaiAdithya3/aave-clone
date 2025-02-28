import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AverageTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });
  const circleVariants = {
    hidden: { y: -150},
    visible: (custom: number) => ({
      y: 0,
      transition: {
        duration: 0.3,
        delay: custom * 0.3,
        ease: "easeOut",
      },
    }),
  };

  const rotateVariants = {
    initial: { rotate: -29.9579 },
    animate: {
      rotate: [-29.9579, -10, -29.9579, -50, -29.9579],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
    ref={ref}
      width="457"
      height="250"
      viewBox="0 0 457 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <rect width="457" height="250" fill="#48ABFF" />
      <motion.g
        variants={rotateVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        style={{ transformOrigin: "228.5px 0px" }}
      >
        <g>
          <motion.circle
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            mask="url(#borrow-circle-outer-mask-1)"
            cx="228.5"
            r="228.5"
            fill="#A9E7FF"
          />
          <mask id="borrow-circle-outer-mask-1">
            <rect x="228.5" y="-228.5" width="228.5" height="457" fill="white" />
          </mask>
          <motion.circle
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            mask="url(#borrow-circle-outer-mask-2)"
            cx="228.5"
            r="228.5"
            fill="#1A88F8"
          />
          <mask id="borrow-circle-outer-mask-2">
            <rect x="0" y="-228.5" width="228.5" height="457" fill="white" />
          </mask>

          <motion.g
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
            style={{ transformOrigin: "228.5px 0px" }}
          >
            <motion.circle
              mask="url(#borrow-circle-inner-mask-1)"
              cx="228.5"
              r="114"
              fill="#A9E7FF"
            />
            <mask id="borrow-circle-inner-mask-1">
              <rect x="114.5" y="-114" width="114" height="228" fill="white" />
            </mask>
            <motion.circle
              mask="url(#borrow-circle-inner-mask-2)"
              cx="228.5"
              r="114"
              fill="#1A88F8"
            />
            <mask id="borrow-circle-inner-mask-2">
              <rect x="228.5" y="-114" width="114" height="228" fill="white" />
            </mask>
          </motion.g>
        </g>
      </motion.g>
    </motion.svg>
  );
};

export default AverageTwo;