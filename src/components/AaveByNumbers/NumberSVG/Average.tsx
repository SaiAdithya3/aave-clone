import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Average = () => {
  // console.log(isInView2);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const circleVariants = {
    hidden: { y: 100 },
    visible: (custom: number) => ({
      y: 0,
      transition: {
        duration: 0.4,
        delay: custom * 0.3,
        ease: "easeOut",
      },
    }),
  };

  const rotateVariants = {
    initial: { rotate: 20.4099 },
    animate: {
      rotate: [-30.4099, 50, -30.4099],
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
      className="w-full lg::w-[457px] lg:h-[250px]"
      viewBox="0 0 457 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <rect width="457" height="250" fill="#B5E7FA" />
      <motion.g
        variants={rotateVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        style={{ transformOrigin: "228.5px 250px" }}
      >
        <g>
          <motion.circle
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            mask="url(#supply-circle-outer-mask-1)"
            cx="228.5"
            cy="250"
            r="228.5"
            fill="#DFF6FF"
          />
          <mask id="supply-circle-outer-mask-1">
            <rect x="0" y="21.5" width="228.5" height="457" fill="white" />
          </mask>
          <motion.circle
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            mask="url(#supply-circle-outer-mask-2)"
            cx="228.5"
            cy="250"
            r="228.5"
            fill="#6BCEF5"
          />
          <mask id="supply-circle-outer-mask-2">
            <rect x="228.5" y="21.5" width="228.5" height="457" fill="white" />
          </mask>

          <g style={{ transform: "none", transformOrigin: "228.684px 250px" }}>
            <motion.circle
              variants={circleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              mask="url(#supply-circle-inner-mask-1)"
              cx="228.684"
              cy="250"
              r="114"
              fill="#DFF6FF"
            />
            <mask id="supply-circle-inner-mask-1">
              <rect x="228.5" y="114" width="114" height="228" fill="white" />
            </mask>
            <motion.circle
              variants={circleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              mask="url(#supply-circle-inner-mask-2)"
              cx="228.684"
              cy="250"
              r="114"
              fill="#6BCEF5"
            />
            <mask id="supply-circle-inner-mask-2">
              <rect x="114.5" y="114" width="114" height="228" fill="white" />
            </mask>
          </g>
        </g>
      </motion.g>
    </motion.svg>
  );
};

export default Average;
