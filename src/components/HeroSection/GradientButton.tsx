import { motion } from "framer-motion";

export const GradientButton = () => {
  const gradientRotate = {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const gradientScale = {
    initial: { scaleX: 0.95, scaleY: 0.8 },
    hover: {
      scaleX: [0.95, 1, 1, 0.95, 0.95],
      scaleY: [0.8, 1, 1, 0.8, 0.8],
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const buttonStyle = {
    initial: { 
      backgroundColor: '#ffffff', 
      boxShadow: '0 0 0 1.5px rgba(0,0,0,.06)' 
    },
    hover: {
      backgroundColor: '#fcfcfb',
      boxShadow: '0 0 0 1.5px rgba(0,0,0,.1)',
      transition: {
        duration: 0.15,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="hover"
      className="relative inline-flex cursor-pointer items-center"
    >
      <motion.span
        variants={buttonStyle}
        className="relative z-10 py-[9px] px-5 rounded-full font-inter bg-white flex items-center gap-2 font-[500] text-[#221d1d] leading-[125%] tracking-[-0.18px]"
      >
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
      </motion.span>

      <motion.span
        variants={gradientScale}
        className="absolute -inset-[3px] rounded-full overflow-hidden"
      >
        <motion.span 
          variants={gradientRotate}
          className="absolute -inset-y-[200%] -inset-x-[25%]"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, #ff8947 0deg, #b5e7fa 124.43deg, #9896ff 179.13deg, #63bbb6 233.53deg, #ffd631 308.53deg, #ff8947 364.52deg)',
          }}
        />
      </motion.span>
    </motion.div>
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