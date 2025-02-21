import { useRef, useState } from "react";
import { AnimatedText } from "../utils/AnimatedText";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { CustomLink } from "../utils/CustomLink";

const faqData = [
  {
    question: "What is Aave?",
    answer:
      "Aave is a decentralised non-custodial liquidity protocol where users can participate as suppliers or borrowers. Suppliers provide liquidity to the market while earning interest, and borrowers can access liquidity by providing collateral that exceeds the borrowed amount.",
  },
  {
    question: "Where are supply tokens stored?",
    answer:
      "Supplied tokens are stored in publicly accessible smart contracts that enable overcollateralised borrowing according to governance-approved parameters. The Aave Protocol smart contracts have been audited and formally verified by third parties.",
  },
  {
    question: "Does Aave have risks?",
    answer:
      "No protocol can be considered entirely risk free, but extensive steps have been taken to minimize these risks as much as possible -- the Aave Protocol code is publicly available and auditable by anyone, and has been audited by multiple smart contract auditors. Any code changes must be executed through the onchain governance processes. Additionally, there is an ongoing bug bounty campaign and service providers specializing in technical reviews and risk mitigation.",
  },
  {
    question: "What is the Aave token?",
    answer:
      "AAVE is used as the centre of gravity of Aave Protocol governance. AAVE is used to vote and decide on the outcome of Aave Improvement Proposals (AIPs). Apart from this, AAVE can be staked within the protocol Safety Module to provide a backstop in the case of a shortfall event, and earn incentives for doing so.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div ref={ref} className="w-full flex items-center flex-col ">
        <hr className="w-full max-w-[1082px] h-[1px] bg-[#f1f1f0] mx-auto" />
        <div className="relative w-full max-w-[986px] pt-[100px] pb-[100px] px-5 ">
          <div className="w-full grid md:grid-cols-[1fr_2fr] gap-[10px] md:gap-[72px]">
            <AnimatedText text="FAQs" isInView={isInView} />
            <div className="flex flex-col ">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f7f7f7] mb-[8px] rounded-[12px]"
                >
                  <motion.button
                    className="w-full px-[24px] py-5 flex justify-between items-center text-left"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <span className="text-[16px] md:text-[20px] font-medium text-[#221d1d]">
                      {faq.question}
                    </span>
                    <motion.div
                      className="relative w-6 h-6"
                      animate={{ rotate: activeIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                      >
                        <motion.path
                          d="M4 12H20"
                          stroke="#1a88f8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          animate={{ rotate: activeIndex === index ? 90 : 0 }}
                        />
                        <motion.path
                          d="M12 4V20"
                          stroke="#1a88f8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          animate={{
                            opacity: activeIndex === index ? 0 : 1,
                            scale: activeIndex === index ? 0 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.svg>
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-[24px] pb-6 text-[16px] leading-[150%] text-[#626161]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="w-full flex items-start my-[32px]">
                <CustomLink title="See More" color="#1a88f8"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full max-w-[1082px] h-[1px] bg-[#f1f1f0] mx-auto" />
    </>
  );
}
