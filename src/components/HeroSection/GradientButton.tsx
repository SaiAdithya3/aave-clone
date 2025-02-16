import { motion } from "framer-motion";

export const GradientButton = () => {
  const gradientVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      rotate: 0,
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      rotate: 360,
    },
  };

  return (
    <motion.button
      className="relative py-2 px-4 rounded-full border border-zinc-200"
      whileHover="hover"
      animate="initial"
      initial="initial"
    >
      {/* <motion.div
        className="absolute inset-0 rounded-full"
        variants={gradientVariants}
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, #ff8947 0deg, #b5e7fa 124.43deg, #9896ff 179.13deg, #63bbb6 233.53deg, #ffd631 308.53deg, #ff8947 364.52deg)',
        }}
        transition={{
          duration: 2,
          ease: "linear",
        }}
      /> */}
      <motion.div
        className="absolute inset-[2px] rounded-full bg-white"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 0.97 },
        }}
      />
      <span className="relative z-10 font-inter flex items-center gap-2 font-[500] text-black">
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M4.5 10H16M16 10L11.5 5.5M16 10L11.5 14.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </motion.button>
  );
};
