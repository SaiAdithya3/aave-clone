import { AnimatedText } from "./AnimatedText";
import { GradientButton } from "./GradientButton";
import { motion } from "framer-motion";
import HeroRings from "./HeroRings";

export default function HeroSection() {
  const circleIn = {
    initial: { r: 3.5, fill: "#9896FF" },
    active: {
      r: [3.5, 6.5, 10, 12, 14],
      fill: ["#9896FF", "#B4B2FF", "#D0CFFF", "#E2E0FF"],
      opacity: [1, 0.6, 0.4, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.2,
      },
    },
  };
  return (
    <div className="relative w-full  flex flex-col items-center mt-20 md:mt-36 p-4 md:p-0 justify-start">
      <div className="w-full max-w-[1024px] flex flex-col items-start gap-5 px-4">
        <motion.div
          initial={{ opacity: 0, y: 25, transform: "translateY(25%)" }}
          animate={{ opacity: 1, y: 0, transform: "translateY(0%)" }}
          transition={{
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1],
            delay: 1.7,
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          className="bg-gray-100 text-xs font-inter cursor-pointer hover:bg-gray-200/70 transition-all flex gap-2 rounded-full px-4 items-center py-1.5"
        >
          <motion.span>Introducing Aave&apos;s new visual identity</motion.span>
          <motion.span
            className="p-0.5 bg-zinc-400 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          />
          <motion.span className="font-[400] text-zinc-600 flex items-center gap-1">
            Read more
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#52525b]"
              width="16"
              height="16"
              fill="#52525b"
              viewBox="0 0 20 20"
            >
              <path
                d="M4.5 10H16M16 10L11.5 5.5M16 10L11.5 14.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.span>
        </motion.div>
        <h1 className="font-regola mt-1 font-[500] text-5xl">
          <AnimatedText text="Access the full power of DeFi."/>
        </h1>
        <motion.p
          className="font-inter mt-1 flex text-[20px] leading-[150%] tracking-[-.47px] flex-col text-[#636161] items-start font-[500] text-lg"
          initial={{ opacity: 0, y: 25, transform: "translateY(25%)" }}
          animate={{ opacity: 1, y: 0, transform: "translateY(0%)" }}
          transition={{
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.5,
          }}
        >
          <span>Aave is the world’s largest liquidity protocol.</span>
          <span>Supply, borrow, swap, stake and more.</span>
        </motion.p>
        <motion.div
          className=""
          initial={{ opacity: 0, y: 25, transform: "translateY(25%)" }}
          animate={{ opacity: 1, y: 0, transform: "translateY(0%)" }}
          transition={{
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.9,
          }}
        >
          <GradientButton />
        </motion.div>
        <motion.div
          className="flex text-sm items-center font-inter text-[#8f8e8e] font-light gap-1"
          initial={{ opacity: 0, y: 25, transform: "translateY(25%)" }}
          animate={{ opacity: 1, y: 0, transform: "translateY(0%)" }}
          transition={{
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1],
            delay: 1.2,
          }}
        >
          <svg className="overflow-visible" width="13" height="13">
            <circle
              cx="6.5"
              cy="6.5"
              r="3.5"
              fill="#9896FF"
              // variants={circleOut}
            ></circle>
            <motion.circle
              initial="initial"
              animate="active"
              cx="6.5"
              cy="6.5"
              r="3.5"
              fill="#E2E0FF"
              variants={circleIn}
            ></motion.circle>
          </svg>
          <span className="text-[#636161] font-normal">$ 31.44 billion</span>
          of liquidity currently supplied in Aave.
        </motion.div>
      </div>
      <div className="block mt-[-110px] -z-[10] w-[90%] md:w-full max-w-[1024px] items-center gap-5">
        <HeroRings />
      </div>
    </div>
  );
}
