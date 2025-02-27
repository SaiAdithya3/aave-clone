import { motion, AnimatePresence } from "framer-motion";

type DeveloperIllustrationProps = {
  isActive?: number;
};

export const DeveloperIllustration = ({
  isActive,
}: DeveloperIllustrationProps) => {
  const transition = {
    duration: 0.3,
    ease: "easeInOut",
  };

  return (
    <motion.svg
      className="overflow-hidden w-[256px] h-[192px] rounded-lg"
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="192"
      viewBox="0 0 256 192"
      fill="none"
      initial={false}
    >
      <motion.rect
        rx="8"
        width="256"
        height="192"
        animate={{
          fill:
            isActive === 1
              ? "color(display-p3 0.4196 0.8078 0.9608)"
              : isActive === 2
              ? "color(display-p3 0.121 0.5025 0.4806)"
              : isActive === 3
              ? "color(display-p3 1 0.72 0)"
              : "color(display-p3 0.4196 0.8078 0.9608)",
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />

      <AnimatePresence mode="wait">
        {/* Blue Elements - Only visible when isActive === 1 */}
        {isActive === 1 && (
          <>
            <motion.g
              initial={{ y: 128, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 128, opacity: 0 }}
              transition={{ ...transition, delay: 0.05 }}
              style={{ transformOrigin: "128px 192px" }}
            >
              <path
                d="M128 192C128 262.692 185.308 320 256 320L256 64C185.308 64 128 121.308 128 192Z"
                fill="#B5E7FA"
              />
              <path
                d="M128 192C128 262.692 70.6924 320 -3.35703e-05 320L0 64C70.6925 64 128 121.308 128 192Z"
                fill="#DFF6FF"
              />
            </motion.g>
            <motion.g
              initial={{ y: 252, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 252, opacity: 0 }}
              transition={{ ...transition }}
              style={{ transformOrigin: "128px 252px" }}
            >
              <path
                d="M128 252C128 322.692 70.6924 380 -3.35703e-05 380L0 124C70.6925 124 128 181.308 128 252Z"
                fill="#B5E7FA"
              />
              <path
                d="M128 252C128 322.692 185.308 380 256 380L256 124C185.308 124 128 181.308 128 252Z"
                fill="#DFF6FF"
              />
            </motion.g>
          </>
        )}

        {/* Green Elements */}
        {isActive === 2 && (
          <>
            <motion.g
              initial={{ x: -140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -140, opacity: 0 }}
              transition={{
                x: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.05,
                },
                opacity: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
            >
              <path
                d="M92 144C65.4903 144 44 122.51 44 96L140 96C140 122.51 118.51 144 92 144Z"
                fill="#63BBB6"
              />
              <path
                d="M92 48C118.51 48 140 69.4903 140 96L44 96C44 69.4903 65.4903 48 92 48Z"
                fill="#9DEBE7"
              />
            </motion.g>

            <motion.g
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.05,
              }}
              style={{ transformOrigin: "44px 96px" }}
            >
              <path
                d="M44 192C17.4903 192 -4 170.51 -3.99999 144L92 144C92 170.51 70.5097 192 44 192Z"
                fill="#63BBB6"
              />
              <path
                d="M44 96C70.5097 96 92 117.49 92 144L-4 144C-4 117.49 17.4903 96 44 96Z"
                fill="#9DEBE7"
              />
              <path
                d="M44 96C17.4903 96 -4 74.5097 -3.99999 48L92 48C92 74.5097 70.5097 96 44 96Z"
                fill="#63BBB6"
              />
              <path
                d="M44 -3.4331e-06C70.5097 -1.11555e-06 92 21.4903 92 48L-4 48C-4 21.4903 17.4903 -5.75065e-06 44 -3.4331e-06Z"
                fill="#9DEBE7"
              />
            </motion.g>

            <motion.g
              initial={{ x: -44, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -44, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{ transformOrigin: "-4px 96px" }}
            >
              <path
                d="M-4 144C-30.5097 144 -52 122.51 -52 96L44 96C44 122.51 22.5097 144 -4 144Z"
                fill="#63BBB6"
              />
              <path
                d="M-4 144C22.5097 144 44 165.49 44 192L-52 192C-52 165.49 -30.5097 144 -4 144Z"
                fill="#9DEBE7"
              />
              <path
                d="M-4 48C-30.5097 48 -52 26.5097 -52 -1.67852e-05L44 0C44 26.5097 22.5097 48 -4 48Z"
                fill="#63BBB6"
              />
              <path
                d="M-4 48C22.5097 48 44 69.4903 44 96L-52 96C-52 69.4903 -30.5097 48 -4 48Z"
                fill="#9DEBE7"
              />
            </motion.g>
          </>
        )}

        {/* Yellow Elements - Only visible when isActive === 3 */}
        {isActive === 3 && (
          <motion.g
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={transition}
            style={{ transformOrigin: "210px 96px" }}
          >
            <motion.g
              initial={{ x: 170, rotate: -45 }}
              animate={{ x: 0, rotate: 0 }}
              exit={{ rotate: -45 }}
              transition={{ ...transition, delay: 0.1 }}
              style={{ transformOrigin: "210px 96px" }}
            >
              <path
                d="M86 96C86 164.483 141.517 220 210 220L210 96L86 96Z"
                fill="#FFF7AE"
              />
              <path
                d="M334 96C334 27.5167 278.483 -28 210 -27.9999L210 96L334 96Z"
                fill="#FFF7AE"
              />
              <path
                d="M210 -28C141.517 -28 86.0001 27.5167 86.0001 96L210 96L210 -28Z"
                fill="#FFD631"
              />
              <path
                d="M210 220C278.483 220 334 164.483 334 96L210 96L210 220Z"
                fill="#FFD631"
              />
            </motion.g>
            <motion.g
              initial={{ x: 170, rotate: 45 }}
              animate={{ x: 0, rotate: 0 }}
              exit={{ rotate: 45 }}
              transition={{ ...transition, delay: 0.1 }}
              style={{ transformOrigin: "210px 96px" }}
            >
              <path
                d="M210 174.324C253.26 174.324 288.328 139.256 288.328 95.9961L210 95.9961L210 174.324Z"
                fill="#FFF7AE"
              />
              <path
                d="M210 17.6677C166.74 17.6677 131.672 52.7365 131.672 95.9961L210 95.9961L210 17.6677Z"
                fill="#FFF7AE"
              />
              <path
                d="M131.672 95.9961C131.672 139.256 166.74 174.324 210 174.324L210 95.9961L131.672 95.9961Z"
                fill="#FFD631"
              />
              <path
                d="M288.328 95.9961C288.328 52.7365 253.26 17.6677 210 17.6677L210 95.9961L288.328 95.9961Z"
                fill="#FFD631"
              />
            </motion.g>
          </motion.g>
        )}
      </AnimatePresence>
    </motion.svg>
  );
};
