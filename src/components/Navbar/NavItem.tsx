import { useRef } from "react";
import { motion } from "framer-motion";

interface NavItemProps {
  title: string;
  onHover: (position: number) => void;
  onLeave: () => void;
  isActive: boolean;
}

export default function NavItem({ title, onHover, onLeave, isActive }: NavItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      onHover(rect.left + rect.width / 2);
    }
  };

  return (
    <motion.div
      ref={itemRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
    >
      <motion.h1 
        className={`font-inter px-[16px] py-[9px] text-sm font-[500] leading-[105%] text-[#221d1d] rounded-[50px] cursor-default`}
        animate={{
          backgroundColor: isActive ? "rgba(34, 29, 29, 0.03)" : "transparent"
        }}
        whileHover={{
          backgroundColor: "rgba(34, 29, 29, 0.03)"
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
}