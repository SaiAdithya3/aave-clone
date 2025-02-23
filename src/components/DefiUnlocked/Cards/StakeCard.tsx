import React from "react";
import { motion } from "framer-motion";

const StakeCard = ({ isInView }: { isInView: boolean }) => {
  const circleVariants = {
    initial: { scale: 0 },
    animate: (delay: number) => ({
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
      }
    })
  };

  const pulseVariants = {
    initial: { scale: 0.9 },
    animate: (config: { min: number, max: number, delay: number }) => ({
      scale: [config.min, config.max, config.min],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: config.delay
      }
    })
  };

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 right-0 z-[-1]"
      width="268"
      height="150"
      viewBox="0 0 268 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Outer circle */}
        <motion.g
          variants={circleVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={0.6}
          style={{ transformOrigin: "147px 0px" }}
        >
          <motion.g
            variants={pulseVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={{ min: 0.900033, max: 0.95, delay: 0.4 }}
            style={{ transformOrigin: "147px 0px" }}
          >
            <circle mask="url(#defi-stake-circle-mask-1)" cx="147" r="147" fill="#DFF6FF" />
            <circle mask="url(#defi-stake-circle-mask-2)" cx="147" r="147" fill="#6BCEF5" />
          </motion.g>
        </motion.g>

        {/* Middle circle */}
        <motion.g
          variants={circleVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={0.4}
          style={{ transformOrigin: "147px 0px" }}
        >
          <motion.g
            variants={pulseVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={{ min: 0.905359, max: 0.95, delay: 0.2 }}
            style={{ transformOrigin: "147px 0px" }}
          >
            <circle mask="url(#defi-stake-circle-mask-1)" cx="147" r="121" fill="#6BCEF5" />
            <circle mask="url(#defi-stake-circle-mask-2)" cx="147" r="121" fill="#B5E7FA" />
          </motion.g>
        </motion.g>

        {/* Inner circle */}
        <motion.g
          variants={circleVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={0.2}
          style={{ transformOrigin: "147px 0px" }}
        >
          <motion.g
            variants={pulseVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={{ min: 0.927491, max: 0.97, delay: 0 }}
            style={{ transformOrigin: "147px 0px" }}
          >
            <circle mask="url(#defi-stake-circle-mask-1)" cx="147" r="71" fill="#DFF6FF" />
            <circle mask="url(#defi-stake-circle-mask-2)" cx="147" r="71" fill="#6BCEF5" />
          </motion.g>
        </motion.g>
      </g>

      <defs>
        <mask id="defi-stake-circle-mask-1">
          <rect y="-147" width="147" height="294" fill="white" />
        </mask>
        <mask id="defi-stake-circle-mask-2">
          <rect x="147" y="-147" width="147" height="294" fill="white" />
        </mask>
      </defs>
    </motion.svg>
  );
};

export default StakeCard;