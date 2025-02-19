import { motion } from "framer-motion";

const GHObubbles = () => {
  return (
    <svg
      className="styles_gridIllustration__kM_06"
      viewBox="0 0 650 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        initial={{ transform: "none" }}
        style={{ transformOrigin: "324.413px 249px" }}
      >
        <motion.g style={{ transformOrigin: "325px 250px" }}>
          {/* Main GHO circle and logo */}
          <circle cx="325" cy="250" r="73" fill="#28D358" />
          <clipPath id="clip0_3123_123010">
            <circle cx="325" cy="250" r="73" fill="white" />
            <circle cx="40" cy="35" r="35" />
          </clipPath>
          <path
            d="M368.738 285.357L368.52 285.295L368.406 285.49C359.557 300.581 345.135 310.162 324.432 310.162C291.524 310.162 264.841 282.969 264.841 249.43C264.841 215.891 291.524 188.699 324.432 188.699C354.101 188.699 379.406 210.803 383.973 239.728H368.305C363.967 219.153 346.093 204.211 324.432 204.211C299.483 204.211 279.552 224.013 279.552 249.43C279.552 274.85 299.476 294.289 324.422 294.289C346.916 294.289 364.905 278.486 368.308 256.75H384.012V306.638L369.581 315.629V285.808V285.591L369.373 285.528C369.267 285.496 369.157 285.468 369.05 285.44L369.021 285.433C368.924 285.407 368.83 285.383 368.738 285.357Z"
            fill="white"
            stroke="#3BE069"
            strokeWidth="0.584946"
            clipPath="url(#clip0_3123_123010)"
          />
          <circle
            cx="340.365"
            cy="240.006"
            r="12.3425"
            fill="white"
            stroke="#3BE069"
            strokeWidth="0.584946"
          />
          <circle
            cx="308.516"
            cy="240.006"
            r="12.3425"
            fill="white"
            stroke="#3BE069"
            strokeWidth="0.584946"
          />
        </motion.g>

        {/* Floating bubbles */}
        {[
          { cx: -53, cy: 454, r: 74, fill: "#28D358", opacity: 0.25, y: 8.4867 },
          { cx: 56, cy: 262, r: 35, fill: "#28D358", opacity: 0.7, y: -2.10322 },
          { cx: 556, cy: 101, r: 31, fill: "#92E7AA", opacity: 1, y: 2.99081 },
          { cx: 575, cy: 454, r: 35, fill: "#28D358", opacity: 0.5, y: 3.72939 },
          { cx: 182, cy: -30, r: 52, fill: "#28D358", opacity: 0.5, y: -7.78967 },
          { cx: 301, cy: 528, r: 52, fill: "#28D358", opacity: 0.5, y: -0.478339 },
          { cx: 190, cy: 151, r: 13, fill: "#28D358", opacity: 1, y: 2.86862 },
          { cx: 69, cy: 83, r: 18, fill: "#92E7AA", opacity: 1, y: -1.28258 },
          { cx: 489, cy: 204, r: 13, fill: "#28D358", opacity: 1, y: 2.32054 },
          { cx: 369, cy: 164, r: 6, fill: "#28D358", opacity: 1, y: 1.24726 },
          { cx: 401, cy: 329, r: 6, fill: "#28D358", opacity: 1, y: -3.6228 },
          { cx: 223, cy: 283, r: 6, fill: "#28D358", opacity: 1, y: 3.35573 },
          { cx: 216, cy: 380, r: 13, fill: "#92E7AA", opacity: 1, y: -0.695163 },
        ].map((bubble, index) => (
          <motion.g
            key={index}
            style={{ transformOrigin: `${bubble.cx}px ${bubble.cy}px` }}
            animate={{
              y: [bubble.y, -bubble.y],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <circle
              cx={bubble.cx}
              cy={bubble.cy}
              r={bubble.r}
              fill={bubble.fill}
              fillOpacity={bubble.opacity}
            />
          </motion.g>
        ))}
      </motion.g>
    </svg>
  );
};

export default GHObubbles;