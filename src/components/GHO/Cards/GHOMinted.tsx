import React from "react";
import { motion } from "framer-motion";

const GHOMinted = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      overflow="visible"
      width="417"
      height="76"
      viewBox="0 0 417 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-[48px] w-full"
    >
      {/* Background grey path */}
      <path
        d="M2 73.995C82.645 74.3047 278.148 60.3392 415 2"
        stroke="#E7E7E6"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Animated green path */}
      <motion.path
        d="M2 73.995C82.645 74.3047 278.148 60.3392 415 2"
        stroke="#00d742"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ vectorEffect: 'non-scaling-stroke' }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        style={{ transformOrigin: '414.5px 2px' }}
      >
        <motion.circle
          cx="414.5"
          cy="2"
          r="12"
          stroke="#00d742"
          strokeWidth="8"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.3, 0, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5 // Start after path animation
          }}
          style={{ transformOrigin: '414.5px 2px' }}
        />

        <motion.circle
          cx="414.5"
          cy="2"
          r="10"
          fill="#00d742"
          stroke="#FCFCFB"
          strokeWidth="3"
          initial={{ filter: 'drop-shadow(0 0 0px #00d742)' }}
          animate={{ 
            scale: [1, 1.08335, 1],
            filter: ['drop-shadow(0 0 2px #00d742)', 'drop-shadow(0 0 8px #00d742)', 'drop-shadow(0 0 2px #00d742)']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5 // Start after path animation
          }}
          style={{ transformOrigin: '414.5px 2px' }}
        />
      </motion.g>
    </motion.svg>
  );
};

export default GHOMinted;
