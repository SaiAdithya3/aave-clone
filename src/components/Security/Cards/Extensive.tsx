import React from 'react';
import { motion } from 'framer-motion';

type ExtensiveProps = {
  isInView: boolean;
}

const Extensive = ({ isInView }: ExtensiveProps) => {
  const variants = {
    reveal: {
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
    },
    animations: {
      top: {
        rect1: {
          hidden: { width: 242 },
          animate: {
            width: isInView ? [242, 142, 142, 142, 242] : 242,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        },
        circle: {
          hidden: { x: 0 },
          animate: {
            x: isInView ? [0, -100, -100, -100, 0] : 0,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        },
        rect2: {
          hidden: { width: 63, x: 0 },
          animate: {
            x: isInView ? [0, -100, -100, -100, 0] : 0,
            width: isInView ? [63, 138, 138, 138, 63] : 63,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        },
        rect3: {
          hidden: { width: 63, x: 0 },
          animate: {
            x: isInView ? [0, -25, -25, -25, 0] : 0,
            width: isInView ? [63, 88, 88, 88, 63] : 63,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        }
      },
      middle: {
        rect1: {
          hidden: { width: 63 },
          animate: {
            width: isInView ? [63, 163, 163, 163, 63] : 63,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.75,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        },
        rect2: {
          hidden: { width: 151, x: 0 },
          animate: {
            x: isInView ? [0, 100, 100, 100, 0] : 0,
            width: isInView ? [151, 101, 101, 101, 151] : 151,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.75,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        },
        circle: {
          hidden: { x: 0 },
          animate: {
            x: isInView ? [0, 50, 50, 50, 0] : 0,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.75,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        }
      },
      bottom: {
        circle: {
          hidden: { x: 0 },
          animate: {
            x: isInView ? [0, -30, -30, -30, 0] : 0,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        },
        rect1: {
          hidden: { width: 182, x: 0 },
          animate: {
            x: isInView ? [0, -25, -25, -25, 0] : 0,
            width: isInView ? [182, 157, 157, 157, 182] : 182,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        },
        rect2: {
          hidden: { width: 63, x: 0 },
          animate: {
            x: isInView ? [0, -50, -50, -50, 0] : 0,
            width: isInView ? [63, 113, 113, 113, 63] : 63,
            transition: {
              duration: 2,
              repeatDelay: 1,
              delay: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
            }
          }
        }
      }
    }
  };

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
        variants={variants.reveal}
        style={{ transformOrigin: '263px 81px' }}
      >
        {/* Top Row */}
        <motion.rect variants={variants.animations.top.rect1} x="39" y="65" height="32" rx="16" fill="#1F807B" />
        <motion.g variants={variants.animations.top.circle} style={{ transformOrigin: '313px 81px' }}>
          <path d="M313 61C324.046 61 333 69.9543 333 81C333 92.0457 324.046 101 313 101V61Z" fill="#1F807B" />
          <path d="M313 101C301.954 101 293 92.0457 293 81C293 69.9543 301.954 61 313 61L313 101Z" fill="#63BBB6" />
        </motion.g>
        <motion.rect variants={variants.animations.top.rect2} x="345" y="65" height="32" rx="16" fill="#63BBB6" />
        <motion.rect variants={variants.animations.top.rect3} x="424" y="65" height="32" rx="16" fill="#63BBB6" />

        {/* Middle Row */}
        <motion.rect variants={variants.animations.middle.rect1} x="107" y="113" height="32" rx="16" fill="#63BBB6" />
        <motion.rect variants={variants.animations.middle.rect2} x="186" y="113" height="32" rx="16" fill="#1F807B" />
        <motion.g variants={variants.animations.middle.circle} style={{ transformOrigin: '369px 129px' }}>
          <path d="M369 109C380.046 109 389 117.954 389 129C389 140.046 380.046 149 369 149V109Z" fill="#1F807B" />
          <path d="M369 149C357.954 149 349 140.046 349 129C349 117.954 357.954 109 369 109L369 149Z" fill="#63BBB6" />
        </motion.g>

        {/* Bottom Row */}
        <motion.g variants={variants.animations.bottom.circle} style={{ transformOrigin: '199px 177px' }}>
          <path d="M199 157C210.046 157 219 165.954 219 177C219 188.046 210.046 197 199 197V157Z" fill="#1F807B" />
          <path d="M199 197C187.954 197 179 188.046 179 177C179 165.954 187.954 157 199 157L199 197Z" fill="#63BBB6" />
        </motion.g>
        <motion.rect variants={variants.animations.bottom.rect1} x="231" y="161" height="32" rx="16" fill="#63BBB6" />
        <motion.rect variants={variants.animations.bottom.rect2} x="429" y="161" height="32" rx="16" fill="#1F807B" />
      </motion.g>
    </svg>
  );
};

export default Extensive;