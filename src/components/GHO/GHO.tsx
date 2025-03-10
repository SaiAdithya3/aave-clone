import { useRef } from "react";
import { AnimatedText } from "../utils/AnimatedText";
import { CustomLink } from "../utils/CustomLink";
import Collateral from "./Cards/Collateral";
import GHObubbles from "./Cards/GHObubbles";
import GHOMinted from "./Cards/GHOMinted";
import { useInView } from "framer-motion";
import { NumberTicker } from "../utils/NumberTicker";

export default function GHO() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 , once: true});
  const isInView2 = useInView(ref, { amount: 0.5 , once: true});
  const isInView3 = useInView(ref, { amount: 0.7 , once: true});
  return (
    <div ref={ref} className="w-full flex items-center flex-col pt-[100px] pb-[100px] px-5 md:px-[48px]">
      <div className="relative w-full max-w-[986px]">
        <div className="w-full px-2 md:p-[24px]">
          <AnimatedText text="GHO" isInView={isInView}/>
          <p className="mt-[12px] text-[14px] md:text-[20px] mb-8 md:mb-4  max-w-[24em] font-[500] tracking-[-0.33px] leading-[135%] font-inter text-[#636161]">
            GHO is the only decentralised, overcollateralised stablecoin native
            to the Aave Protocol.
          </p>
          <CustomLink href="/" title="Learn more">Learn More</CustomLink>
        </div>
        <div className="mt-[72px] grid md:grid-cols-[10fr_6fr] grid-rows-2 gap-[24px]">
          <div className="relative overflow-hidden row-span-2 rounded-[16px] bg-[#fafafa]">
            <GHObubbles />
          </div>
          <div className="p-[32px] overflow-hidden bg-[#fafafa] rounded-[16px] relative">
            <p className="mb-[8px] font-inter text-[24px] font-[600] leading-[105%] tracking-[-0.48px] text-[#221d1d]  text-nowrap">
              <span className="inline-flex justify-end w-[42px]">
              <NumberTicker value={245}  />
              </span>
              %
            </p>
            <p>
              <span className="font-inter text-[16px] leading-[135%] tracking-[-0.09px] text-[#636161] ">
                Collateralisation
              </span>
              <svg
                className="styles_gridCardDot__Zmfvh inline-block mx-[8px] align-middle"
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="1.83325" cy="2" r="1.5" fill="#BCBBBB"></circle>
              </svg>
              <span className="font-inter text-[16px] leading-[135%] tracking-[-0.09px] text-[#8f8e8e] align-middle">
                30 Day Avg
              </span>
            </p>
            <Collateral isInView={isInView2}/>
          </div>
          <div className="p-[32px] overflow-hidden bg-[#fafafa] rounded-[16px] relative">
            <p className="mb-[8px] font-inter text-[24px] font-[600] leading-[105%] tracking-[-0.48px] text-[#221d1d]  text-nowrap">
              +&nbsp;
              <span className="inline-flex justify-end w-[135px]">
                <NumberTicker value={170217240} />
              </span>
            </p>
            <p>
              <span className="font-inter text-[16px] leading-[135%] tracking-[-0.09px] text-[#636161] ">
                GHO Minted
              </span>
              <svg
                className="styles_gridCardDot__Zmfvh inline-block mx-[8px] align-middle"
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="1.83325" cy="2" r="1.5" fill="#BCBBBB"></circle>
              </svg>
              <span className="font-inter text-[16px] leading-[135%] tracking-[-0.09px] text-[#8f8e8e] align-middle">
                1 Yr
              </span>
            </p>
            <GHOMinted isInView={isInView3}/>
          </div>
        </div>
      </div>
    </div>
  );
}
