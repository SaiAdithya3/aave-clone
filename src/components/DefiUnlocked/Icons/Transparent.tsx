import React from "react";

const Transparent = ({ isInView }: { isInView: boolean }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    //   style="overflow:visible"
    style={{
        overflow: "visible",
    }}
    >
      <mask id="transparent-mask-left" width="32" height="32">
        <rect x="-16" y="0" width="64" height="32" fill="white"></rect>
        <ellipse
          className="ellipse-left-outline"
          cx="9"
          cy="16"
          rx="0"
          ry="0"
          fill="black"
        ></ellipse>
      </mask>
      <ellipse
        mask="url(#transparent-mask-right)"
        className="ellipse-left"
        cx="9"
        cy="16"
        rx="6"
        ry="10"
        fill="color(display-p3 0.8314 0.8275 0.9922)"
      ></ellipse>
      <mask id="transparent-mask-right" width="32" height="32">
        <rect x="-16" y="0" width="64" height="32" fill="white"></rect>
        <ellipse
          className="ellipse-right-outline"
          cx="21"
          cy="16"
          rx="11"
          ry="16"
          fill="black"
        ></ellipse>
      </mask>
      <ellipse
        mask="url(#transparent-mask-left)"
        className="ellipse-right"
        cx="21"
        cy="16"
        rx="8"
        ry="13"
        fill="color(display-p3 0.5951 0.587 1)"
      ></ellipse>
    </svg>
  );
};

export default Transparent;
