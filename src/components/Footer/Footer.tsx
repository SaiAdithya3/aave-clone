import React, { useRef } from "react";
import navData from "./navData";
import Socials from "./Socials";
import Aavesmall from "@/assets/logos/aavesmall";
import FooterLines from "./FooterLines";
import { useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <div ref={ref} className="my-0 mx-auto w-full max-w-[1082px] px-5 md:px-0 md:pb-[72px] pb-12">
      <footer ref={ref} className="rounded-[16px] py-9 px-6 md:p-12 bg-[#f8f6f6]">
        <div className="flex justify-between flex-col md:flex-row gap-y-12 md:gap-y-0 gap-x-0 md:gap-x-20">
          <div>
              <Aavesmall />
            <p className="mt-[32px] max-w-[433px] text-[10px] leading-[120%] tracking-[.1px] text-[#b6b6b6]">
              Aave.com provides information and resources about the fundamentals
              of the decentralised non-custodial liquidity protocol called the
              Aave Protocol, comprised of open-source self-executing smart
              contracts that are deployed on various permissionless public
              blockchains, such as Ethereum &#x28;the &quot;Aave Protocol&quot;
              or the &quot;Protocol&quot;&#x29;. Aave Labs does not control or
              operate any version of the Aave Protocol on any blockchain
              network.
            </p>
          </div>
          <nav className="w-full max-w-[457px]">
            <ul className="list-none flex md:gap-x-[72px] gap-8 xs:justify-between justify-start xs:flex-nowrap flex-wrap">
              {navData.map((section, index) => (
                <li key={index}>
                  <p className="font-inter text-sm font-medium leading-[105%] tracking-[-0.09px] text-[#221d1d]">
                    {section.title}
                  </p>
                  <ul className="list-none flex flex-col gap-y-3 mt-4">
                    {section.links.map((linkItem, linkIndex) => (
                      <li key={linkIndex} className="leading-[105%]">
                        <a
                          href={linkItem.link}
                          className="font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-black transition-all duration-100 ease-in-out"
                        >
                          {linkItem.subhead}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Socials />
      </footer>
      <FooterLines isInView={isInView} />
    </div>
  );
}
