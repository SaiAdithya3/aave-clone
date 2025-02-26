import { motion } from "framer-motion";
import { LogoData } from "./data/logos";

interface LogoProps {
  logo: LogoData;
}

export const Logo = ({ logo }: LogoProps) => {
  return (
    <motion.div className="relative items-center" whileHover="hover" initial="initial">
      <motion.a
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        variants={{
          hover: { scale: 1.05 },
          initial: { scale: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#F7F6F6] rounded-2xl">{logo.svg}</div>
      </motion.a>

      <motion.div
        className="absolute flex bg-black justify-center items-center gap-[6px] z-[1] top-[-46px] py-[12px] px-[16px] rounded-[50px] min-w-max whitespace-nowrap text-[14px] font-[500] tracking-[-0.18px] text-white pointer-events-none"
        variants={{
          hover: { opacity: 1, y: -10 },
          initial: { opacity: 0, y: 0 },
        }}
        transition={{ duration: 0.1 }}
        style={{
          boxShadow:" 0 2px 3px 0 rgba(0, 0, 0, .08), 0 6px 16px 0 rgba(0, 0, 0, .1)"
        }}
      >
        <p className="font-inter font-medium whitespace-nowrap text-sm text-white">
          {logo.name}
        </p>
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="currentColor"
        >
          <path d="M6.86188 0.709162C7.15477 0.416269 7.62965 0.416269 7.92254 0.709162L12.6862 5.47283C12.9791 5.76572 12.9791 6.2406 12.6862 6.53349L7.92254 11.2972C7.62965 11.59 7.15477 11.59 6.86188 11.2972C6.56899 11.0043 6.56899 10.5294 6.86188 10.2365L10.3452 6.75316L0.84217 6.75316C0.427956 6.75316 0.0921694 6.41737 0.0921696 6.00316C0.092169 5.58895 0.427956 5.25316 0.84217 5.25316L10.3452 5.25316L6.86188 1.76982C6.56899 1.47693 6.56899 1.00206 6.86188 0.709162Z"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};
