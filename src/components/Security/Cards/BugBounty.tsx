import React from "react";
import { motion } from "framer-motion";

type BugBountyProps = {
  isInView?: boolean;
}

const BugBounty = ({ isInView = true }: BugBountyProps) => {
  const rows = [
    { y: 255, count: 5, duration: 10, delay: 0, size: 21 },
    { y: 215, count: 4, duration: 12, delay: 1, size: 21 },
    { y: 175, count: 3, duration: 8, delay: 2, size: 21 },
    { y: 135, count: 2, duration: 15, delay: 3, size: 21 },
    { y: 85, count: 1, duration: 10, delay: 4, size: 28 }
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
            delay: row.delay
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