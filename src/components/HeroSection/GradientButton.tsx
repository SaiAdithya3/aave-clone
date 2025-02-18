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
      className="relative group cursor-pointer rounded-full border border-zinc-200"
      whileHover="hover"
      animate="initial"
      initial="initial"
    >
      <motion.div
        className="absolute w-full scale-90 inset-0 group-hover:rotate-[10deg] transition-transform group-hover:scale-110 rounded-full"
        // variants={gradientVariants}
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, #ff8947 0deg, #b5e7fa 124.43deg, #9896ff 179.13deg, #63bbb6 233.53deg, #ffd631 308.53deg, #ff8947 364.52deg)',
        }}
        transition={{
          duration: 2,
          ease: "linear",
        }}
      />
      {/* <motion.div
        className="absolute inset-[0px] rounded-full w-full bg-white"
      /> */}
      <span className="relative z-10 py-2 px-3 rounded-full font-inter bg-white w-full h-full flex items-center gap-2 font-[500] text-black">
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


    /* transform: scaleX(0.95) scaleY(0.8); */
    /* will-change: transform; */
//   }
//   .styles_button__SL_b_ .styles_highlight__Zryzp {
//       z-index: 1;
//       position: absolute;s
//       inset: -3px;
//       border-radius: 50px;
//       overflow: hidden;
//   }
//   * {
//       outline: 0;
//       padding: 0;
//       margin: 0;
//       border: 0;
//       box-sizing: border-box;

//       transform: none;
//       will-change: transform;
//   }
//   .styles_button__SL_b_ .styles_highlight__Zryzp .styles_rainbow__NLqxL {
//       position: absolute;
//       inset: -200% -25%;
//       --red: #ff8947;
//       --blue: #b5e7fa;
//       --purple: #9896ff;
//       --green: #63bbb6;
//       --yellow: #ffd631;
//       background: conic-gradient(from 0deg at 50% 50%, var(--red) 0deg, var(--blue) 124.43deg, var(--purple) 179.13deg, var(--green) 233.53deg, var(--yellow) 308.53deg, var(--red) 364.52deg);


// }
// .styles_button__SL_b_ .styles_content__1jMaL {
//     z-index: 2;
//     position: relative;
//     pointer-events: none;
//     display: inline-flex
// ;
//     align-items: center;
//     column-gap: 6px;
//     box-shadow: 0 0 0 1.5px rgba(0, 0, 0, .06);
//     border-radius: 50px;
//     padding: 9px 16px 9px 20px;
//     background-color: #fff;
//     font-family: var(--font-sans);
//     font-size: 16px;
//     font-weight: 500;
//     line-height: 125%;
//     letter-spacing: -.18px;
//     color: #221d1d;
//     transition: box-shadow .15sease-in-out, background-color .15sease-in-out;