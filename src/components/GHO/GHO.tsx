import { useRef } from "react";
import { AnimatedText } from "../utils/AnimatedText";
import { CustomLink } from "../utils/CustomLink";
import Collateral from "./Cards/Collateral";
import GHObubbles from "./Cards/GHObubbles";
import GHOMinted from "./Cards/GHOMinted";
import { useInView } from "framer-motion";

export default function GHO() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  return (
    <div ref={ref} className="w-full flex items-center flex-col pt-[100px] pb-[100px] px-[48px]">
      <div className="relative w-full max-w-[986px]">
        <div className="w-full pl-[24px] pr-[24px]">
          <AnimatedText text="GHO" isInView={isInView}/>
          <p className="mt-[12px] text-[20px] max-w-[24em] font-[500] tracking-[-0.33px] leading-[135%] font-inter text-[#636161]">
            GHO is the only decentralised, overcollateralised stablecoin native
            to the Aave Protocol.
          </p>
          <CustomLink href="/">Learn More</CustomLink>
        </div>
        <div className="mt-[72px] grid grid-cols-[10fr_6fr] grid-rows-2 gap-[24px]">
          <div className="relative overflow-hidden row-span-2 rounded-[16px] bg-[#f7f6f6]">
            <GHObubbles />
          </div>
          <div className="p-[32px] overflow-hidden bg-[#f7f6f6] rounded-[16px] relative">
            <p className="mb-[8px] font-inter text-[24px] font-[600] leading-[105%] tracking-[-0.48px] text-[#221d1d]  text-nowrap">
              <span className="inline-flex justify-end w-[42px]">
                <span>245</span>
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
            <Collateral />
          </div>
          <div className="p-[32px] overflow-hidden bg-[#f7f6f6] rounded-[16px] relative">
            <p className="mb-[8px] font-inter text-[24px] font-[600] leading-[105%] tracking-[-0.48px] text-[#221d1d]  text-nowrap">
              +&nbsp;
              <span className="inline-flex justify-end w-[135px]">
                <span>163,544,600</span>
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
            <GHOMinted />
          </div>
        </div>
      </div>
    </div>
  );
}
