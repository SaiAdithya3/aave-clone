import React from "react";
import { motion } from "framer-motion";

const NonCustodial = () => {
  const wallet = {
    animate: {
      rotate: [0, -5, 0],
      transition: { 
        duration: 0.5, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 4.9
      }
    }
  };

  const backPathAnimation = {
    animate: {
      d: [
        "M6 18.7981V8.95194C6 7.80477 6.78074 6.80481 7.89366 6.52659L22.8937 2.77658C24.4715 2.38212 26 3.57551 26 5.20194V15.0481C26 16.1952 25.2193 17.1952 24.1063 17.4734L9.10634 21.2234C7.52847 21.6179 6 20.4245 6 18.7981Z",
        "M6 21.5V11.5C6 10.1193 7.11929 9 8.5 9L23.5 9C24.8807 9 26 10.1193 26 11.5V21.5C26 22.8807 24.8807 24 23.5 24L8.5 24C7.11929 24 6 22.8807 6 21.5Z",
        "M6 18.7981V8.95194C6 7.80477 6.78074 6.80481 7.89366 6.52659L22.8937 2.77658C24.4715 2.38212 26 3.57551 26 5.20194V15.0481C26 16.1952 25.2193 17.1952 24.1063 17.4734L9.10634 21.2234C7.52847 21.6179 6 20.4245 6 18.7981Z"
      ],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 5
      }
    }
  };

  const frontPathAnimation = {
    animate: {
      d: [
        "M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z",
        "M26 21.5V11.5C26 10.1193 24.8807 9 23.5 9L8.5 9C7.11929 9 6 10.1193 6 11.5V21.5C6 22.8807 7.11929 24 8.5 24L23.5 24C24.8807 24 26 22.8807 26 21.5Z",
        "M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z"
      ],
      transition: {
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
      <motion.g
        animate="animate"
        variants={wallet}
        style={{ transformOrigin: "6px 16px" }}
      >
        <rect width="32" height="32" />
        <motion.path
          animate="animate"
          variants={backPathAnimation}
          className="back-rect"
          fill="#6BCEF5"
        />
        <motion.path
          animate="animate"
          variants={frontPathAnimation}
          className="front-rect"
          fill="#B5E7FA"
        />
      </motion.g>
    </svg>
  );
};

export default NonCustodial;