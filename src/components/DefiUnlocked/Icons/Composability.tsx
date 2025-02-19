import React from "react";

const Composability = () => {
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
      <rect
        className="square-1"
        x="3"
        y="7"
        width="18px"
        height="18px"
        rx="4"
        fill="#1F807B"
        fillOpacity="0.4"
        // style="fill: color(display-p3 0.121 0.5025 0.4806); transform: rotate(45deg); transform-origin: 12px 16px;"
        style={{
            transform: "rotate(45deg)",
            transformOrigin: "12px 16px",
        }}
        // transform-origin="11.999999761581421px 16px"
        opacity="1"
      ></rect>
      <rect
        className="square-2-outline"
        x="13"
        y="6"
        width="20px"
        height="20px"
        rx="5"
        fill="#F7F6F6"
        // style="fill: color(display-p3 0.99 0.99 0.99); transform: rotate(45deg); transform-origin: 23px 16px;"
        style={{
            transform: "rotate(45deg)",
            transformOrigin: "23px 16px",
        }}
        // transform-origin="23px 15.999999523162842px"
        fillOpacity="1"
      ></rect>
      <rect
        className="square-2"
        x="16"
        y="9"
        width="14px"
        height="14px"
        rx="3"
        fill="#1F807B"
        // style="fill: color(display-p3 0.121 0.5025 0.4806); transform: rotate(45deg); transform-origin: 23px 16px;"
        style={{
            transform: "rotate(45deg)",
            transformOrigin: "23px 16px",
        }}
        // transform-origin="23px 16px"
        fillOpacity="1"
      ></rect>
      <rect
        className="square-3-outline"
        x="13"
        y="6"
        width="20"
        height="20"
        rx="5"
        fill="#F7F6F6"
        opacity="0"
        // style="fill: color(display-p3 0.99 0.99 0.99); transform: translateX(14px) scale(0) rotate(45deg); transform-origin: 23px 16px;"
        style={{
            transform: "translateX(14px) scale(0) rotate(45deg)",
            transformOrigin: "23px 16px",
        }}
        // transform-origin="23px 15.999999523162842px"
      ></rect>
      <rect
        className="square-3"
        x="16"
        y="9"
        width="14"
        height="14"
        rx="3"
        fill="#1F807B"
        opacity="0"
        // style="fill: color(display-p3 0.121 0.5025 0.4806); transform: translateX(14px) scale(0) rotate(45deg); transform-origin: 23px 16px;"
        style={{
            transform: "translateX(14px) scale(0) rotate(45deg)",
            transformOrigin: "23px 16px",
        }}
        // transform-origin="23px 16px"
      ></rect>
    </svg>
  );
};

export default Composability;
