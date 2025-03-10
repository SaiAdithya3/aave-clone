import { useRef } from "react";
import { AnimatedText } from "../utils/AnimatedText";
import { Logo } from "./Logo";
import MiddleIcon from "./MiddleIcon";
import { logos } from "./data/logos";
import { useInView } from "framer-motion";
import { logosright } from "./data/logosright";

export default function AaveEverywhere() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 , once: true});
  return (
    <div ref={ref} className="w-full pt-[100px] pb-[100px] px-5 md:px-[48px] flex items-center flex-col">
      <div className="w-full max-w-[986px]">
        <div className="w-full md:px-[24px]">
          <AnimatedText text="Aave everywhere." isInView={isInView}/>
          <p className="mt-[12px] text-lg md:text-[20px] md:max-w-[24em] font-[500] tracking-[-0.33px] leading-[135%] font-inter text-[#636161]">
            Join Aave&apos;s growing constellation of builders.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-[9px] mt-[72px]">
          <div className="hidden md:grid grid-cols-3 gap-[9px]">
            {logos.slice(0, 9).map((logo) => (
              <Logo key={logo.id} logo={logo} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-[9px]">
            {logos.slice(0, 6).map((logo) => (
              <Logo key={logo.id} logo={logo} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center rounded-[1em] bg-[#9896FF]">
            <MiddleIcon />
          </div>
          <div className="hidden md:grid grid-cols-3 gap-[9px]">
            {logosright.slice(0, 9).map((logo) => (
              <Logo key={logo.id} logo={logo} />
            ))}
          </div>
          <div className="md:hidden grid grid-cols-3 gap-[9px]">
            {logosright.slice(0, 6).map((logo) => (
              <Logo key={logo.id} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}