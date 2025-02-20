import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
};

export const AnimatedText: React.FC<Props> = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const words = text.split(" ");

  return (
    <div 
      ref={ref}
      className="font-regola font-[600] tracking-[-0.8px] md:leading-[55px] text-[40px] md:text-[48px] flex flex-wrap gap-2"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: i * 0.1,
            ease: [0.33, 1, 0.68, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};