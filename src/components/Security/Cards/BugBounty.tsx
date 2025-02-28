import React from "react";
import { motion } from "framer-motion";


const BugBounty = () => {
  const rows = [
    { y: 255, count: 5, duration: 0.5, delay: 1, size: 21, repeatDelay: 2 },
    { y: 215, count: 4, duration: 0.5, delay: 1, size: 21, repeatDelay: 2 },
    { y: 175, count: 3, duration: 0.5, delay: 1, size: 21, repeatDelay: 2 },
    { y: 135, count: 2, duration: 0.5, delay: 1, size: 21, repeatDelay: 2 },
    { y: 88, count: 1, duration: 0.5, delay: 1, size: 28, repeatDelay: 2 }
  ];


  const createCircle = (x: number, y: number, size: number) => (
    <motion.g style={{ transformOrigin: `${x}px ${y}px` }}>
      <path
        d={`M${x} ${y + size}C${x + size * 0.55} ${y + size} ${x + size} ${y + size * 0.55} ${x + size} ${y}C${x + size} ${y - size * 0.55} ${x + size * 0.55} ${y - size} ${x} ${y - size}V${y + size}Z`}
        fill="#63BBB6"
      />
      <path
        d={`M${x} ${y - size}C${x - size * 0.55} ${y - size} ${x - size} ${y - size * 0.55} ${x - size} ${y}C${x - size} ${y + size * 0.55} ${x - size * 0.55} ${y + size} ${x} ${y + size}L${x} ${y - size}Z`}
        fill="#1F807B"
      />
    </motion.g>
  );

  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 493 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {rows.map((row, rowIndex) => (
        <motion.g
          key={rowIndex}
          initial={{ rotate: 0 }}
          animate={{ 
            rotate: 0
          }}
          transition={{
            duration: row.duration,
            repeat: Infinity,
            ease: "linear",
            delay: row.delay,
            repeatDelay: row.repeatDelay
          }}
          style={{ transformOrigin: `246px ${row.y}px` }}
        >
          {Array.from({ length: row.count }).map((_, index) => {
            const spacing = row.count === 1 ? 0 : 45; 
            const offset = (spacing * (row.count - 1)) / 2;
            const x = 246 - offset + (spacing * index);
            
            return (
              <motion.g
                key={index}
                style={{
                  transformOrigin: `${x}px ${row.y}px`
                }}
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: row.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: row.delay,
                  repeatDelay: row.repeatDelay
                }}
              >
                {createCircle(x, row.y, row.size)}
              </motion.g>
            );
          })}
        </motion.g>
      ))}
    </svg>
  );
};

export default BugBounty;