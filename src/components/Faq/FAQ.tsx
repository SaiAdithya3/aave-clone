import { useRef } from "react";
import { AnimatedText } from "../utils/AnimatedText";
import { useInView } from "framer-motion";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  return (
    <div ref={ref} className="w-full flex items-center flex-col pt-[100px] pb-[100px] px-[48px]">
      <div className="relative w-full max-w-[986px]">
        <div className="w-full pl-[24px] pr-[24px]">
          <AnimatedText text="FAQ" isInView={isInView} />
          <p className="mt-[12px] text-[20px] max-w-[24em] font-[500] tracking-[-0.33px] leading-[135%] font-inter text-[#636161]">
            GHO is the only decentralised, overcollateralised stablecoin native
            to the Aave Protocol.
          </p>
        </div>
      </div>
    </div>
  );
}
