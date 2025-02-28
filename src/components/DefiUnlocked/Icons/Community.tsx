import React from "react";

const Community = () => {
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
      <path
        className="roof"
        d="M13.551 4.24983C14.823 3.4813 16.4161 3.4813 17.6881 4.24983L26.56 9.61025C28.7267 10.9194 27.7986 14.25 25.2671 14.25H5.97197C3.44046 14.25 2.51241 10.9194 4.67912 9.61025L13.551 4.24983Z"
        fill="color(display-p3 0.1098 0.2824 0.5255)"
        // style="transform: none; transformOrigin: 15.6195px 8.96172px;"
        style={{
          transform: "none",
          transformOrigin: "15.6195px 8.96172px",
        }}
        // transformOrigin="15.619547128677368px 8.961716175079346px"
      ></path>
      <rect
        className="pillar"
        x="5"
        y="17"
        width="5"
        height="11px"
        rx="2"
        fill="color(display-p3 0.3804 0.5333 0.7529)"
        // style="transform: none; transformOrigin: 7.5px 22.5px;"
        style={{
          transform: "none",
          transformOrigin: "7.5px 22.5px",
        }}
        // transformOrigin="7.5px 22.5px"
      ></rect>
      <rect
        className="pillar"
        x="13"
        y="17"
        width="5"
        height="11px"
        rx="2"
        fill="color(display-p3 0.3804 0.5333 0.7529)"
        // style="transform: none; transformOrigin: 15.5px 22.5px;"
        style={{
          transform: "none",
          transformOrigin: "15.5px 22.5px",
        }}
        // transformOrigin="15.5px 22.5px"
      ></rect>
      <rect
        className="pillar"
        x="21"
        y="17"
        width="5"
        height="11px"
        rx="2"
        fill="color(display-p3 0.3804 0.5333 0.7529)"
        // style="transform: none; transformOrigin: 23.5px 22.5px;"
        style={{
          transform: "none",
          transformOrigin: "23.5px 22.5px",
        }}
        // transformOrigin="23.5px 22.5px"
      ></rect>
    </svg>
  );
};

export default Community;
