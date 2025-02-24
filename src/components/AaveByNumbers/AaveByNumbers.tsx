import { useRef } from "react";
import { AnimatedText } from "../utils/AnimatedText";
import NumberCards from "./NumberCards";
import Average from "./NumberSVG/Average";
import AverageTwo from "./NumberSVG/AverageTwo";
import NetDeposits from "./NumberSVG/NetDeposits";
import Volume from "./NumberSVG/Volume";
import { motion, useInView } from "framer-motion";

export default function AaveByNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const isInView2 = useInView(ref, { amount: 0.3, once: true });
  const isInView3 = useInView(ref, { amount: 0.4, once: true });
  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center pt-[100px] px-5 md:px-[48px]"
    >
      <div className="w-full max-w-[986px] flex flex-col md:flex-row gap-[72px] items-start pb-[100px]">
        <div className="w-full md:w-1/2 md:sticky top-[150px] md:ml-[24px] pb-[17px]">
          {/* <h1 className="text-[#221d1d] font-inter text-[40px] font-[600] tracking-[-0.8px] leading-[135%]">Aave By Numbers</h1> */}
          <AnimatedText text="Aave by the numbers." isInView={isInView} />
          <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5}} className="mt-[12px] text-[20px] font-[500] font-inter leading-[135%] tracking-[-0.33px] text-[#636161]">
            Aave is one of the largest DeFi protocols with billions of dollars
            in weekly volume across Ethereum and 12+ networks.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5}}
        className="w-full md:w-1/2 flex flex-col items-center gap-[48px]">
          <NumberCards
            amount={31.59}
            description="Net deposits supplied across 13 networks."
            svg={<NetDeposits isInView={isInView2}/>}
            percentage={false}
          />
          <NumberCards
            amount={173.12}
            description="Volume, past 30 days."
            svg={<Volume/>}
            percentage={false}
          />
          <NumberCards
            amount={6.98}
            description="Average stablecoin supply APY Ethereum network, past year."
            svg={<Average isInView2={isInView2}/>}
            percentage
          />
          <NumberCards
            amount={9.86}
            description="Average stablecoin borrow APR Ethereum network, past year."
            svg={<AverageTwo isInView2={isInView3}/>}
            percentage
          />
        </motion.div>
      </div>
      <div className="h-[1px] w-full max-w-[1024px] bg-zinc-100"></div>
    </div>
  );
}
