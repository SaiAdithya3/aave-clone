import { motion } from "framer-motion";
import { LogoData } from "./data/logos";

interface LogoProps {
  logo: LogoData;
}

export const Logo = ({ logo }: LogoProps) => {
  return (
    <motion.div
      className="relative"
      whileHover="hover"
      initial="initial"
    >
      <motion.a
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        variants={{
          hover: { scale: 1.05 },
          initial: { scale: 1 }
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#F7F6F6] rounded-2xl p-6">
          <svg
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={logo.svgPath}
              fill="#211D1D"
            />
          </svg>
        </div>
      </motion.a>
      
      <motion.div
        className="absolute -top-2 left-0 w-full bg-[#211D1D] rounded-lg p-4 shadow-lg pointer-events-none"
        variants={{
          hover: { opacity: 1, y: -10 },
          initial: { opacity: 0, y: 0 }
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-inter font-medium whitespace-nowrap text-sm text-white">{logo.name}</p>
        {/* <p className="font-inter text-xs text-[#636161] mt-1">{logo.name}</p> */}
        <svg
          className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2"
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 8L0 0L16 0L8 8Z" fill="white"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};