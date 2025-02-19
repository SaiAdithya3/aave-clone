import { AnimatedText } from "../utils/AnimatedText";
import { CustomLink } from "../utils/CustomLink";
import GHObubbles from "./Cards/GHObubbles";

export default function GHO() {
  return (
    <div className="w-full flex items-center flex-col pt-[100px] pb-[100px] px-[48px]">
      <div className="relative w-full max-w-[986px]">
        <div className="w-full pl-[24px] pr-[24px]">
          <AnimatedText text="GHO" />
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
          </div>
          <div className="p-[32px] overflow-hidden bg-[#f7f6f6] rounded-[16px] relative">
            nice
          </div>
        </div>
      </div>
    </div>
  );
}
