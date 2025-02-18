import NumberCards from "./NumberCards";
import Average from "./NumberSVG/Average";
import AverageTwo from "./NumberSVG/AverageTwo";
import NetDeposits from "./NumberSVG/NetDeposits";
import Volume from "./NumberSVG/Volume";

export default function AaveByNumbers() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-[100px] ">
      <div className="w-full max-w-[986px] flex gap-[72px] items-start pb-[100px]">
        <div className="w-1/2 sticky top-[150px] ml-[24px] pb-[17px]">
          <h1 className="text-[#221d1d] font-inter text-[40px] font-[600] tracking-[-0.8px] leading-[135%]">Aave By Numbers</h1>
          <p className="mt-[12px] text-[20px] font-[500] font-inter leading-[135%] tracking-[-0.33px] text-[#636161]">
          Aave is one of the largest DeFi protocols with billions of dollars in weekly volume across Ethereum and 12+ networks.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-[48px]">
            <NumberCards amount={31.59} description="Net deposits supplied across 13 networks." svg={<NetDeposits/>} percentage={false}/>
            <NumberCards amount={67.16} description="Volume, past 30 days." svg={<Volume />} percentage={false}/>
            <NumberCards amount={7.02} description="Average stablecoin supply APY Ethereum network, past year." svg={<Average />} percentage/>
            <NumberCards amount={9.88} description="Average stablecoin borrow APR Ethereum network, past year." svg={<AverageTwo />} percentage/>
        </div>
      </div>
      <div className="h-[1px] w-full max-w-[1024px] bg-zinc-100"></div>
    </div>
  );
}
