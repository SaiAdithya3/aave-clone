import React from "react";

const StakeCard = () => {
  return (
    <svg
      className="absolute top-0 right-0 z-[-1]"
      width="268"
      height="150"
      viewBox="0 0 268 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        // style="transform: none; transform-origin: 147px 0px;"
        style={{
            transform: "none",
            transformOrigin: "147px 0px",
        }}
        // transform-origin="147px 0px"
      >
        <g
        //   style="transform: none; transform-origin: 147px 0px;"
          style={{
              transform: "none",
              transformOrigin: "147px 0px",
          }}
        //   transform-origin="147px 0px"
        >
          <g
            // style="transform: scale(0.900033); transform-origin: 147px 0px;"
            style={{
                transform: "scale(0.900033)",
                transformOrigin: "147px 0px",
            }}
            // transform-origin="147px 0px"
          >
            <circle
              mask="url(#defi-stake-circle-mask-1)"
              cx="147"
              r="147"
              fill="#DFF6FF"
            //   style="fill:color(display-p3 0.8739 0.9653 1.0000)"
            ></circle>
            <circle
              mask="url(#defi-stake-circle-mask-2)"
              cx="147"
              r="147"
              fill="#6BCEF5"
            //   style="fill:color(display-p3 0.4196 0.8078 0.9608)"
            ></circle>
          </g>
        </g>
        <g
        //   style="transform: none; transform-origin: 147px 0px;"
          style={{
              transform: "none",
              transformOrigin: "147px 0px",
          }}
        //   transform-origin="147px 0px"
        >
          <g
            // style="transform: scale(0.905359); transform-origin: 147px 0px;"
            style={{
                transform: "scale(0.905359)",
                transformOrigin: "147px 0px",
            }}
            // transform-origin="147px 0px"
          >
            <circle
              mask="url(#defi-stake-circle-mask-1)"
              cx="147"
              r="121"
              fill="#6BCEF5"
            //   style="fill:color(display-p3 0.4196 0.8078 0.9608)"
            ></circle>
            <circle
              mask="url(#defi-stake-circle-mask-2)"
              cx="147"
              r="121"
              fill="#B5E7FA"
            //   style="fill:color(display-p3 0.7098 0.9059 0.9804)"
            ></circle>
          </g>
        </g>
        <g
        //   style="transform: none; transform-origin: 147px 0px;"
          style={{
              transform: "none",
              transformOrigin: "147px 0px",
          }}
        //   transform-origin="147px 0px"
        >
          <g
            // style="transform: scale(0.927491); transform-origin: 147px 0px;"
            style={{
                transform: "scale(0.927491)",
                transformOrigin: "147px 0px",
            }}
            // transform-origin="147px 0px"
          >
            <circle
              mask="url(#defi-stake-circle-mask-1)"
              cx="147"
              r="71"
              fill="#DFF6FF"
            //   style="fill:color(display-p3 0.8739 0.9653 1.0000)"
            ></circle>
            <circle
              mask="url(#defi-stake-circle-mask-2)"
              cx="147"
              r="71"
              fill="#6BCEF5"
            //   style="fill:color(display-p3 0.4196 0.8078 0.9608)"
            ></circle>
          </g>
        </g>
      </g>
      <defs>
        <mask id="defi-stake-circle-mask-1">
          <rect y="-147" width="147" height="294" fill="white"></rect>
        </mask>
        <mask id="defi-stake-circle-mask-2">
          <rect x="147" y="-147" width="147" height="294" fill="white"></rect>
        </mask>
      </defs>
    </svg>
  );
};

export default StakeCard;
