import { useRef } from "react";
import { AnimatedText } from "../utils/AnimatedText";
import { useInView } from "framer-motion";
import Extensive from "./Cards/Extensive";
import FiveYears from "./Cards/FiveYears";
import { CustomLink } from "../utils/CustomLink";
import ShortFall from "./Cards/ShortFall";
import BugBounty from "./Cards/BugBounty";

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  return (
    <div
      ref={ref}
      className="w-full flex items-center flex-col pt-[100px] pb-[100px] px-[48px]"
    >
      <div className="relative w-full max-w-[986px]">
        <div className="w-full pl-[24px] pr-[24px]">
          <AnimatedText text="Serious security." isInView={isInView} />
          <p className="mt-[12px] text-[20px] max-w-[24em] font-[500] tracking-[-0.33px] leading-[135%] font-inter text-[#636161]">
            Peace of mind by design.
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 md:gap-y-[72px] items-center pt-[72px]">
          <div className="md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden">
            <div className="flex max-w-full h-full align-top bg-[#f7f7f6]">
              <Extensive isInView={isInView} />
            </div>
            <div className="flex flex-col gap-y-6 md:py-10 md:px-12 p-8">
              <h3 className="font-regola text-2xl leading-[135%] -tracking-[.48px] ">
                Extensive Audits
              </h3>
              <div className="w-full h-[1px] bg-[#e6e6e5]"></div>
              <p className="font-inter text-base leading-[150%] -tracking-[.18px] ">
                Peace of mind supported by multiple audits by the world&apos;s
                leading security firms.
              </p>
              <span>
                <CustomLink title="Learn More" color="#000" />
              </span>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col-reverse md:flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden">
            <div className="flex flex-col gap-y-6 md:py-10 md:px-12 p-8">
              <h3 className="font-regola text-2xl leading-[135%] -tracking-[.48px] ">
                Bug Bounty
              </h3>
              <div className="w-full h-[1px] bg-[#e6e6e5]"></div>
              <p className="font-inter text-base leading-[150%] -tracking-[.18px] ">
                Security is a top priority. Report vulnerabilities or bugs
                responsibly and get rewarded.
              </p>
              <span>
                <CustomLink title="Learn More" color="#000" />
              </span>
            </div>
            <div className="flex max-w-full h-full align-top bg-[#f7f7f6]">
              <BugBounty isInView={isInView} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col rounded-2xl bg-[#fcfcfb] overflow-hidden">
            <div className="flex max-w-full h-full align-top bg-[#f7f7f6]">
              <ShortFall isInView={isInView} />
            </div>
            <div className="flex flex-col gap-y-6 md:py-10 md:px-12 p-8">
              <h3 className="font-regola text-2xl leading-[135%] -tracking-[.48px] ">
                Shortfall Secured
              </h3>
              <div className="w-full h-[1px] bg-[#e6e6e5]"></div>
              <p className="font-inter text-base leading-[150%] -tracking-[.18px] ">
                The Aave Protocol is secured with a backstop against protocol
                insolvency.
              </p>
              <span>
                <CustomLink title="Learn More" color="#000" />
              </span>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:grid-rows-[257px] flex flex-col-reverse md:flex-col  rounded-2xl bg-[#fcfcfb] overflow-hidden">
            <div className="flex flex-col gap-y-6 md:py-10 md:px-12 p-8">
              <h3 className="font-regola text-2xl leading-[135%] -tracking-[.48px] ">
                5 Years Strong
              </h3>
              <div className="w-full h-[1px] bg-[#e6e6e5]"></div>
              <p className="font-inter text-base leading-[150%] -tracking-[.18px] ">
                Aave is leading the DeFi Renaissance, committed to it’s mission
                of bringing global finance onchain.
              </p>
              <span>
                <CustomLink title="Learn More" color="#000" />
              </span>
            </div>
            <div className="flex max-w-full h-full align-top bg-[#f7f7f6]">
              <FiveYears />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
