import React from "react";

const HealthFactorCard = () => {
  return (
    <svg
      width="402"
      height="201"
      viewBox="0 0 402 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    //   style="transform:translate(120px, -48px)"
    style={{
      transform: "translate(120px, -48px)",
    }}
      className="styles_cardIllustration__rMiSaa absolute top-0 right-0 z-[-1]"
    >
      <g clipPath="url(#clip0_2961_6831)">
        <g opacity="1">
          <circle
            cx="201"
            cy="201"
            r="201"
            fill="rgba(255, 232, 192, 1)"
          ></circle>
        </g>
        <g
        //   style="transform: none; transform-origin: 198.25px 201px;"
          style={{
            transform: "none",
            transformOrigin: "198.25px 201px",
          }}
        //   transform-origin="198.25px 201px"
        >
          <g
            // style="transform: rotate(7.37157deg); transform-origin: 198.25px 201px;"
            style={{
              transform: "rotate(7.37157deg)",
              transformOrigin: "198.25px 201px",
            }}
            // transform-origin="198.25px 201px"
          >
            <circle
              cx="201"
              cy="201"
              r="109.5"
              stroke="rgba(255, 179, 67, 1)"
              strokeWidth="55"
              fill="rgba(255, 232, 192, 1)"
            ></circle>
            <circle
              cx="117"
              cy="130"
              r="31"
              fill="rgba(255, 140, 0, 1)"
              stroke="#FCFCFB"
              strokeWidth="12"
            ></circle>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2961_6831">
          <rect
            width="402"
            height="201"
            fill="white"
            // style="fill:white;fillOpacity:1"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default HealthFactorCard;
