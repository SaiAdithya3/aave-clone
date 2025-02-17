"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MeetAaveBalls from "./MeetAaveBalls";

export default function MeetAave() {
  const [activeState, setActiveState] = useState("supply");

  const tabVariants = {
    inactive: {
      color: "#908e8e",
      transition: { duration: 0.3 },
    },
    active: {
      color: "#008bff",
      transition: { duration: 0.3 },
    },
  };

  const lineVariants = {
    inactive: {
      backgroundColor: "#f1f1f0",
      transition: { duration: 0.3 },
    },
    active: {
      backgroundColor: "#008bff",
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: -15,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const containerVariants = {
    supply: {
      width: "60%",
      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
    borrow: {
      width: "40%",
      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <div className="w-full flex items-start h-screen py-32 justify-center">
      <div className="w-full max-w-[1024px] flex-col flex items-center">
        <h1 className="text-[40px] text-center  font-[600] leading-[135%] tracking-[-0.8px] text-[#211d1d] w-full font-regola">
          Meet Aave.
        </h1>
        <p className="font-inter text-[20px] mt-[12px] font-[500] tracking-[-0.33px] text-[#636161]">
          Earn interest and borrow assets.
        </p>
        <div className="mt-[48px]">
          <MeetAaveBalls />
        </div>
        <div className="mt-[48px] w-full h-auto">
          <div className="w-full flex gap-[24px] pl-[24px] pr-[24px]">
            <motion.div
              className="left cursor-pointer flex items-start gap-[16px] flex-col"
              onClick={() => setActiveState("supply")}
              animate={activeState === "supply" ? "supply" : "borrow"}
              variants={containerVariants}
            >
              <motion.div
                className="w-full h-[3px] rounded-[3px] block"
                variants={lineVariants}
                animate={activeState === "supply" ? "active" : "inactive"}
              />
              <motion.h1
                className="text-[24px] font-inter font-[600] leading-[135%] tracking-[-0.47px]"
                variants={tabVariants}
                animate={activeState === "supply" ? "active" : "inactive"}
              >
                Supply
              </motion.h1>
              <AnimatePresence mode="wait">
                {activeState === "supply" && (
                  <motion.p
                    className="font-inter font-[400] leading-[150%] tracking-[-0.18px] text-[16px] text-[#636161]"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    Earn interest by supplying assets to liquidity pools.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="right cursor-pointer flex items-start gap-[16px] flex-col"
              onClick={() => setActiveState("borrow")}
              animate={activeState === "borrow" ? "supply" : "borrow"}
              variants={containerVariants}
            >
              <motion.div
                className="w-full h-[3px] rounded-[3px] block"
                variants={lineVariants}
                animate={activeState === "borrow" ? "active" : "inactive"}
              />
              <motion.h1
                className="text-[24px] font-inter font-[600] leading-[135%] tracking-[-0.47px]"
                variants={tabVariants}
                animate={activeState === "borrow" ? "active" : "inactive"}
              >
                Borrow
              </motion.h1>
              <AnimatePresence mode="wait">
                {activeState === "borrow" && (
                  <motion.p
                    className="font-inter font-[400] leading-[150%] tracking-[-0.18px] text-[16px] text-[#636161]"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    Borrow against your collateral from across multiple networks
                    and assets.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
