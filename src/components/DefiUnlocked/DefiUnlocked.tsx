import { AnimatedText } from "@/components/utils/AnimatedText";

export default function DefiUnlocked() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-[100px] px-[48px] ">
      <div className="w-full max-w-[986px] gap-[72px] items-start pb-[100px]">
        <h2 className="px-[24px] text-[40px] leading-[135%] tracking-[-0.8px] font-[600] text-[#221d1d]">
          <AnimatedText text="DeFi, unlocked." />
        </h2>
        <div className="w-full mt-[48px] grid grid-cols-2">
            <div className="flex justify-end flex-col z-0 overflow-hidden bg-[#f7f6f6] px-[40px] py-[32px] relative">
              one
            </div>
            <div className="flex justify-end flex-col z-0 overflow-hidden bg-[#f7f6f6] px-[40px] py-[32px] relative">
              one
            </div>
            <div className="flex justify-end flex-col z-0 overflow-hidden bg-[#f7f6f6] px-[40px] py-[32px] relative">
              one
            </div>
            <div className="flex justify-end flex-col z-0 overflow-hidden bg-[#f7f6f6] px-[40px] py-[32px] relative">
              one
            </div>
        </div>
      </div>
    </div>
  );
}

// styles_cardsContainer__JdqID {
//   display: grid
// ;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 300px 300px;
//   grid-gap: 48px 40px;
//   gap: 48px 40px;
//   margin-top: 48px;



// register 