import React from "react";
import { motion } from "framer-motion";

const HealthFactorCard = ({ isInView }: { isInView: boolean }) => {
  const fillColor = {
    hidden: {
      fill: "#FFE8C0"
    },
    show: {
      fill: isInView ? ["#FFE8C0", "#FFF7AE", "#FFE8C0"] : "#FFE8C0",
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: isInView ? Infinity : 0
      }
    }
  };

  const strokeAndFill = {
    hidden: {
      stroke: "#FFB343",
      fill: "#FFE8C0"
    },
    show: {
      stroke: isInView ? ["#FFB343", "#FFD631", "#FFB343"] : "#FFB343",
      fill: isInView ? ["#FFE8C0", "#FFF7AE", "#FFE8C0"] : "#FFE8C0",
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: isInView ? Infinity : 0
      }
    }
  };

  const innerCircle = {
    hidden: {
      fill: "#FF8C00"
    },
    show: {
      fill: isInView ? ["#FF8C00", "#FFB800", "#FF8C00"] : "#FF8C00",
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: isInView ? Infinity : 0
      }
    }
  };

  const toAndFro = {
    initial: { rotate: 0 },
    animate: {
      rotate: isInView ? [0, 40, 0] : 0,
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: isInView ? Infinity : 0
      }
    }
  };

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.1 }}
      width="402"
      height="201"
      viewBox="0 0 402 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "translate(120px, -48px)" }}
      className="styles_cardIllustration__rMiSaa absolute top-0 right-0 z-[-1]"
    >
      <g clipPath="url(#clip0_2961_6831)">
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.circle 
            cx="201" 
            cy="201" 
            r="201" 
            variants={fillColor}
            initial="hidden"
            animate="show"
          />
        </motion.g>
        
        <motion.g
          initial={{ y: 10, scale: 0 }}
          animate={{ y: isInView ? 0 : 10, scale: isInView ? 1 : 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5
          }}
          style={{ transformOrigin: "201px 201px" }}
        >
          <motion.circle
            cx="201"
            cy="201"
            r="109.5"
            strokeWidth="55"
            variants={strokeAndFill}
            initial="hidden"
            animate="show"
          />
          
          <motion.g
            variants={toAndFro}
            initial="initial"
            animate="animate"
            style={{ transformOrigin: "201px 201px" }}
          >
            <motion.circle
              cx="201"
              cy="91.5"
              r="31"
              stroke="#FCFCFB"
              strokeWidth="12"
              variants={innerCircle}
              initial="hidden"
              animate="show"
            />
          </motion.g>
        </motion.g>
      </g>
      <defs>
        <clipPath id="clip0_2961_6831">
          <rect width="402" height="201" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default HealthFactorCard;