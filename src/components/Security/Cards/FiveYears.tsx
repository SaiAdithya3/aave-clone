import React from "react";
import { motion } from "framer-motion";

const FiveYears = () => {
  const circleVariants = {
    animate: {
      translateX: [0, 25, 0],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  const circles = [
    { x: 125.819, r: 14.578, delay: 0 },
    { x: 155.107, r: 19.925, delay: 0.6 },
    { x: 190.833, r: 24.057, delay: 1.2 },
    { x: 235.793, r: 38.245, delay: 1.8 },
    { x: 305.249, r: 59.51, delay: 0.8 }
  ];

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 497 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {circles.map((circle, index) => (
        <motion.g
          key={index}
          initial="initial"
          animate="animate"
          variants={{
            ...circleVariants,
            animate: {
              ...circleVariants.animate,
              transition: {
                ...circleVariants.animate.transition,
                delay: index * 0.1
              }
            }
          }}
          custom={index}
          style={{ originX: circle.x, originY: 128.5 }}
        >
          <g>
            <motion.path
              d={`M ${circle.x} ${128.5 - circle.r} A ${circle.r} ${circle.r} 0 0 1 ${circle.x} ${
                128.5 + circle.r
              } V ${128.5 - circle.r} Z`}
              fill="#63BBB6"
            />
            <motion.path
              d={`M ${circle.x} ${128.5 - circle.r} A ${circle.r} ${circle.r} 0 0 0 ${circle.x} ${
                128.5 + circle.r
              } V ${128.5 - circle.r} Z`}
              fill="#1F807B"
            />
          </g>
        </motion.g>
      ))}
    </svg>
  );
};

export default FiveYears;