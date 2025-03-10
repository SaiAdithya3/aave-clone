import React from "react";
import { motion } from "framer-motion";

const RotatingBalls = ({ isInView }: { isInView: boolean }) => {
  // const isInView = true;
  const reveal = {
    hidden: { scale: 0.9, opacity: 0 },
    animate: {
      scale: isInView ? 1 : 1.25,
      opacity: isInView ? 1 : 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        once: true,
        delay: 0,
      },
    },
  };
  const rotateInner = {
    hidden: { rotate: 0 },
    animate: {
      rotate: isInView ? [0, 360] : 0,
      transition: {
        duration: 200,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  const rotateOuter = {
    hidden: { rotate: 0 },
    animate: {
      rotate: isInView ? [0, -360] : 0,
      transition: {
        duration: 200,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  return (
    <svg
      width="986"
      height="914"
      viewBox="0 0 986 914"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:flex absolute z-[-1] h-full"
    >
      <motion.g
        opacity="1"
        // // style="transform: none; transformOrigin: 492.822px 457.155px;"
        style={{ transformOrigin: "492.9109191894531px 457.07728922367096px" }}
        // transformOrigin="492.82183837890625px 457.1546936035156px"
        initial="hidden"
        animate={{
          ...reveal.animate,
          transition: {
            ...reveal.animate.transition,
            delay: 0,
          },
        }}
        variants={reveal}
      >
        <g transform="translate(-493, -457) scale(2)">
          <motion.g
            // // style="transform: rotate(174.589deg); transformOrigin: 492.911px 457.077px;"
            // transformOrigin="492.9109191894531px 457.07735127210617px"
            initial="hidden"
            animate="animate"
            variants={rotateInner}
          >
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-1.70552e-07 1 1 1.66646e-07 901.383 432.693)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M950 457.002C950 470.427 939.117 481.31 925.691 481.31C912.266 481.31 901.383 470.427 901.383 457.002L950 457.002Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.123004 0.992406 0.992406 0.123004 901.242 483.714)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M946.5 513.818C944.849 527.141 932.709 536.603 919.386 534.952C906.063 533.301 896.601 521.161 898.252 507.838L946.5 513.818Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.246873 0.969048 0.969048 0.246873 894.736 534.714)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M935.847 570.272C932.533 583.282 919.3 591.141 906.29 587.827C893.28 584.513 885.421 571.279 888.735 558.27L935.847 570.272Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.365308 0.930887 0.930887 0.365308 881.997 583.979)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M918.374 624.367C913.47 636.865 899.363 643.02 886.865 638.116C874.368 633.211 868.213 619.104 873.117 606.607L918.374 624.367Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.479779 0.877389 0.877389 0.479779 862.918 631.877)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M893.911 676.531C887.47 688.31 872.699 692.637 860.92 686.196C849.141 679.755 844.813 664.985 851.255 653.205L893.911 676.531Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.58825 0.808679 0.808679 0.58825 837.749 677.355)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M862.765 725.612C854.868 736.468 839.664 738.867 828.808 730.97C817.951 723.072 815.552 707.869 823.449 697.012L862.765 725.612Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.68361 0.729848 0.729848 0.68361 807.435 718.693)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M826.3 769.67C817.123 779.468 801.74 779.971 791.941 770.794C782.143 761.616 781.639 746.233 790.817 736.435L826.3 769.67Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.768366 0.640011 0.640011 0.768366 772.149 755.993)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M784.586 808.907C774.271 817.499 758.943 816.102 750.35 805.787C741.758 795.471 743.155 780.143 753.47 771.551L784.586 808.907Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.843698 0.536818 0.536818 0.843698 732.342 788.821)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M737.931 842.889C726.604 850.096 711.58 846.756 704.373 835.429C697.166 824.102 700.506 809.077 711.833 801.87L737.931 842.889Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.904271 0.426959 0.426959 0.904271 688.893 816.238)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M687.669 870.58C675.529 876.312 661.041 871.118 655.309 858.978C649.577 846.837 654.772 832.349 666.912 826.617L687.669 870.58Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.949992 0.312276 0.312276 0.949992 642.319 837.921)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M634.408 891.698C621.654 895.89 607.916 888.95 603.724 876.196C599.532 863.442 606.472 849.704 619.226 845.512L634.408 891.698Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.982292 0.187359 0.187359 0.982292 593.427 853.673)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M578.658 905.984C565.47 908.499 552.741 899.848 550.225 886.66C547.71 873.473 556.362 860.743 569.549 858.228L578.658 905.984Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.99785 0.0655391 0.0655392 0.99785 542.837 863.006)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M521.767 913.112C508.371 913.992 496.797 903.845 495.918 890.449C495.038 877.052 505.184 865.479 518.581 864.599L521.767 913.112Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.99785 -0.0655395 -0.0655395 0.99785 489.97 866.084)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M462.528 913.003C449.131 912.124 438.985 900.55 439.865 887.154C440.744 873.757 452.318 863.611 465.714 864.491L462.528 913.003Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.982291 -0.187359 -0.187359 0.982291 438.677 862.467)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M405.69 905.668C392.502 903.153 383.851 890.423 386.366 877.236C388.881 864.048 401.611 855.397 414.799 857.912L405.69 905.668Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.949991 -0.312276 -0.312276 0.949991 388.32 852.599)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M350.045 891.194C337.291 887.001 330.351 873.264 334.543 860.51C338.735 847.756 352.473 840.815 365.227 845.008L350.045 891.194Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.904271 -0.426959 -0.426959 0.904271 339.669 836.334)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M296.93 869.919C284.79 864.187 279.595 849.699 285.327 837.559C291.059 825.419 305.548 820.224 317.688 825.956L296.93 869.919Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.841723 -0.53991 -0.53991 0.841723 293.275 814.134)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M246.565 841.931C235.264 834.683 231.98 819.646 239.228 808.346C246.477 797.045 261.513 793.761 272.814 801.009L246.565 841.931Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.768366 -0.640011 -0.640011 0.768366 250.193 786.27)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M200.4 808.068C190.085 799.475 188.688 784.148 197.28 773.832C205.872 763.517 221.2 762.12 231.516 770.712L200.4 808.068Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.683609 -0.729848 -0.729848 0.683609 210.998 753.324)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M158.897 768.817C149.72 759.019 150.223 743.636 160.021 734.458C169.82 725.28 185.203 725.784 194.38 735.582L158.897 768.817Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.585291 -0.810823 -0.810823 0.585291 175.853 715.452)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M122.205 724.197C114.348 713.312 116.802 698.117 127.688 690.26C138.573 682.402 153.768 684.856 161.625 695.742L122.205 724.197Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.479779 -0.877389 -0.877389 0.479779 146.009 673.815)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M91.6902 675.813C85.249 664.033 89.5763 649.263 101.356 642.822C113.135 636.381 127.905 640.708 134.346 652.487L91.6902 675.813Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.365308 -0.930887 -0.930887 0.365308 121.53 628.655)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M67.3923 623.787C62.4879 611.29 68.6433 597.183 81.1407 592.278C93.6381 587.374 107.745 593.529 112.649 606.027L67.3923 623.787Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.246873 -0.969048 -0.969048 0.246873 103.158 581.417)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M50.044 569.863C46.7297 556.854 54.5894 543.62 67.5991 540.306C80.6089 536.992 93.8422 544.851 97.1565 557.861L50.044 569.863Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.123004 -0.992406 -0.992406 0.123004 90.7075 531.753)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M39.4692 513.61C37.8179 500.286 47.2799 488.147 60.6032 486.496C73.9265 484.844 86.0659 494.306 87.7173 507.63L39.4692 513.61Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.00772046 -0.99997 -0.99997 -0.00772045 84.4373 478.087)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M36.0089 453.403C36.1126 439.979 47.0796 429.18 60.5045 429.283C73.9294 429.387 84.7284 440.354 84.6248 453.779L36.0089 453.403Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.130625 -0.991432 -0.991432 -0.130625 84.9487 427.283)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M39.9233 396.832C41.677 383.522 53.8887 374.154 67.199 375.907C80.5092 377.661 89.8777 389.873 88.124 403.183L39.9233 396.832Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.254227 -0.967145 -0.967145 -0.254227 91.7778 376.545)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M50.9379 340.675C54.3509 327.691 67.6435 319.932 80.6277 323.345C93.6119 326.758 101.371 340.051 97.9578 353.035L50.9379 340.675Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.375739 -0.926725 -0.926725 -0.375739 105.24 326.18)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M69.3187 285.385C74.3631 272.944 88.5383 266.947 100.98 271.992C113.421 277.036 119.418 291.211 114.374 303.653L69.3187 285.385Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.486244 -0.873823 -0.873823 -0.486244 123.687 280.643)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M93.024 235.762C99.5519 224.031 114.354 219.813 126.085 226.34C137.817 232.868 142.035 247.671 135.507 259.402L93.024 235.762Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.59414 -0.804362 -0.804362 -0.59414 149.717 234.34)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M125.054 185.902C133.031 175.103 148.251 172.815 159.05 180.792C169.848 188.768 172.136 203.988 164.16 214.787L125.054 185.902Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.688896 -0.72486 -0.72486 -0.688896 179.756 193.782)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M161.262 142.669C170.511 132.937 185.897 132.546 195.628 141.795C205.36 151.043 205.751 166.43 196.503 176.161L161.262 142.669Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.773005 -0.6344 -0.6344 -0.773005 214.429 157.293)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M202.377 104.291C212.755 95.7736 228.072 97.2821 236.589 107.66C245.106 118.038 243.597 133.355 233.219 141.872L202.377 104.291Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <ellipse
              cx="24.3086"
              cy="24.3086"
              rx="24.3086"
              ry="24.3086"
              transform="matrix(0.847617 -0.530609 -0.530609 -0.847617 255.771 123.633)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></ellipse>
            <path
              d="M250.578 69.5262C261.958 62.4026 276.957 65.8527 284.081 77.2322C291.205 88.6117 287.754 103.611 276.375 110.735L250.578 69.5262Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.907421 -0.420222 -0.420222 -0.907421 299.13 96.6151)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M300.758 42.2837C312.94 36.6421 327.39 41.9445 333.031 54.1268C338.673 66.3092 333.37 80.7584 321.188 86.4L300.758 42.2837Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.953465 -0.301502 -0.301502 -0.953465 346.442 74.9066)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M354.961 21.2228C367.761 17.175 381.42 24.2705 385.467 37.0711C389.515 49.8716 382.42 63.5299 369.619 67.5776L354.961 21.2228Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.983696 -0.179842 -0.179842 -0.983696 394.572 59.7644)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M409.741 7.568C422.947 5.15357 435.611 13.9022 438.025 27.1086C440.439 40.315 431.691 52.9782 418.484 55.3926L409.741 7.568Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.998326 -0.0578442 -0.0578442 -0.998326 443.056 50.8091)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M464.511 0.867226C477.914 0.0906521 489.409 10.3262 490.185 23.729C490.962 37.1318 480.726 48.6265 467.323 49.4031L464.511 0.867226Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.997315 0.0732282 0.0732282 -0.997315 498.972 47.9363)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M526.776 1.22958C540.165 2.21269 550.222 13.8638 549.239 27.253C548.256 40.6423 536.605 50.6994 523.216 49.7163L526.776 1.22958Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.980831 0.194861 0.194861 -0.980831 547.892 51.4539)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M581.208 8.50537C594.376 11.1214 602.93 23.9169 600.314 37.0848C597.698 50.2527 584.903 58.8067 571.735 56.1907L581.208 8.50537Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.94761 0.319428 0.319428 -0.94761 600.204 62.0519)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M638.769 23.7466C651.491 28.035 658.328 41.8246 654.039 54.5465C649.751 67.2685 635.961 74.1052 623.24 69.8168L638.769 23.7466Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.899457 0.437009 0.437009 -0.899457 649.327 78.8107)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M692.437 45.7046C704.513 51.5716 709.546 66.1168 703.679 78.1922C697.812 90.2677 683.267 95.3007 671.191 89.4337L692.437 45.7046Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.83774 0.54607 0.54607 -0.83774 695.156 101.231)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M742.068 73.7765C753.315 81.1077 756.49 96.1681 749.159 107.415C741.827 118.662 726.767 121.836 715.52 114.505L742.068 73.7765Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.763687 0.645587 0.645587 -0.763687 737.499 128.924)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M787.449 107.489C797.702 116.156 798.987 131.494 790.32 141.746C781.653 151.999 766.315 153.284 756.063 144.617L787.449 107.489Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.678286 0.734798 0.734798 -0.678286 776.061 161.559)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M828.273 146.444C837.379 156.309 836.764 171.688 826.899 180.795C817.034 189.901 801.655 189.286 792.549 179.421L828.273 146.444Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.57935 0.815079 0.815079 -0.57935 811.934 200.746)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M865.644 192.393C873.422 203.336 870.856 218.512 859.914 226.29C848.971 234.068 833.795 231.502 826.017 220.559L865.644 192.393Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.473283 0.88091 0.88091 -0.473283 841.367 242.358)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M895.7 240.762C902.054 252.588 897.617 267.326 885.791 273.68C873.964 280.034 859.226 275.598 852.872 263.771L895.7 240.762Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.35832 0.933599 0.933599 -0.35832 865.635 287.856)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M919.734 293.13C924.545 305.664 918.284 319.725 905.75 324.535C893.216 329.346 879.156 323.085 874.345 310.551L919.734 293.13Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.239499 0.970897 0.970897 -0.239499 883.616 334.926)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M936.64 346.884C939.855 359.918 931.895 373.091 918.861 376.307C905.826 379.522 892.653 371.562 889.438 358.527L936.64 346.884Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.115373 0.993322 0.993322 -0.115373 895.812 385.048)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M946.91 403.585C948.458 416.921 938.903 428.987 925.568 430.536C912.232 432.085 900.166 422.53 898.617 409.194L946.91 403.585Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
          </motion.g>
        </g>
      </motion.g>
      <motion.g
        opacity="1"
        // style="transform: none; transformOrigin: 492.798px 457.176px;"
        style={{
          transform: "none",
          transformOrigin: "492.798px 457.176px",
        }}
        initial="hidden"
        animate={{
          ...reveal.animate,
          transition: {
            ...reveal.animate.transition,
            delay: 0.2,
          },
        }}
        variants={reveal}
        // transformOrigin="492.7977294921875px 457.17559814453125px"
      >
        <g transform="translate(-626.11, -580.39) scale(2.27)">
          <motion.g
            // style="transform: rotate(-67.6714deg); transformOrigin: 492.911px 457.077px;"
            initial="initial"
            animate="animate"
            variants={rotateOuter}
            style={{
              transform: "rotate(-67.6714deg)",
              transformOrigin: "492.911px 457.077px",
            }}
            // transformOrigin="492.9109191894531px 457.07735127210617px"
          >
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-1.70552e-07 1 1 1.66646e-07 901.383 432.693)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M950 457.002C950 470.427 939.117 481.31 925.691 481.31C912.266 481.31 901.383 470.427 901.383 457.002L950 457.002Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.123004 0.992406 0.992406 0.123004 901.242 483.714)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M946.5 513.818C944.849 527.141 932.709 536.603 919.386 534.952C906.063 533.301 896.601 521.161 898.252 507.838L946.5 513.818Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.246873 0.969048 0.969048 0.246873 894.736 534.714)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M935.847 570.272C932.533 583.282 919.3 591.141 906.29 587.827C893.28 584.513 885.421 571.279 888.735 558.27L935.847 570.272Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.365308 0.930887 0.930887 0.365308 881.997 583.979)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M918.374 624.367C913.47 636.865 899.363 643.02 886.865 638.116C874.368 633.211 868.213 619.104 873.117 606.607L918.374 624.367Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.479779 0.877389 0.877389 0.479779 862.918 631.877)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M893.911 676.531C887.47 688.31 872.699 692.637 860.92 686.196C849.141 679.755 844.813 664.985 851.255 653.205L893.911 676.531Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.58825 0.808679 0.808679 0.58825 837.749 677.355)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M862.765 725.612C854.868 736.468 839.664 738.867 828.808 730.97C817.951 723.072 815.552 707.869 823.449 697.012L862.765 725.612Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.68361 0.729848 0.729848 0.68361 807.435 718.693)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M826.3 769.67C817.123 779.468 801.74 779.971 791.941 770.794C782.143 761.616 781.639 746.233 790.817 736.435L826.3 769.67Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.768366 0.640011 0.640011 0.768366 772.149 755.993)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M784.586 808.907C774.271 817.499 758.943 816.102 750.35 805.787C741.758 795.471 743.155 780.143 753.47 771.551L784.586 808.907Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.843698 0.536818 0.536818 0.843698 732.342 788.821)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M737.931 842.889C726.604 850.096 711.58 846.756 704.373 835.429C697.166 824.102 700.506 809.077 711.833 801.87L737.931 842.889Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.904271 0.426959 0.426959 0.904271 688.893 816.238)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M687.669 870.58C675.529 876.312 661.041 871.118 655.309 858.978C649.577 846.837 654.772 832.349 666.912 826.617L687.669 870.58Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.949992 0.312276 0.312276 0.949992 642.319 837.921)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M634.408 891.698C621.654 895.89 607.916 888.95 603.724 876.196C599.532 863.442 606.472 849.704 619.226 845.512L634.408 891.698Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.982292 0.187359 0.187359 0.982292 593.427 853.673)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M578.658 905.984C565.47 908.499 552.741 899.848 550.225 886.66C547.71 873.473 556.362 860.743 569.549 858.228L578.658 905.984Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.99785 0.0655391 0.0655392 0.99785 542.837 863.006)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M521.767 913.112C508.371 913.992 496.797 903.845 495.918 890.449C495.038 877.052 505.184 865.479 518.581 864.599L521.767 913.112Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.99785 -0.0655395 -0.0655395 0.99785 489.97 866.084)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M462.528 913.003C449.131 912.124 438.985 900.55 439.865 887.154C440.744 873.757 452.318 863.611 465.714 864.491L462.528 913.003Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.982291 -0.187359 -0.187359 0.982291 438.677 862.467)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M405.69 905.668C392.502 903.153 383.851 890.423 386.366 877.236C388.881 864.048 401.611 855.397 414.799 857.912L405.69 905.668Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.949991 -0.312276 -0.312276 0.949991 388.32 852.599)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M350.045 891.194C337.291 887.001 330.351 873.264 334.543 860.51C338.735 847.756 352.473 840.815 365.227 845.008L350.045 891.194Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.904271 -0.426959 -0.426959 0.904271 339.669 836.334)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M296.93 869.919C284.79 864.187 279.595 849.699 285.327 837.559C291.059 825.419 305.548 820.224 317.688 825.956L296.93 869.919Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.841723 -0.53991 -0.53991 0.841723 293.275 814.134)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M246.565 841.931C235.264 834.683 231.98 819.646 239.228 808.346C246.477 797.045 261.513 793.761 272.814 801.009L246.565 841.931Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.768366 -0.640011 -0.640011 0.768366 250.193 786.27)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M200.4 808.068C190.085 799.475 188.688 784.148 197.28 773.832C205.872 763.517 221.2 762.12 231.516 770.712L200.4 808.068Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.683609 -0.729848 -0.729848 0.683609 210.998 753.324)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M158.897 768.817C149.72 759.019 150.223 743.636 160.021 734.458C169.82 725.28 185.203 725.784 194.38 735.582L158.897 768.817Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.585291 -0.810823 -0.810823 0.585291 175.853 715.452)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M122.205 724.197C114.348 713.312 116.802 698.117 127.688 690.26C138.573 682.402 153.768 684.856 161.625 695.742L122.205 724.197Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.479779 -0.877389 -0.877389 0.479779 146.009 673.815)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M91.6902 675.813C85.249 664.033 89.5763 649.263 101.356 642.822C113.135 636.381 127.905 640.708 134.346 652.487L91.6902 675.813Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.365308 -0.930887 -0.930887 0.365308 121.53 628.655)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M67.3923 623.787C62.4879 611.29 68.6433 597.183 81.1407 592.278C93.6381 587.374 107.745 593.529 112.649 606.027L67.3923 623.787Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.246873 -0.969048 -0.969048 0.246873 103.158 581.417)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M50.044 569.863C46.7297 556.854 54.5894 543.62 67.5991 540.306C80.6089 536.992 93.8422 544.851 97.1565 557.861L50.044 569.863Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(-0.123004 -0.992406 -0.992406 0.123004 90.7075 531.753)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M39.4692 513.61C37.8179 500.286 47.2799 488.147 60.6032 486.496C73.9265 484.844 86.0659 494.306 87.7173 507.63L39.4692 513.61Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.00772046 -0.99997 -0.99997 -0.00772045 84.4373 478.087)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M36.0089 453.403C36.1126 439.979 47.0796 429.18 60.5045 429.283C73.9294 429.387 84.7284 440.354 84.6248 453.779L36.0089 453.403Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.130625 -0.991432 -0.991432 -0.130625 84.9487 427.283)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M39.9233 396.832C41.677 383.522 53.8887 374.154 67.199 375.907C80.5092 377.661 89.8777 389.873 88.124 403.183L39.9233 396.832Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.254227 -0.967145 -0.967145 -0.254227 91.7778 376.545)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M50.9379 340.675C54.3509 327.691 67.6435 319.932 80.6277 323.345C93.6119 326.758 101.371 340.051 97.9578 353.035L50.9379 340.675Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.375739 -0.926725 -0.926725 -0.375739 105.24 326.18)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M69.3187 285.385C74.3631 272.944 88.5383 266.947 100.98 271.992C113.421 277.036 119.418 291.211 114.374 303.653L69.3187 285.385Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.486244 -0.873823 -0.873823 -0.486244 123.687 280.643)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M93.024 235.762C99.5519 224.031 114.354 219.813 126.085 226.34C137.817 232.868 142.035 247.671 135.507 259.402L93.024 235.762Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.59414 -0.804362 -0.804362 -0.59414 149.717 234.34)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M125.054 185.902C133.031 175.103 148.251 172.815 159.05 180.792C169.848 188.768 172.136 203.988 164.16 214.787L125.054 185.902Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.688896 -0.72486 -0.72486 -0.688896 179.756 193.782)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M161.262 142.669C170.511 132.937 185.897 132.546 195.628 141.795C205.36 151.043 205.751 166.43 196.503 176.161L161.262 142.669Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.773005 -0.6344 -0.6344 -0.773005 214.429 157.293)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M202.377 104.291C212.755 95.7736 228.072 97.2821 236.589 107.66C245.106 118.038 243.597 133.355 233.219 141.872L202.377 104.291Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <ellipse
              cx="24.3086"
              cy="24.3086"
              rx="24.3086"
              ry="24.3086"
              transform="matrix(0.847617 -0.530609 -0.530609 -0.847617 255.771 123.633)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></ellipse>
            <path
              d="M250.578 69.5262C261.958 62.4026 276.957 65.8527 284.081 77.2322C291.205 88.6117 287.754 103.611 276.375 110.735L250.578 69.5262Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.907421 -0.420222 -0.420222 -0.907421 299.13 96.6151)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M300.758 42.2837C312.94 36.6421 327.39 41.9445 333.031 54.1268C338.673 66.3092 333.37 80.7584 321.188 86.4L300.758 42.2837Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.953465 -0.301502 -0.301502 -0.953465 346.442 74.9066)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M354.961 21.2228C367.761 17.175 381.42 24.2705 385.467 37.0711C389.515 49.8716 382.42 63.5299 369.619 67.5776L354.961 21.2228Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.983696 -0.179842 -0.179842 -0.983696 394.572 59.7644)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M409.741 7.568C422.947 5.15357 435.611 13.9022 438.025 27.1086C440.439 40.315 431.691 52.9782 418.484 55.3926L409.741 7.568Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.998326 -0.0578442 -0.0578442 -0.998326 443.056 50.8091)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M464.511 0.867226C477.914 0.0906521 489.409 10.3262 490.185 23.729C490.962 37.1318 480.726 48.6265 467.323 49.4031L464.511 0.867226Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.997315 0.0732282 0.0732282 -0.997315 498.972 47.9363)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M526.776 1.22958C540.165 2.21269 550.222 13.8638 549.239 27.253C548.256 40.6423 536.605 50.6994 523.216 49.7163L526.776 1.22958Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.980831 0.194861 0.194861 -0.980831 547.892 51.4539)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M581.208 8.50537C594.376 11.1214 602.93 23.9169 600.314 37.0848C597.698 50.2527 584.903 58.8067 571.735 56.1907L581.208 8.50537Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.94761 0.319428 0.319428 -0.94761 600.204 62.0519)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M638.769 23.7466C651.491 28.035 658.328 41.8246 654.039 54.5465C649.751 67.2685 635.961 74.1052 623.24 69.8168L638.769 23.7466Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.899457 0.437009 0.437009 -0.899457 649.327 78.8107)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M692.437 45.7046C704.513 51.5716 709.546 66.1168 703.679 78.1922C697.812 90.2677 683.267 95.3007 671.191 89.4337L692.437 45.7046Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.83774 0.54607 0.54607 -0.83774 695.156 101.231)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M742.068 73.7765C753.315 81.1077 756.49 96.1681 749.159 107.415C741.827 118.662 726.767 121.836 715.52 114.505L742.068 73.7765Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.763687 0.645587 0.645587 -0.763687 737.499 128.924)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M787.449 107.489C797.702 116.156 798.987 131.494 790.32 141.746C781.653 151.999 766.315 153.284 756.063 144.617L787.449 107.489Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.678286 0.734798 0.734798 -0.678286 776.061 161.559)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M828.273 146.444C837.379 156.309 836.764 171.688 826.899 180.795C817.034 189.901 801.655 189.286 792.549 179.421L828.273 146.444Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.57935 0.815079 0.815079 -0.57935 811.934 200.746)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M865.644 192.393C873.422 203.336 870.856 218.512 859.914 226.29C848.971 234.068 833.795 231.502 826.017 220.559L865.644 192.393Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.473283 0.88091 0.88091 -0.473283 841.367 242.358)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M895.7 240.762C902.054 252.588 897.617 267.326 885.791 273.68C873.964 280.034 859.226 275.598 852.872 263.771L895.7 240.762Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.35832 0.933599 0.933599 -0.35832 865.635 287.856)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M919.734 293.13C924.545 305.664 918.284 319.725 905.75 324.535C893.216 329.346 879.156 323.085 874.345 310.551L919.734 293.13Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.239499 0.970897 0.970897 -0.239499 883.616 334.926)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M936.64 346.884C939.855 359.918 931.895 373.091 918.861 376.307C905.826 379.522 892.653 371.562 889.438 358.527L936.64 346.884Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
            <circle
              cx="24.3086"
              cy="24.3086"
              r="24.3086"
              transform="matrix(0.115373 0.993322 0.993322 -0.115373 895.812 385.048)"
              fill="#6188C0"
              // style="fill:color(display-p3 0.3804 0.5333 0.7529)"
            ></circle>
            <path
              d="M946.91 403.585C948.458 416.921 938.903 428.987 925.568 430.536C912.232 432.085 900.166 422.53 898.617 409.194L946.91 403.585Z"
              fill="#C6DFFF"
              // style="fill:color(display-p3 0.7765 0.8745 1.0000)"
            ></path>
          </motion.g>
        </g>
      </motion.g>
    </svg>
  );
};

export default RotatingBalls;
