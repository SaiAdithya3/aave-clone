import { AnimatedText } from "../utils/AnimatedText";

export default function Trusted() {
  return (
    <div className="w-full flex items-center flex-col pt-[100px] pb-[100px] px-[48px]">
      <div className="relative w-full max-w-[986px]">
        <div className="w-full pl-[24px] pr-[24px]">
          <AnimatedText text="Trusted by the best." />
          <h2 className="text-[20px]  font-[500] tracking-[-0.33px] leading-[135%] font-inter text-[#636161]">
            Aave Protocol has been trusted by leading institutions and
            companies.
          </h2>
        </div>
      </div>
    </div>
  );
}
