import React from "react";
import { motion } from "framer-motion";

const MultinetworkCard = ({ isInView }: { isInView: boolean }) => {
  const circleVariants = {
    initial: { x: 100, scale: 0, opacity: 0 },
    animate: { 
      x: isInView ? 0 : 100, 
      scale: isInView ? 1 : 0, 
      opacity: isInView ? 1 : 0 
    },
    transition: (delay: number) => ({
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: delay,
    }),
  };

  const createToAndFro = (delay: number) => ({
    animate: {
      x: isInView ? [-5, 5, -5] : 0,
      transition: {
        duration: 4,
        repeat: isInView ? Infinity : 0,
        ease: "easeInOut",
        delay: delay,
      }
    }
  });

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      width="237"
      height="169"
      viewBox="0 0 237 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="styles_cardIllustration__rMiSa absolute top-0 right-0 z-[-1]"
    >
      <motion.g
        initial="initial"
        animate="animate"
        variants={circleVariants}
        transition={circleVariants.transition(0.2)}
        style={{ transformOrigin: "65px 57px" }}
      >
        <motion.g
          animate={createToAndFro(0.2).animate}
          style={{ transformOrigin: "65px 57px" }}
        >
          <path
            d="M65 122C29.1015 122 8.98209e-06 92.8986 1.52588e-05 57.0001L130 57.0001C130 92.8986 100.899 122 65 122Z"
            fill="#9896FF"
          />
          <path
            d="M65 -7.99988C100.899 -7.99988 130 21.1016 130 57.0001L0 57.0001C3.13835e-06 21.1016 29.1015 -7.99988 65 -7.99988Z"
            fill="#E2E0FF"
          />
        </motion.g>
      </motion.g>

      <motion.g
        initial="initial"
        animate="animate"
        variants={circleVariants}
        transition={circleVariants.transition(0.4)}
        style={{ transformOrigin: "158.286px 57px" }}
      >
        <motion.g
          animate={createToAndFro(0.4).animate}
          style={{ transformOrigin: "158.286px 57px" }}
        >
          <path
            d="M158.286 -35.8574C107.003 -35.8573 65.4289 5.71631 65.4289 57L251.144 57C251.144 5.7163 209.57 -35.8574 158.286 -35.8574Z"
            fill="#9896FF"
          />
          <path
            d="M158.286 149.857C209.57 149.857 251.143 108.284 251.143 57L65.4287 57C65.4287 108.284 107.002 149.857 158.286 149.857Z"
            fill="#BCBBFF"
          />
        </motion.g>
      </motion.g>

      <motion.g
        initial="initial"
        animate="animate"
        variants={circleVariants}
        transition={circleVariants.transition(0.6)}
        style={{ transformOrigin: "251px 57px" }}
      >
        <motion.g
          animate={createToAndFro(0.6).animate}
          style={{ transformOrigin: "251px 57px" }}
        >
          <path
            d="M251 169C312.856 169 363 118.856 363 57.0001L139 57.0001C139 118.856 189.144 169 251 169Z"
            fill="#9896FF"
          />
          <path
            d="M251 -54.9999C189.144 -54.9999 139 -4.85577 139 57.0001L363 57.0001C363 -4.85577 312.856 -54.9999 251 -54.9999Z"
            fill="#E2E0FF"
          />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export default MultinetworkCard;
