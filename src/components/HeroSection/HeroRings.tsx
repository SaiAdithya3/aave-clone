import { motion } from "framer-motion";
import Ring from "./Ring";

const HeroRings = () => {
  const rings = [
    {
      colors: {
        stroke: "#D9F7FF",
        primary: "#39D1F9",
        secondary: "#A7E9FD",
      },
      animation: {
        hidden: { y: 420, x: 0, visibility: 'hidden'  },
        visible: {
          visibility: 'visible' ,
          y: 220,
          x: 0,
          transition: { duration: 0.5, ease: 'easeInOut', delay: 0.4 }
        }
      },
      rotation: 0,
    },
    {
      colors: {
        stroke: "#FFF7A5",
        primary: "#FFB000",
        secondary: "#FFD400",
      },
      animation: {
        hidden: { y: 430, x: 152, visibility: 'hidden'  },
        visible: {
          visibility: 'visible' ,
          y: 210,
          x: 152,
          transition: { duration: 0.5, ease: 'easeInOut', delay: 0.45 }
        }
      },
      rotation: -5,
    },
    {
      colors: {
        stroke: "#83EEE8",
        primary: "#00827B",
        secondary: "#39BEB7",
      },
      animation: {
        hidden: { y: 460, x: 304, visibility: 'hidden'  },
        visible: {
          visibility: 'visible' ,
          y: 190,
          x: 304,
          transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
        }
      },
      rotation: 0,
    },
    {
      colors: {
        stroke: "#97e9ff",
        primary: "#008aff",
        secondary: "#00adff",
      },
      animation: {
        hidden: { y: 480, x: 456, visibility: 'hidden'  },
        visible: {
          visibility: 'visible' ,
          y: 170,
          x: 456,
          transition: { duration: 0.5, ease: 'easeInOut', delay: 0.55 }
        }
      },
      rotation: 0,
    },
    {
      colors: {
        stroke: "#ffc38a",
        primary: "#ff3200",
        secondary: "#ff8130",
      },
      animation: {
        hidden: { y: 530, x: 608, visibility: 'hidden' },
        visible: {
          visibility: 'visible',
          y: 120,
          x: 608,
          transition: { duration: 0.5, ease: 'easeInOut', delay: 0.6 }
        }
      },
      rotation: -5,
    },
    {
      colors: {
        stroke: "#e3e0ff",
        primary: "#9896ff",
        secondary: "#bbbbff",
      },
      animation: {
        hidden: { y: 590, x: 760, visibility: 'hidden'  },
        visible: {
          visibility: 'visible' ,
          y: 60,
          x: 760,
          transition: { duration: 0.5, ease: 'easeInOut', delay: 0.65 }
        }
      },
      rotation: -5,
    },
  ];
  

  return (
    <div className="w-full relative pt-16 md:pt-0 overflow-hidden md:overflow-visible">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="985"
        height="438"
        fill="none"
        viewBox="0 0 985 438"
        style={{ width: "100%", pointerEvents: "auto" }}
        className=""
      >
        <g clipPath="url(#hero-animation-mask)">
          <motion.g transform="scale(1.08)">
            {rings.map((ring, index) => (
              <Ring
                key={index}
                colors={ring.colors}
                animation={ring.animation}
                rotation={ring.rotation}
              />
            ))}
          </motion.g>
        </g>
        <clipPath id="hero-animation-mask">
          <rect width="1185" height="1438" x="-100" y="-1000" fill="#fff" />
        </clipPath>
      </svg>
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        animate={{
          width: "100%",
          opacity: 1,
        }}
        transition={{
          duration: 0.75,
          ease: "easeInOut",
        }}
        className="bg-hero-rings-line w-full max-w-[1082px] h-1 rounded-full mx-auto"
      />
    </div>
  );
};

export default HeroRings;