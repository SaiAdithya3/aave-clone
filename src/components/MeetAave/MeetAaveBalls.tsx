"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AaveInteractionProps {
  isSupply: boolean | null;
  isBorrow: boolean | null;
}

const AaveInteractionBalls = ({ isSupply, isBorrow }: AaveInteractionProps) => {
  const animationRef = useRef(null);
  const elementInView = useInView(animationRef, { once: true, amount: 0.5 });

  const balls = [
    { 
      x: 223, 
      y: 237, 
      colors: {
        light: ["#6BCEF5", "#B5E7FA"],
        dark: ["#1A88F8", "#48ABFF"]
      }, 
      delay: 0 
    },
    { x: 405, y: 201,colors: {
      light: ["#6BCEF5", "#B5E7FA"],
      dark: ["#1A88F8", "#48ABFF"]
    }, delay: 0.1 },
    { x: 587, y: 237, colors: {
      light: ["#6BCEF5", "#B5E7FA"],
      dark: ["#1A88F8", "#48ABFF"]
    }, delay: 0.2 },
    { x: 769, y: 201, colors: {
      light: ["#6BCEF5", "#B5E7FA"],
      dark: ["#1A88F8", "#48ABFF"]
    },  delay: 0.3 },
  ];

  const entranceAnimation = {
    initial: { y: -400 },
    animate: {
      y: elementInView ? 0 : -400,
      transition: { duration: 0.5, ease: "easeOut", delay: 0, once: true },
    },
  };

  const borrowTopAnimation = {
    hidden: { translateY: -184, visibility: "hidden" as const },
    show: {
      translateY: 0,
      visibility: "visible" as const,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
    },
  };

  const borrowBottomAnimation = {
    hidden: { translateY: 0, visibility: "hidden" as const },
    show: {
      translateY: 400,
      visibility: "visible" as const,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
    },
  };

  const supplyTopAnimation = {
    hidden: { translateY: 0, visibility: "hidden" as const },
    show: {
      translateY: -184,
      visibility: "visible" as const,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
    },
  };

  const supplyBottomAnimation = {
    hidden: { translateY: 400, visibility: "hidden" as const },
    show: {
      translateY: 0,
      visibility: "visible" as const,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0 },
    },
  };

  const floatAnimation = {
    hidden: { translateY: -30 },
    show: {
      translateY: [-30, 30, -30],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <motion.svg
      ref={animationRef}
      width="986"
      height="450"
      viewBox="0 0 986 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full rounded-[16px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <defs>
        <clipPath id="upperHalf">
          <rect width="986" height="225" fill="white" />
        </clipPath>
        <clipPath id="lowerHalf">
          <rect width="986" height="225" y="225" fill="white" />
        </clipPath>
      </defs>

      <rect width="986" height="450" fill="#F7F6F6" />
      <rect width="986" height="225" fill="#FCFCFB" />

      {balls.map((ball, idx) => (
        <motion.g
          key={idx}
          initial="initial"
          animate={{
            ...entranceAnimation.animate,
            transition: {
              ...entranceAnimation.animate.transition,
              delay: ball.delay,
            },
          }}
          variants={entranceAnimation}
          className={`origin-[${ball.x}px_${ball.y}px]`}
        >
          <motion.g
            initial="hidden"
            animate={{
              ...floatAnimation.show,
              transition: {
                ...floatAnimation.show.transition,
                delay: ball.delay,
              },
            }}
            variants={floatAnimation}
          >
            <motion.g
              initial="hidden"
              variants={isBorrow ? borrowTopAnimation : supplyTopAnimation}
              animate={
                isBorrow
                  ? {
                      ...borrowTopAnimation.show,
                      transition: {
                        ...borrowTopAnimation.show.transition,
                        delay: ball.delay,
                      },
                    }
                  : {
                      ...supplyTopAnimation.show,
                      transition: {
                        ...supplyTopAnimation.show.transition,
                        delay: ball.delay,
                      },
                    }
              }
            >
              <circle cx={ball.x} cy={ball.y} r="90" fill={ball.colors.light[0]} />
                <circle
                  cx={ball.x}
                  cy={ball.y}
                  r="90"
                  fill={ball.colors.light[1]}
                  mask={`url(#ballMask${idx})`}
                />
              <mask id={`ballMask${idx}`}>
                <rect
                  x={ball.x - 90}
                  y={ball.y - 90}
                  width="90"
                  height="180"
                  fill="white"
                />
              </mask>
            </motion.g>
            <motion.g
              initial="hidden"
              variants={
                isSupply
                  ? supplyBottomAnimation
                  : isBorrow
                  ? borrowBottomAnimation
                  : {}
              }
              animate={
                isSupply
                  ? {
                      ...supplyBottomAnimation.show,
                      transition: {
                        ...supplyBottomAnimation.show.transition,
                        delay: ball.delay,
                      },
                    }
                  : isBorrow
                  ? {
                      ...borrowBottomAnimation.show,
                      transition: {
                        ...borrowBottomAnimation.show.transition,
                        delay: ball.delay,
                      },
                    }
                  : {}
              }
            >
              <circle cx={ball.x} cy={ball.y} r="90" fill={ball.colors.dark[0]} />
                <circle
                  cx={ball.x}
                  cy={ball.y}
                  r="90"
                  fill={ball.colors.dark[1]}
                  mask={`url(#ballMask${idx})`}
                />
              <mask id={`ballMask${idx}_lower`}>
                <rect
                  x={ball.x - 90}
                  y={ball.y - 90}
                  width="90"
                  height="180"
                  fill="white"
                />
              </mask>
            </motion.g>
          </motion.g>
        </motion.g>
      ))}

    
    </motion.svg>
  );
};

export default AaveInteractionBalls;
