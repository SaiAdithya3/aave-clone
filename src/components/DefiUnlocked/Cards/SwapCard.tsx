import { motion } from "framer-motion";

const SwapCard = ({ isInView }: { isInView: boolean }) => {
  const circleVariants = {
    hidden: { y: -150, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-6, 2, -6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    stop: {
      y: 0
    }
  };

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      width="473"
      height="160"
      viewBox="0 0 473 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 right-0 z-[-1]"
    >
      <g transform="translate(0 -150)">
        <motion.g
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            mixBlendMode: "multiply",
            transformOrigin: "323px 150px",
          }}
        >
          <motion.g
            variants={floatVariants}
            animate={isInView ? "float" : "stop"}
            style={{
              transformOrigin: "323px 150px",
            }}
          >
            <g id="Ellipse 3341">
              <path
                d="M323 9.15527e-05C240.157 0.000106037 173 67.1574 173 150C173 232.843 240.157 300 323 300L323 9.15527e-05Z"
                fill="#FFD7B3"
              />
            </g>
            <g id="Ellipse 7914">
              <path
                d="M323 -3.05176e-05C405.843 -1.60329e-05 473 67.1573 473 150C473 232.843 405.843 300 323 300L323 -3.05176e-05Z"
                fill="#FF8947"
              />
            </g>
          </motion.g>
        </motion.g>

        <motion.g
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          style={{
            mixBlendMode: "multiply",
            transformOrigin: "473px 150px",
          }}
        >
          <motion.g
            variants={floatVariants}
            animate={isInView ? "float" : "stop"}
            transition={{ delay: 0.5 }}
            style={{
              transformOrigin: "473px 150px",
            }}
          >
            <g id="Ellipse 3341_2">
              <path
                d="M473 9.15527e-05C555.843 0.000106037 623 67.1574 623 150C623 232.843 555.843 300 473 300L473 9.15527e-05Z"
                fill="#FFD7B3"
              />
            </g>
            <g id="Ellipse 7914_2">
              <path
                d="M473 -3.05176e-05C390.157 -1.60329e-05 323 67.1573 323 150C323 232.843 390.157 300 473 300L473 -3.05176e-05Z"
                fill="#FF8947"
              />
            </g>
          </motion.g>
        </motion.g>
      </g>
    </motion.svg>
  );
};

export default SwapCard;