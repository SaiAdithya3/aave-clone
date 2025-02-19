import { motion } from "framer-motion";

const HeroRings = () => {
  const open = {
    hidden: { width: "0%", opacity: 0 },
    open: {
      width: "100%",
      opacity: [0, 100],
      transition: {
        duration: 0.75,
        ease: "easeInOut",
        once: true,
      },
    },
  };
  return (
    <div className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="985"
        height="438"
        fill="none"
        viewBox="0 0 985 438"
        style={{ width: "100%", pointerEvents: "auto" }}
      >
        <g clipPath="url(#hero-animation-mask)">
          <g transform="scale(1.08)">
            <g opacity="1">
              <g
                opacity="1"
                style={{
                  transform: "translateY(220px)",
                  transformOrigin: "75px 227.25px",
                }}
                // // transformOrigin="75px 227.25px"
              >
                <g transform="scale(1.5)">
                  <path
                    d="M50 50L50 303"
                    stroke="#D9F7FF"
                    style={{
                      stroke: "#D9F7FF",
                    }}
                    strokeWidth="100"
                    strokeLinecap="round"
                  ></path>
                  <mask
                    id="mask0_4272_2676"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                  </mask>
                  <g mask="url(#mask0_4272_2676)">
                    <g>
                      <g
                        style={{
                          transform: "rotate(-5deg)",
                          transformOrigin: "50px 50px",
                        }}
                        // // transformOrigin="50px 50px"
                      >
                        <rect
                          width="100"
                          height="100"
                          fill="#39D1F9"
                          // style="fill:color(display-p3 0.4196 0.8078 0.9608);fillOpacity:1"
                        ></rect>
                        <rect
                          width="50"
                          height="100"
                          fill="#A7E9FD"
                          // style="fill:color(display-p3 0.7098 0.9059 0.9804);fillOpacity:1"
                        ></rect>
                        <mask
                          id="mask1_4272_2676"
                          // style="mask-type:alpha"
                          maskUnits="userSpaceOnUse"
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="#D9D9D9"
                          ></circle>
                        </mask>
                        <g mask="url(#mask1_4272_2676)">
                          <rect
                            x="25"
                            y="25"
                            width="50"
                            height="50"
                            fill="#39D1F9"
                            // style="fill:color(display-p3 0.4196 0.8078 0.9608);fillOpacity:1"
                          ></rect>
                          <rect
                            x="50"
                            y="25"
                            width="25"
                            height="50"
                            fill="#A7E9FD"
                            // style="fill:color(display-p3 0.7098 0.9059 0.9804);fillOpacity:1"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                opacity="1"
                // style="transform: translateX(152px) translateY(210px); // transformOrigin: 75px 227.25px;"
                style={{
                  transform: "translateX(152px) translateY(210px)",
                  transformOrigin: "75px 227.25px",
                }}
                // // transformOrigin="75px 227.25px"
              >
                <g transform="scale(1.5)">
                  <path
                    d="M50 50L50 303"
                    stroke="#FFF7A5"
                    // style="stroke:color(display-p3 1 0.969 0.6842)"
                    strokeWidth="100"
                    strokeLinecap="round"
                  ></path>
                  <mask
                    id="mask0_4272_2676"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                  </mask>
                  <g mask="url(#mask0_4272_2676)">
                    <g>
                      <g
                        // style="transform: rotate(-14deg); // transformOrigin: 50px 50px;"
                        style={{
                          transform: "rotate(-14deg)",
                          transformOrigin: "50px 50px",
                        }}
                        // // transformOrigin="50px 50px"
                      >
                        <rect
                          width="100"
                          height="100"
                          fill="#FFB000"
                          // style="fill:color(display-p3 1 0.72 0);fillOpacity:1"
                        ></rect>
                        <rect
                          width="50"
                          height="100"
                          fill="#FFD400"
                          // style="fill:color(display-p3 1 0.8392 0.1922);fillOpacity:1"
                        ></rect>
                        <mask
                          id="mask1_4272_2676"
                          // style="mask-type:alpha"
                          maskUnits="userSpaceOnUse"
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="#D9D9D9"
                          ></circle>
                        </mask>
                        <g mask="url(#mask1_4272_2676)">
                          <rect
                            x="25"
                            y="25"
                            width="50"
                            height="50"
                            fill="#FFB000"
                            // style="fill:color(display-p3 1 0.72 0);fillOpacity:1"
                            // style={{ fill: "rgb(255, 176, 0)"}}
                          ></rect>
                          <rect
                            x="50"
                            y="25"
                            width="25"
                            height="50"
                            fill="#FFD400"
                            // style="fill:color(display-p3 1 0.8392 0.1922);fillOpacity:1"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                opacity="1"
                // style="transform: translateX(304px) translateY(190px); // transformOrigin: 75px 227.25px;"
                style={{
                  transform: "translateX(304px) translateY(190px)",
                  transformOrigin: "75px 227.25px",
                }}
                // // transformOrigin="75px 227.25px"
              >
                <g transform="scale(1.5)">
                  <path
                    d="M50 50L50 303"
                    stroke="#83EEE8"
                    // style="stroke:color(display-p3 0.6157 0.9216 0.9059)"
                    strokeWidth="100"
                    strokeLinecap="round"
                  ></path>
                  <mask
                    id="mask0_4272_2676"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                  </mask>
                  <g mask="url(#mask0_4272_2676)">
                    <g>
                      <g
                        // style="transform: rotate(-18deg); // transformOrigin: 50px 50px;"
                        style={{
                          transform: "rotate(-18deg)",
                          transformOrigin: "50px 50px",
                        }}
                        // // transformOrigin="50px 50px"
                      >
                        <rect
                          width="100"
                          height="100"
                          fill="#00827B"
                          // style="fill:color(display-p3 0.121 0.5025 0.4806);fillOpacity:1"
                        ></rect>
                        <rect
                          width="50"
                          height="100"
                          fill="#39BEB7"
                          // style="fill:color(display-p3 0.3882 0.7333 0.7137);fillOpacity:1"
                        ></rect>
                        <mask
                          id="mask1_4272_2676"
                          // style="mask-type:alpha"
                          maskUnits="userSpaceOnUse"
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="#D9D9D9"
                          ></circle>
                        </mask>
                        <g mask="url(#mask1_4272_2676)">
                          <rect
                            x="25"
                            y="25"
                            width="50"
                            height="50"
                            fill="#00827B"
                            // style="fill:color(display-p3 0.121 0.5025 0.4806);fillOpacity:1"
                          ></rect>
                          <rect
                            x="50"
                            y="25"
                            width="25"
                            height="50"
                            fill="#39BEB7"
                            // style="fill:color(display-p3 0.3882 0.7333 0.7137);fillOpacity:1"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                opacity="1"
                // style="transform: translateX(456px) translateY(170px); // transformOrigin: 75px 227.25px;"
                style={{
                  transform: "translateX(456px) translateY(170px)",
                  transformOrigin: "75px 227.25px",
                }}
                // transformOrigin="75px 227.25px"
              >
                <g transform="scale(1.5)">
                  <path
                    d="M50 50L50 303"
                    stroke="#96E9FF"
                    // style="stroke:color(display-p3 0.6628 0.906 1)"
                    strokeWidth="100"
                    strokeLinecap="round"
                  ></path>
                  <mask
                    id="mask0_4272_2676"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                  </mask>
                  <g mask="url(#mask0_4272_2676)">
                    <g>
                      <g
                        // style="transform: rotate(-11deg); // transformOrigin: 50px 50px;"
                        style={{
                          transform: "rotate(-11deg)",
                          transformOrigin: "50px 50px",
                        }}
                        // transformOrigin="50px 50px"
                      >
                        <rect
                          width="100"
                          height="100"
                          fill="#008AFF"
                          // style="fill:color(display-p3 0.102 0.5333 0.9725);fillOpacity:1"
                        ></rect>
                        <rect
                          width="50"
                          height="100"
                          fill="#00AEFF"
                          // style="fill:color(display-p3 0.2824 0.6706 1);fillOpacity:1"
                        ></rect>
                        <mask
                          id="mask1_4272_2676"
                          // style="mask-type:alpha"
                          maskUnits="userSpaceOnUse"
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="#D9D9D9"
                          ></circle>
                        </mask>
                        <g mask="url(#mask1_4272_2676)">
                          <rect
                            x="25"
                            y="25"
                            width="50"
                            height="50"
                            fill="#008AFF"
                            // style="fill:color(display-p3 0.102 0.5333 0.9725);fillOpacity:1"
                          ></rect>
                          <rect
                            x="50"
                            y="25"
                            width="25"
                            height="50"
                            fill="#00AEFF"
                            // style="fill:color(display-p3 0.2824 0.6706 1);fillOpacity:1"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                opacity="1"
                // style="transform: translateX(608px) translateY(120px); // transformOrigin: 75px 227.25px;"
                style={{
                  transform: "translateX(608px) translateY(120px)",
                  transformOrigin: "75px 227.25px",
                }}
                // // transformOrigin="75px 227.25px"
              >
                <g transform="scale(1.5)">
                  <path
                    d="M50 50L50 303"
                    stroke="#FFC693"
                    // style="stroke:color(display-p3 1.0000 0.7765 0.5765)"
                    strokeWidth="100"
                    strokeLinecap="round"
                  ></path>
                  <mask
                    id="mask0_4272_2676"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                  </mask>
                  <g mask="url(#mask0_4272_2676)">
                    <g>
                      <g
                        // style="transform: none; // transformOrigin: 50px 50px;"
                        style={{
                          transform: "none",
                          transformOrigin: "50px 50px",
                        }}
                        // // transformOrigin="50px 50px"
                      >
                        <rect
                          width="100"
                          height="100"
                          fill="#F24900"
                          // style="fill:color(display-p3 0.9490 0.2863 0.0000);fillOpacity:1"
                        ></rect>
                        <rect
                          width="50"
                          height="100"
                          fill="#FF8947"
                          // style="fill:color(display-p3 1.0000 0.5373 0.2784);fillOpacity:1"
                        ></rect>
                        <mask
                          id="mask1_4272_2676"
                          // style="mask-type:alpha"
                          maskUnits="userSpaceOnUse"
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="#D9D9D9"
                          ></circle>
                        </mask>
                        <g mask="url(#mask1_4272_2676)">
                          <rect
                            x="25"
                            y="25"
                            width="50"
                            height="50"
                            fill="#F24900"
                            // style="fill:color(display-p3 0.9490 0.2863 0.0000);fillOpacity:1"
                          ></rect>
                          <rect
                            x="50"
                            y="25"
                            width="25"
                            height="50"
                            fill="#FF8947"
                            // style="fill:color(display-p3 1.0000 0.5373 0.2784);fillOpacity:1"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g
                opacity="1"
                // style="transform: translateX(760px) translateY(60px); // transformOrigin: 75px 227.25px;"
                style={{
                  transform: "translateX(760px) translateY(60px)",
                  transformOrigin: "75px 227.25px",
                }}
                // // transformOrigin="75px 227.25px"
              >
                <g transform="scale(1.5)">
                  <path
                    d="M50 50L50 303"
                    stroke="#E2E0FF"
                    // style="stroke:color(display-p3 0.8863 0.8784 1)"
                    strokeWidth="100"
                    strokeLinecap="round"
                  ></path>
                  <mask
                    id="mask0_4272_2676"
                    // style="mask-type:alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <circle cx="50" cy="50" r="50" fill="#D9D9D9"></circle>
                  </mask>
                  <g mask="url(#mask0_4272_2676)">
                    <g>
                      <g
                        // style="transform: none; // transformOrigin: 50px 50px;"
                        style={{
                          transform: "none",
                          transformOrigin: "50px 50px",
                        }}
                        // // transformOrigin="50px 50px"
                      >
                        <rect
                          width="100"
                          height="100"
                          fill="#9896FF"
                          // style="fill:color(display-p3 0.5951 0.587 1);fillOpacity:1"
                        ></rect>
                        <rect
                          width="50"
                          height="100"
                          fill="#BDBBFF"
                          // style="fill:color(display-p3 0.7391 0.7337 1);fillOpacity:1"
                        ></rect>
                        <mask
                          id="mask1_4272_2676"
                          // style="mask-type:alpha"
                          maskUnits="userSpaceOnUse"
                          x="25"
                          y="25"
                          width="50"
                          height="50"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="25"
                            fill="#D9D9D9"
                          ></circle>
                        </mask>
                        <g mask="url(#mask1_4272_2676)">
                          <rect
                            x="25"
                            y="25"
                            width="50"
                            height="50"
                            fill="#9896FF"
                            // style="fill:color(display-p3 0.5951 0.587 1);fillOpacity:1"
                          ></rect>
                          <rect
                            x="50"
                            y="25"
                            width="25"
                            height="50"
                            fill="#BDBBFF"
                            // style="fill:color(display-p3 0.7391 0.7337 1);fillOpacity:1"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <clipPath id="hero-animation-mask">
          <rect
            width="1185"
            height="1438"
            x="-100"
            y="-1000"
            fill="#fff"
          ></rect>
        </clipPath>
      </svg>
      <div className="w-full h-1 flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="open"
          variants={open}
          className="bg-hero-rings-line w-full max-w-[1082px] h-1 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default HeroRings;
