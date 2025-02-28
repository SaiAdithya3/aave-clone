import { AnimatedText } from "@/components/utils/AnimatedText";
import SwapCard from "./Cards/SwapCard";
import StakeCard from "./Cards/StakeCard";
import HealthFactorCard from "./Cards/HealthFactorCard";
import MultinetworkCard from "./Cards/MultinetworkCard";
import NonCustodial from "./Icons/NonCustodial";
import Transparent from "./Icons/Transparent";
import Community from "./Icons/Community";
import Composability from "./Icons/Composability";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const cardData = [
  {
    title: "Swap",
    description: "Swap any ERC-20, even those borrowed or supplied.",
    svg: (isInView: boolean) => <SwapCard isInView={isInView} />,
    amount: 0.3, 
  },
  {
    title: "Stake",
    description: "Earn rewards for securing the protocol.",
    svg: (isInView: boolean) => <StakeCard isInView={isInView} />,
    amount: 0.4, 
  },
  {
    title: "Health Factor",
    description: "Easily track the risk level of your borrow positions.",
    svg: (isInView: boolean) => <HealthFactorCard isInView={isInView} />,
    amount: 0.5, 
  },
  {
    title: "Multi-Network",
    description: "Deployable on any EVM compatible network.",
    svg: (isInView: boolean) => <MultinetworkCard isInView={isInView} />,
    amount: 0.6, 
  },
];

const TableData = [
  {
    title: "Non-Custodial",
    description:
      "Users maintain control over their own funds throughout the supplying and borrowing process.",
    svg:<NonCustodial />,
  },
  {
    title: "Transparent",
    description:
      "The Aave Protocol is open source and transactions are visible to anyone.",
    svg: <Transparent />,
  },
  {
    title: "Community Governed",
    description:
      "AAVE token holders decide which assets are listed and steer protocol development.",
    svg:<Community />,
  },
  {
    title: "Composability",
    description:
      "Integrating Aave's liquidity pools and interest rate mechanisms enables the creation of diverse products and applications.",
    svg: <Composability />,
  },
];

export default function DefiUnlocked() {
  const ref = useRef(null);
  const cardRefs = useRef(cardData.map(() => React.createRef()));

  // Create separate isInView states for each card
  const cardInViews = cardData.map((card, index) =>
    useInView(cardRefs.current[index] as React.RefObject<HTMLDivElement>, {
      amount: card.amount,
      once: true,
    })
  );

  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center pt-[100px] px-5 md:px-[48px]"
    >
      <div className="w-full max-w-[986px] gap-[72px] items-start pb-[100px]">
        <h2 className="px-[24px] text-[40px] leading-[135%] tracking-[-0.8px] font-[600] text-[#221d1d]">
          <AnimatedText text="DeFi, unlocked." isInView={isInView} />
        </h2>
        <div className="w-full mt-[48px] grid md:grid-cols-2 gap-x-[40px] gap-y-[48px]">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={cardRefs.current[index] as React.RefObject<HTMLDivElement>}
              className="h-[300px] flex justify-end flex-col z-0 overflow-hidden bg-[#fafafa] rounded-[16px] px-[40px] py-[32px] relative"
            >
              <h3 className="mb-[16px] font-inter text-[24px] tracking-[-0.48px] font-[600] leading-[135%] text-[#221d1d]">
                {card.title}
              </h3>
              <p className="text-[16px] font-inter font-[400] leading-[150%] tracking-[-0.18px] text-[#636161]">
                {card.description}
              </p>
              {card.svg(cardInViews[index])}
            </div>
          ))}
        </div>

        <div className="w-full mt-[48px]">
          {TableData.map((card, index) => (
            <div
              key={index}
              className={`w-full p-[32px] rounded-[16px] grid md:grid-cols-2 gap-x-[40px] gap-y-[10px] md:gap-y-[40px] ${
                index % 2 === 1 ? "bg-[#fbfbfb]" : ""
              }`}
            >
              <div className="flex items-center gap-[16px]">
                {card.svg}
                <h3 className="font-inter text-[16px] tracking-[-0.33px] font-[600] leading-[135%] text-[#221d1d]">
                  {card.title}
                </h3>
              </div>
              <p className="text-[16px] font-inter font-[400] tracking-[-0.18px] text-[#636161]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
