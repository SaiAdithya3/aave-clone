import React from 'react';
import { motion } from 'framer-motion';

interface ExtensiveProps {
  isInView: boolean;
}

const createTransition = (delay: number) => ({
  duration: 2,
  repeatDelay: 1,
  delay,
  ease: "easeInOut",
  repeat: Infinity,
});

const Extensive: React.FC<ExtensiveProps> = ({ isInView }) => {
  const revealAnimation = {
    hidden: { x: 460 },
    animate: {
      x: isInView ? [460, 0] : 460,
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeInOut",
        once: true,
      }
    }
  };

  const topRowAnimations = {
    rect1: {
      hidden: { width: 242 },
      animate: {
        width: isInView ? [242, 142, 142, 142, 242] : 242,
        transition: createTransition(0.5)
      }
    },
    circle: {
      hidden: { x: 0 },
      animate: {
        x: isInView ? [0, -100, -100, -100, 0] : 0,
        transition: createTransition(0.5)
      }
    },
    rect2: {
      hidden: { width: 63, x: 0 },
      animate: {
        x: isInView ? [0, -100, -100, -100, 0] : 0,
        width: isInView ? [63, 138, 138, 138, 63] : 63,
        transition: createTransition(0.5)
      }
    },
    rect3: {
      hidden: { width: 63, x: 0 },
      animate: {
        x: isInView ? [0, -25, -25, -25, 0] : 0,
        width: isInView ? [63, 88, 88, 88, 63] : 63,
        transition: createTransition(0.5)
      }
    }
  };

  const middleRowAnimations = {
    rect1: {
      hidden: { width: 63 },
      animate: {
        width: isInView ? [63, 163, 163, 163, 63] : 63,
        transition: createTransition(0.75)
      }
    },
    rect2: {
      hidden: { width: 151, x: 0 },
      animate: {
        x: isInView ? [0, 100, 100, 100, 0] : 0,
        width: isInView ? [151, 101, 101, 101, 151] : 151,
        transition: createTransition(0.75)
      }
    },
    circle: {
      hidden: { x: 0 },
      animate: {
        x: isInView ? [0, 50, 50, 50, 0] : 0,
        transition: createTransition(0.75)
      }
    },
    rect3: {
      hidden: { width: 163},
      animate: {
        x: isInView ? [-30, 20, 20, 20, -30] : 0,
        transition: createTransition(0.75),
        // delay: 0.75,
      }
    }
  };

  const bottomRowAnimations = {
    circle: {
      hidden: { x: 0 },
      animate: {
        x: isInView ? [0, -30, -30, -30, 0] : 0,
        transition: createTransition(0.6)
      }
    },
    rect1: {
      hidden: { width: 182, x: 0 },
      animate: {
        x: isInView ? [0, -25, -25, -25, 0] : 0,
        width: isInView ? [182, 157, 157, 157, 182] : 182,
        transition: createTransition(0.6)
      }
    },
    rect2: {
      hidden: { width: 63, x: 0 },
      animate: {
        x: isInView ? [0, -50, -50, -50, 0] : 0,
        width: isInView ? [63, 113, 113, 113, 63] : 63,
        transition: createTransition(0.6)
      }
    }
  };

  const renderTopRow = () => (
    <>
      <motion.rect variants={topRowAnimations.rect1} x="39" y="65" height="32" rx="16" fill="#1F807B" />
      <motion.g variants={topRowAnimations.circle} style={{ transformOrigin: '313px 81px' }}>
        <path d="M313 61C324.046 61 333 69.9543 333 81C333 92.0457 324.046 101 313 101V61Z" fill="#1F807B" />
        <path d="M313 101C301.954 101 293 92.0457 293 81C293 69.9543 301.954 61 313 61L313 101Z" fill="#63BBB6" />
      </motion.g>
      <motion.rect variants={topRowAnimations.rect2} x="345" y="65" height="32" rx="16" fill="#63BBB6" />
      <motion.rect variants={topRowAnimations.rect3} x="424" y="65" height="32" rx="16" fill="#63BBB6" />
    </>
  );

  const renderMiddleRow = () => (
    <>
      <motion.rect variants={middleRowAnimations.rect1} x="107" y="113" height="32" rx="16" fill="#63BBB6" />
      <motion.rect variants={middleRowAnimations.rect2} x="186" y="113" height="32" rx="16" fill="#1F807B" />
      <motion.g variants={middleRowAnimations.circle} style={{ transformOrigin: '369px 129px' }}>
        <path d="M369 109C380.046 109 389 117.954 389 129C389 140.046 380.046 149 369 149V109Z" fill="#1F807B" />
        <path d="M369 149C357.954 149 349 140.046 349 129C349 117.954 357.954 109 369 109L369 149Z" fill="#63BBB6" />
      </motion.g>
      <motion.rect variants={middleRowAnimations.rect3} x="434" y="113" height="32" rx="16" fill="#63BBB6" />
    </>
  );

  const renderBottomRow = () => (
    <>
      <motion.g variants={bottomRowAnimations.circle} style={{ transformOrigin: '199px 177px' }}>
        <path d="M199 157C210.046 157 219 165.954 219 177C219 188.046 210.046 197 199 197V157Z" fill="#1F807B" />
        <path d="M199 197C187.954 197 179 188.046 179 177C179 165.954 187.954 157 199 157L199 197Z" fill="#63BBB6" />
      </motion.g>
      <motion.rect variants={bottomRowAnimations.rect1} x="231" y="161" height="32" rx="16" fill="#63BBB6" />
      <motion.rect variants={bottomRowAnimations.rect2} x="429" y="161" height="32" rx="16" fill="#1F807B" />
    </>
  );

  return (
    <svg
      className="inline-block max-w-full h-auto align-top my-0 md:my-auto mx-auto"
      width="493"
      height="257"
      viewBox="0 0 493 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        initial="hidden"
        animate="animate"
        variants={revealAnimation}
        style={{ transformOrigin: '263px 81px' }}
      >
        {renderTopRow()}
        {renderMiddleRow()}
        {renderBottomRow()}
      </motion.g>
    </svg>
  );
};

export default Extensive;