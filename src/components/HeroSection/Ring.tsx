import { motion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface RingProps {
  colors: {
    stroke: string;
    primary: string;
    secondary: string;
  };
  animation: {
    hidden: any;
    visible: any;
  };
  rotation: number;
}

const Ring = ({ colors, animation, rotation }: RingProps) => {
  const rotateSpring = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const containerRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = Math.abs(e.clientX - centerX);
      const distanceY = Math.abs(e.clientY - centerY);
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      if (distance < 150) {
        const speedX = e.clientX - lastMouseX.current;
        const speedY = e.clientY - lastMouseY.current;
        const speed = Math.sqrt(speedX ** 2 + speedY ** 2);
        
        const maxSpeed = 50;
        const normalizedSpeed = Math.min(speed, maxSpeed) / maxSpeed;
        const rotationAmount = normalizedSpeed * 45;
        const direction = speedX > 0 ? 1 : -1;
        
        rotateSpring.set(rotateSpring.get() + (rotationAmount * direction));
      }

      lastMouseX.current = e.clientX;
      lastMouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.g
      ref={containerRef}
      variants={animation}
      initial="hidden"
      animate="visible"
    >
      <g transform={`scale(1.5)`}>
        <path
          d="M50 50L50 303"
          stroke={colors.stroke}
          strokeWidth="100"
          strokeLinecap="round"
        />
        <mask
          id={`mask-${animation.hidden.x}-${animation.hidden.y}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100"
          height="100"
        >
          <circle cx="50" cy="50" r="50" fill="#D9D9D9" />
        </mask>
        <motion.g mask={`url(#mask-${animation.hidden.x}-${animation.hidden.y})`}
          style={{ rotate: rotateSpring }}
        >
          <g>
            <g
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "50px 50px",
              }}
            >
              <rect width="100" height="100" fill={colors.primary} />
              <rect width="50" height="100" fill={colors.secondary} />
              <mask
                id={`mask-inner-${animation.hidden.x}-${animation.hidden.y}`}
                maskUnits="userSpaceOnUse"
                x="25"
                y="25"
                width="50"
                height="50"
              >
                <circle cx="50" cy="50" r="25" fill="#D9D9D9" />
              </mask>
              <motion.g 
                mask={`url(#mask-inner-${animation.hidden.x}-${animation.hidden.y})`}
              >
                <rect x="25" y="25" width="50" height="50" fill={colors.primary} />
                <rect x="50" y="25" width="25" height="50" fill={colors.secondary} />
              </motion.g>
            </g>
          </g>
        </motion.g>
      </g>
    </motion.g>
  );
};

export default Ring;