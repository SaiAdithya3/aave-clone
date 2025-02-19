import React from "react";

const AverageTwo = () => {
  return (
    <>
      <svg
        width="457"
        height="250"
        viewBox="0 0 457 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="457"
          height="250"
          fill="#48ABFF"
        //   style="fill:color(display-p3 0.2824 0.6706 1.0000)"

        ></rect>
        <g
        //   style="transform: rotate(-29.9579deg); // transformOrigin: 228.5px 0px;"
          style={{
            transform: "rotate(-29.9579deg)",
            transformOrigin: "228.5px 0px",
          }}
          // transformOrigin="228.5px 0px"
        >
          <g
            // style="transform: none; // transformOrigin: 228.5px 0px;"
            style={{
              transform: "none",
              transformOrigin: "228.5px 0px",
            }}
            // transformOrigin="228.5px 0px"
          >
            <circle
              mask="url(#borrow-circle-outer-mask-1)"
              cx="228.5"
              r="228.5"
              fill="#A9E7FF"
            //   style="fill:color(display-p3 0.6628 0.9060 1.0000)"
            ></circle>
            <mask id="borrow-circle-outer-mask-1">
              <rect
                x="228.5"
                y="-228.5"
                width="228.5"
                height="457"
                fill="white"
              ></rect>
            </mask>
            <circle
              mask="url(#borrow-circle-outer-mask-2)"
              cx="228.5"
              r="228.5"
              fill="#1A88F8"
            //   style="fill:color(display-p3 0.1020 0.5333 0.9725)"
            ></circle>
            <mask id="borrow-circle-outer-mask-2">
              <rect
                x="0"
                y="-228.5"
                width="228.5"
                height="457"
                fill="white"
              ></rect>
            </mask>
            <g
            //   style="transform: none; // transformOrigin: 228.5px 0px;"
              style={{
                transform: "none",
                transformOrigin: "228.5px 0px",
              }}
              // transformOrigin="228.5px 0px"
            >
              <circle
                mask="url(#borrow-circle-inner-mask-1)"
                cx="228.5"
                r="114"
                fill="#A9E7FF"
                // style="fill:color(display-p3 0.6628 0.9060 1.0000)"
              ></circle>
              <mask id="borrow-circle-inner-mask-1">
                <rect
                  x="114.5"
                  y="-114"
                  width="114"
                  height="228"
                  fill="white"
                ></rect>
              </mask>
              <circle
                mask="url(#borrow-circle-inner-mask-2)"
                cx="228.5"
                r="114"
                fill="#1A88F8"
                // style="fill:color(display-p3 0.1020 0.5333 0.9725)"
              ></circle>
              <mask id="borrow-circle-inner-mask-2">
                <rect
                  x="228.5"
                  y="-114"
                  width="114"
                  height="228"
                  fill="white"
                ></rect>
              </mask>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default AverageTwo;
