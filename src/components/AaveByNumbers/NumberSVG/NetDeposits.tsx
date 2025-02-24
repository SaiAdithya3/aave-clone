import React from "react";
import { motion } from "framer-motion";

const NetDeposits = ({ isInView }: { isInView: boolean }) => {
  const inView = {
    initial: { y: 220 },
    animate: {
      y: isInView ? 0 : 220,
      transition: { duration: 0.5, ease: "easeOut", delay: 0, once: true },
    },
  };

  const toFro = {
    initial: { y: -10 },
    animate: {
      y: [-10, 0, -10],
      transition: {
        duration: 3,
        ease: "easeInOut",
        delay: 0,
        repeat: Infinity,
      },
    },
  };

  return (
    <>
      <svg
        width="457"
        height="250"
        viewBox="0 0 457 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g>
            <path
              d="M0 16C0 7.16345 7.16344 0 16 0H441C449.837 0 457 7.16345 457 16V234C457 242.837 449.837 250 441 250H16C7.16344 250 0 242.837 0 234V16Z"
              fill="#9896FF"
            ></path>
            <rect id="left" width="229" height="250" fill="#BCBBFF"></rect>
            <motion.g
              initial="initial"
              animate={{
                ...toFro.animate,
                transition: {
                  ...toFro.animate.transition,
                  delay: 0.8,
                },
              }}
              variants={toFro}
              style={{
                transform: "translateY(-4.82059px)",
                transformOrigin: "229px 186px",
              }}
            >
              <motion.g
                initial="initial"
                animate={{
                  ...inView.animate,
                  transition: {
                    ...inView.animate.transition,
                    delay: 0.2,
                  },
                }}
                clipPath="url(#clip1_2915_1498)"
                id="1"
                style={{
                  transform: "none",
                  transformOrigin: "229px 186px",
                }}
              >
                <g>
                  <rect
                    x="165"
                    y="58"
                    width="128"
                    height="256"
                    rx="64"
                    fill="white"
                    // style="fill:white"
                  ></rect>
                  <rect
                    id="Rectangle 22459"
                    x="165"
                    y="58"
                    width="128"
                    height="256"
                    fill="#E2E0FF"
                    // style="fill:color(display-p3 0.8863 0.8784 1.0000)"
                  ></rect>
                  <rect
                    id="Rectangle 22458"
                    x="165"
                    y="58"
                    width="64"
                    height="256"
                    fill="#9896FF"
                    // style="fill:color(display-p3 0.5951 0.5870 1.0000)"
                  ></rect>
                </g>
              </motion.g>
            </motion.g>
            <motion.g
              initial="initial"
              animate={{
                ...toFro.animate,
                transition: {
                  ...toFro.animate.transition,
                  delay: 0.6,
                },
              }}
              variants={toFro}
              //   style="transform: translateY(-3.89848px); // transformOrigin: 165px 250px;"
              style={{
                transform: "translateY(-3.89848px)",
                transformOrigin: "165px 250px",
              }}
              // transformOrigin="165px 250px"
            >
              <motion.g
                initial="initial"
                animate={{
                  ...inView.animate,
                  transition: {
                    ...inView.animate.transition,
                    delay: 0.1,
                  },
                }}
                id="2"
                // style="transform: none; // transformOrigin: 165px 250px;"
                style={{
                  transform: "none",
                  transformOrigin: "165px 250px",
                }}
                // transformOrigin="165px 250px"
              >
                <g clipPath="url(#clip2_2915_1498)">
                  <rect
                    x="101"
                    y="122"
                    width="128"
                    height="256"
                    rx="64"
                    fill="white"
                    // style="fill:white"
                  ></rect>
                  <rect
                    id="Rectangle 22459_2"
                    x="101"
                    y="122"
                    width="128"
                    height="256"
                    fill="#E2E0FF"
                    // style="fill:color(display-p3 0.8863 0.8784 1.0000)"
                  ></rect>
                  <rect
                    id="Rectangle 22458_2"
                    x="101"
                    y="122"
                    width="64"
                    height="256"
                    fill="#9896FF"
                    // style="fill:color(display-p3 0.5951 0.5870 1.0000)"
                  ></rect>
                </g>
              </motion.g>
            </motion.g>
            <motion.g
              initial="initial"
              animate={{
                ...toFro.animate,
                transition: {
                  ...toFro.animate.transition,
                  delay: 0.4,
                },
              }}
              variants={toFro}
              //   style="transform: translateY(-2.70944px); // transformOrigin: 101px 314px;"
              style={{
                transform: "translateY(-2.70944px)",
                transformOrigin: "101px 314px",
              }}
              // transformOrigin="101px 314px"
            >
              <motion.g
                initial="initial"
                animate={{
                  ...inView.animate,
                  transition: {
                    ...inView.animate.transition,
                    delay: 0.1,
                  },
                }}
                id="4"
                // style="transform: none; // transformOrigin: 101px 314px;"
                style={{
                  transform: "none",
                  transformOrigin: "101px 314px",
                }}
                // transformOrigin="101px 314px"
              >
                <g clipPath="url(#clip3_2915_1498)">
                  <rect
                    x="37"
                    y="186"
                    width="128"
                    height="256"
                    rx="64"
                    fill="white"
                    // style="fill:white"
                  ></rect>
                  <rect
                    id="Rectangle 22459_3"
                    x="37"
                    y="186"
                    width="128"
                    height="256"
                    fill="#E2E0FF"
                    // style="fill:color(display-p3 0.8863 0.8784 1.0000)"
                  ></rect>
                  <rect
                    id="Rectangle 22458_3"
                    x="37"
                    y="186"
                    width="64"
                    height="256"
                    fill="#9896FF"
                    // style="fill:color(display-p3 0.5951 0.5870 1.0000)"
                  ></rect>
                </g>
              </motion.g>
            </motion.g>
            <motion.g
              initial="initial"
              animate={{
                ...toFro.animate,
                transition: {
                  ...toFro.animate.transition,
                  delay: 0.6,
                },
              }}
              variants={toFro}
              //   style="transform: translateY(-1.69353px); // transformOrigin: 293px 250px;"
              style={{
                transform: "translateY(-1.69353px)",
                transformOrigin: "293px 250px",
              }}
              // transformOrigin="293px 250px"
            >
              <motion.g
                initial="initial"
                animate={{
                  ...inView.animate,
                  transition: {
                    ...inView.animate.transition,
                    delay: 0,
                  },
                }}
                id="3"
                // style="transform: none; // transformOrigin: 293px 250px;"
                style={{
                  transform: "none",
                  transformOrigin: "293px 250px",
                }}
                // transformOrigin="293px 250px"
              >
                <g clipPath="url(#clip4_2915_1498)">
                  <rect
                    x="229"
                    y="122"
                    width="128"
                    height="256"
                    rx="64"
                    fill="white"
                    // style="fill:white"
                  ></rect>
                  <rect
                    id="Rectangle 22459_4"
                    x="229"
                    y="122"
                    width="128"
                    height="256"
                    fill="#E2E0FF"
                    // style="fill:color(display-p3 0.8863 0.8784 1.0000)"
                  ></rect>
                  <rect
                    id="Rectangle 22458_4"
                    x="229"
                    y="122"
                    width="64"
                    height="256"
                    fill="#9896FF"
                    // style="fill:color(display-p3 0.5951 0.5870 1.0000)"
                  ></rect>
                </g>
              </motion.g>
            </motion.g>
            <motion.g
              initial="initial"
              animate={{
                ...toFro.animate,
                transition: {
                  ...toFro.animate.transition,
                  delay: 0.5,
                },
              }}
              variants={toFro}
              //   style="transform: translateY(-0.907285px); // transformOrigin: 357px 314px;"
              style={{
                transform: "translateY(-0.907285px)",
                transformOrigin: "357px 314px",
              }}
              // transformOrigin="357px 314px"
            >
              <motion.g
                initial="initial"
                animate={{
                  ...inView.animate,
                  transition: {
                    ...inView.animate.transition,
                    delay: 0,
                  },
                }}
                id="6"
                // style="transform: none; // transformOrigin: 357px 314px;"
                style={{
                  transform: "none",
                  transformOrigin: "357px 314px",
                }}
                // transformOrigin="357px 314px"
              >
                <g clipPath="url(#clip5_2915_1498)">
                  <rect
                    x="293"
                    y="186"
                    width="128"
                    height="256"
                    rx="64"
                    fill="white"
                    // style="fill:white"
                  ></rect>
                  <rect
                    id="Rectangle 22459_5"
                    x="293"
                    y="186"
                    width="128"
                    height="256"
                    fill="#E2E0FF"
                    // style="fill:color(display-p3 0.8863 0.8784 1.0000)"
                  ></rect>
                  <rect
                    id="Rectangle 22458_5"
                    x="293"
                    y="186"
                    width="64"
                    height="256"
                    fill="#9896FF"
                    // style="fill:color(display-p3 0.5951 0.5870 1.0000)"
                  ></rect>
                </g>
              </motion.g>
            </motion.g>
            <motion.g
              initial="initial"
              animate={{
                ...toFro.animate,
                transition: {
                  ...toFro.animate.transition,
                  delay: 0.5,
                },
              }}
              variants={toFro}
              //   style="transform: translateY(-0.366273px); // transformOrigin: 229px 314px;"
              style={{
                transform: "translateY(-0.366273px)",
                transformOrigin: "229px 314px",
              }}
              // transformOrigin="229px 314px"
            >
              <motion.g
                initial="initial"
                animate={{
                  ...inView.animate,
                  transition: {
                    ...inView.animate.transition,
                    delay: 0,
                  },
                }}
                id="5"
                // style="transform: none; // transformOrigin: 229px 314px;"
                style={{
                  transform: "none",
                  transformOrigin: "229px 314px",
                }}
                // transformOrigin="229px 314px"
              >
                <g clipPath="url(#clip6_2915_1498)">
                  <rect
                    x="165"
                    y="186"
                    width="128"
                    height="256"
                    rx="64"
                    fill="white"
                    // style="fill:white"
                  ></rect>
                  <rect
                    id="Rectangle 22459_6"
                    x="165"
                    y="186"
                    width="128"
                    height="256"
                    fill="#E2E0FF"
                    // style="fill:color(display-p3 0.8863 0.8784 1.0000)"
                  ></rect>
                  <rect
                    id="Rectangle 22458_6"
                    x="165"
                    y="186"
                    width="64"
                    height="256"
                    fill="#9896FF"
                    // style="fill:color(display-p3 0.5951 0.5870 1.0000)"
                  ></rect>
                </g>
              </motion.g>
            </motion.g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2915_1498">
            <path
              d="M0 16C0 7.16345 7.16344 0 16 0H441C449.837 0 457 7.16345 457 16V234C457 242.837 449.837 250 441 250H16C7.16344 250 0 242.837 0 234V16Z"
              fill="white"
              //   style="fill:white"
            ></path>
          </clipPath>
          <clipPath id="clip1_2915_1498">
            <rect
              x="165"
              y="58"
              width="128"
              height="256"
              rx="64"
              fill="white"
              //   style="fill:white"
            ></rect>
          </clipPath>
          <clipPath id="clip2_2915_1498">
            <rect
              x="101"
              y="122"
              width="128"
              height="256"
              rx="64"
              fill="white"
              //   style="fill:white"
            ></rect>
          </clipPath>
          <clipPath id="clip3_2915_1498">
            <rect
              x="37"
              y="186"
              width="128"
              height="256"
              rx="64"
              fill="white"
              //   style="fill:white"
            ></rect>
          </clipPath>
          <clipPath id="clip4_2915_1498">
            <rect
              x="229"
              y="122"
              width="128"
              height="256"
              rx="64"
              fill="white"
              //   style="fill:white"
            ></rect>
          </clipPath>
          <clipPath id="clip5_2915_1498">
            <rect
              x="293"
              y="186"
              width="128"
              height="256"
              rx="64"
              fill="white"
              //   style="fill:white"
            ></rect>
          </clipPath>
          <clipPath id="clip6_2915_1498">
            <rect
              x="165"
              y="186"
              width="128"
              height="256"
              rx="64"
              fill="white"
              //   style="fill:white"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default NetDeposits;
