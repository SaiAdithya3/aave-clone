import React from "react";
import { motion } from "framer-motion";

interface FooterLinesProps {
  isInView: boolean;
}

const FooterLines = ({ isInView }: FooterLinesProps) => {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <div className="w-full flex flex-col">
      <motion.div 
        className="mx-[14px] relative h-[12px] transition-opacity duration-100 ease-in opacity-100"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-md after:h-1 after:bg-[linear-gradient(90deg,#39d1f9_0%,#ffb400_20%,#00827c_40%,#008aff_60%,#ff3200_80%,#9896ff_100%)] after:bg-[length:200%_100%] after:animate-[gradientAnimation_6s_linear_infinite] after:origin-center" />
      </motion.div>
      
      <motion.div 
        className="mx-[64px] relative h-[12px] transition-opacity duration-100 ease-in hover:opacity-100 opacity-50"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.1 }}
      >
        <div className="after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-md after:h-1 after:bg-[linear-gradient(90deg,#39d1f9_0%,#ffb400_20%,#00827c_40%,#008aff_60%,#ff3200_80%,#9896ff_100%)] after:bg-[length:200%_100%] after:animate-[gradientAnimation_6s_linear_infinite] after:origin-center" />
      </motion.div>
      
      <motion.div 
        className="mx-[114px] relative h-[12px] transition-opacity duration-100 ease-in hover:opacity-100 opacity-20"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
      >
        <div className="after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-md after:h-1 after:bg-[linear-gradient(90deg,#39d1f9_0%,#ffb400_20%,#00827c_40%,#008aff_60%,#ff3200_80%,#9896ff_100%)] after:bg-[length:200%_100%] after:animate-[gradientAnimation_6s_linear_infinite] after:origin-center" />
      </motion.div>
      
      <motion.div 
        className="mx-[164px] relative h-[12px] transition-opacity duration-100 ease-in hover:opacity-100 opacity-10"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
      >
        <div className="after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:rounded-md after:h-1 after:bg-[linear-gradient(90deg,#39d1f9_0%,#ffb400_20%,#00827c_40%,#008aff_60%,#ff3200_80%,#9896ff_100%)] after:bg-[length:200%_100%] after:animate-[gradientAnimation_6s_linear_infinite] after:origin-center" />
      </motion.div>
    </div>
  );
};

export default FooterLines;