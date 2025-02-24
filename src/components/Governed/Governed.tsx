import { useRef } from "react";
import RotatingBalls from "./RotatingBalls";
import { useInView } from "framer-motion";

export default function Governed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });
  return (
    <div ref={ref} className="w-full flex items-center flex-col pt-[100px] pb-[100px] px-5 md:px-[48px]">
      <div className="relative w-full max-w-[986px] flex justify-center items-center flex-col z-0 h-[400px] md:h-auto rounded-2xl aspect-[986/480] bg-[#00498b] text-center overflow-hidden p-[1rem_4rem]">
        <h1 className="mt-4 mb-4 text-white text-[40px] font-regola font-[600] leading-[135%] tracking-[-0.33px]">
          <span>Governed by you & </span>
          <span className="text-[#90caff]">202,497</span>
          <span> others.</span>
        </h1>
        <p className="max-w-[26em] font-inter text-[20px] font-[500] leading-[150%] tracking-[-0.33px] text-[#90caff]">
        AAVE token holders guide the Aave Protocol via procedures, voting, and smart contract execution.
        </p>
        <button className="flex items-center gap-[6px] mt-6 rounded-[50px] py-3 px-5 bg-white shadow-[0_2px_2px_0_rgba(0,0,0,0.02)] no-underline font-sans text-base font-[500] leading-[105%] tracking-[-0.18px] text-[#00498b] transition-all duration-180 hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.05)] hover:scale-105 group">
          Go to the forum
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            className="transition-transform duration-180 group-hover:translate-x-0.5"
          >
            <path 
              d="M3 8.5H12.5M12.5 8.5L8.5 4.5M12.5 8.5L8.5 12.5" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <RotatingBalls isInView={isInView}/>
      </div>
    </div>
  );
}