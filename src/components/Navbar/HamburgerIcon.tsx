import { motion } from "framer-motion";

type HamburgerIconProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerIcon = ({ isOpen, onClick }: HamburgerIconProps) => {
  return (
    <button
      className="flex flex-col justify-center items-center z-[100] w-8 h-8 md:hidden"
      onClick={onClick}
    >
      <motion.div className="w-6 flex flex-col gap-[7px] items-end">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? -8 : 0,
            width: "24px",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="h-[2px] w-6 bg-black block origin-left"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            width: "24px",
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="h-[2px] w-6 bg-black block origin-left"
        />
      </motion.div>
    </button>
  );
};

export default HamburgerIcon;