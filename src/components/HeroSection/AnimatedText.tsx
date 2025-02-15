import { motion } from "framer-motion";

export const AnimatedText = () => {
  const text = "Access the full power of DeFi.";
  const words = text.split(" ");

  return (
    <div className="font-regola font-semibold text-5xl flex flex-wrap gap-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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