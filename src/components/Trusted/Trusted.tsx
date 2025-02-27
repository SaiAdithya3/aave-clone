import { AnimatedText } from "../utils/AnimatedText";
import { motion, useInView } from "framer-motion";
import logoData from "./logoData";
import { useRef } from "react";

export default function Trusted() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const infinite = {
    animate: {
      x: [0, "-50%"],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    },
  };
  return (
    <div ref={ref} className="w-full flex items-center flex-col pt-[100px] pb-[50px] md:pb-[100px] px-5 md:px-[48px]">
      <div className="relative w-full max-w-[986px]">
        <div className="w-full md:px-[24px]">
          <AnimatedText text="Trusted by the best." isInView={isInView}/>
          <h2 className="text-lg md:text-[20px] font-[500] tracking-[-0.33px] leading-[135%] font-inter text-[#636161]">
            Aave Protocol has been trusted by leading institutions and
            companies.
          </h2>
        </div>
        {/* <div
          className='relative overflow-hidden before:content-[""] before:left-0 before:z-[2] before:pointer-events-none before:absolute before:top-0 before:bottom-0 before:w-40 before:bg-left-fade
            after:content-[""] after:right-0 after:z-[2] after:pointer-events-none after:absolute after:top-0 after:bottom-0 after:w-40 after:bg-right-fade'
        > */}
        <div className="relative overflow-hidden pt-20">
          <div className='absolute top-0 bottom-0 left-0 z-[1] bg-gradient-to-r from-[#fff] to-transparent w-48'></div>
          <div className='absolute top-0 bottom-0 right-0 z-[1] bg-gradient-to-r from-transparent to-[#fff] w-48'></div>
          <div className="relative overflow-hidden w-[400%] md:w-[200%]">
            <motion.div
              animate="animate"
              variants={infinite}
              className="flex flex-nowrap"
            >
              <div className="flex flex-nowrap md:gap-12 md:pr-12 gap-6 pr-6">
                {logoData.map((logo, index) => (
                  <div className="flex items-center justify-center" key={index}>
                    {logo.logo}
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap md:gap-12 md:pr-12 gap-6 pr-6">
                {logoData.map((logo, index) => (
                  <div className="flex items-center justify-center" key={index}>
                    {logo.logo}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
