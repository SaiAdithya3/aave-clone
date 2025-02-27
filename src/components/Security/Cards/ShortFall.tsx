import React from "react";
import { motion } from "framer-motion";

const ShortFall = () => {
  const outerCircles = [
    { x: 248, y: 60 },
    { x: 296.083, y: 79.9167 },
    { x: 316, y: 128 },
    { x: 296.083, y: 176.083 },
    { x: 248, y: 196 },
    { x: 199.917, y: 176.084 },
    { x: 180, y: 128 },
    { x: 199.917, y: 79.9167 }
  ];

  const circleVariants = {
    hidden: { rotate: 0 },
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const centerCircleVariants = {
    hidden: { scale: 1 },
    animate: {
      scale: [1, 1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <svg
      className="w-full h-full"
      width="497"
      height="256"
      viewBox="0 0 497 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        initial="hidden"
        animate="animate"
        variants={circleVariants}
        style={{ transformOrigin: "248px 128px" }}
      >
        {outerCircles.map((circle, index) => (
          <motion.g key={index} style={{ transformOrigin: `${circle.x}px ${circle.y}px` }}>
            {index % 2 === 0 ? (
              // Regular circles
              <>
                <path
                  d={`M${circle.x} ${circle.y + 21}C${circle.x + 11.598} ${circle.y + 21} ${circle.x + 21} ${circle.y + 11.598} ${circle.x + 21} ${circle.y}C${circle.x + 21} ${circle.y - 11.598} ${circle.x + 11.598} ${circle.y - 21} ${circle.x} ${circle.y - 21}V${circle.y + 21}Z`}
                  fill="#63BBB6"
                />
                <path
                  d={`M${circle.x} ${circle.y - 21}C${circle.x - 11.598} ${circle.y - 21} ${circle.x - 21} ${circle.y - 11.598} ${circle.x - 21} ${circle.y}C${circle.x - 21} ${circle.y + 11.598} ${circle.x - 11.598} ${circle.y + 21} ${circle.x} ${circle.y + 21}L${circle.x} ${circle.y - 21}Z`}
                  fill="#1F807B"
                />
              </>
            ) : (
              // Diamond-shaped circles
              <>
                <path
                  d={`M${circle.x - 14.799} ${circle.y + 14.799}C${circle.x - 6.598} ${circle.y + 23} ${circle.x + 6.698} ${circle.y + 23} ${circle.x + 14.899} ${circle.y + 14.799}C${circle.x + 23.1} ${circle.y + 6.598} ${circle.x + 23.1} ${circle.y - 6.698} ${circle.x + 14.899} ${circle.y - 14.899}L${circle.x - 14.799} ${circle.y + 14.799}Z`}
                  fill="#63BBB6"
                />
                <path
                  d={`M${circle.x + 14.899} ${circle.y - 14.899}C${circle.x + 6.698} ${circle.y - 23.1} ${circle.x - 6.598} ${circle.y - 23.1} ${circle.x - 14.799} ${circle.y - 14.899}C${circle.x - 23} ${circle.y - 6.698} ${circle.x - 23} ${circle.y + 6.598} ${circle.x - 14.799} ${circle.y + 14.799}L${circle.x + 14.899} ${circle.y - 14.899}Z`}
                  fill="#1F807B"
                />
              </>
            )}
          </motion.g>
        ))}
      </motion.g>

      <motion.g
        initial="hidden"
        animate="animate"
        variants={centerCircleVariants}
        style={{ transformOrigin: "248px 128px" }}
      >
        <path
          d="M248 156C263.464 156 276 143.464 276 128C276 112.536 263.464 100 248 100V156Z"
          fill="#1F807B"
        />
        <path
          d="M248 100C232.536 100 220 112.536 220 128C220 143.464 232.536 156 248 156L248 100Z"
          fill="#63BBB6"
        />
      </motion.g>
    </svg>
  );
};

export default ShortFall;