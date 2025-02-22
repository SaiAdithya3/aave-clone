import { motion } from "framer-motion";

type Props = {
  text: string;
  isInView: boolean;
};

export const AnimatedText: React.FC<Props> = ({ text, isInView }) => {
  const words = text.split(" ");

  return (
    <div 
      className="font-regola font-[600] text-[#221d1d] tracking-[-0.8px] md:leading-[55px] text-[2rem] md:text-[40px] flex flex-wrap gap-2"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
          transition={{
            duration: 0.3,
            delay: i * 0.1,
            ease: [0.33, 1, 0.68, 1]
          }}
          viewport={{ once: true }} 
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};