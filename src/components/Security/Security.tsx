import { useRef } from "react";
import { AnimatedText } from "../utils/AnimatedText";
import { useInView } from "framer-motion";

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  return (
    <div ref={ref} className="w-full flex items-center flex-col pt-[100px] pb-[100px] px-[48px]">
      <div className="relative w-full max-w-[986px]">
        <div className="w-full pl-[24px] pr-[24px]">
          <AnimatedText text="Serious security." isInView={isInView}/>
          <p className="mt-[12px] text-[20px] max-w-[24em] font-[500] tracking-[-0.33px] leading-[135%] font-inter text-[#636161]">
            Peace of mind by design.
          </p>
        </div>
      </div>
    </div>
  );
}
