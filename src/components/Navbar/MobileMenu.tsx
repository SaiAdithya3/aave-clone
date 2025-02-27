import React from "react";
import { motion } from "framer-motion";
import ProductsCard from "./NavItems/Products";
import {
  BrandIcon,
  GovernanceIcon,
  HelpIcon,
  ResourceIcon,
} from "./NavItems/ResourcesCard/ResourceIcons";
import {
  BugBounty,
  DocumentationIcon,
  SecurityIcon,
} from "./NavItems/DevelopersCard/DeveloperIcons";

const MobileMenu = () => {
  const defaultColors = ["#636161", "#8F8E8E"];

  const data = [
    {
      id: 1,
      icon: BrandIcon,
      title: "Brand",
      description: "Assets, examples and guides.",
      colors: ["#9896ff", "#bdbbff"],
      defaultColors,
    },
    {
      id: 2,
      icon: ResourceIcon,
      title: "FAQ",
      description: "Assets, examples and guides.",
      colors: ["#39beb7", "#00827b"],
      defaultColors,
    },
    {
      id: 3,
      icon: HelpIcon,
      title: "Help",
      description: "Assets, examples and guides.",
      colors: ["#ff0000", "#ff8130"],
      defaultColors,
    },
    {
      id: 4,
      icon: GovernanceIcon,
      title: "Governance",
      description: "Assets, examples and guides.",
      colors: ["#5589c5", "#00498b"],
      defaultColors,
    },
  ];

  const devdata = [
    {
      id: 1,
      icon: DocumentationIcon,
      title: "Documentation",
      description: "Technical guides for developers.",
      colors: ["#a7e9fd", "#39d1f9"],
      defaultColors,
    },
    {
      id: 2,
      icon: SecurityIcon,
      title: "Security",
      description: "Audit reports and information.",
      colors: ["#63bbb6", "#00827b"],
      defaultColors,
    },
    {
      id: 3,
      icon: BugBounty,
      title: "Bug Bounty",
      description: "Report responsibly and get rewarded.",
      colors: ["#ffd400", "#ffb000"],
      defaultColors,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 overflow-y-scroll h-[95vh] top-[60px] bg-white z-0 md:hidden"
    >
      <div className="pb-24 px-2 flex flex-col gap-6">
        <ProductsCard />
        <div className="flex flex-col gap-2 justify-between w-full rounded-[16px] p-2 overflow-hidden relative bg-white">
          <h1 className="text-start w-full font-inter font-[500]">Brand</h1>
          <div className="flex flex-col w-full gap-2">
            {data.map((item) => (
              <motion.div
                key={item.id}
                className={`flex w-full gap-3 items-center justify-between rounded-[12px] p-2 overflow-hidden relative cursor-pointer `}
              >
                <div className="flex w-full gap-3 items-center">
                  <item.icon colors={item.colors} />
                  <div className="flex flex-col">
                    <h3
                      className={`text-[15px] font-inter font-semibold transition-colors duration-200 text-[#1B1A1A]`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm font-inter transition-colors duration-200 text-[#1B1A1A]`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between w-full rounded-[16px] p-2 overflow-hidden relative bg-white">
          <h1 className="text-start w-full font-inter font-[500]">
            Developers
          </h1>
          <div className="flex flex-col w-full gap-2">
            {devdata.map((item) => (
              <motion.div
                key={item.id}
                className={`flex w-full gap-3 items-center justify-between rounded-[12px] p-2 overflow-hidden relative cursor-pointer `}
              >
                <div className="flex w-full gap-3 items-center">
                  <item.icon colors={item.colors} />
                  <div className="flex flex-col">
                    <h3
                      className={`text-[15px] font-inter font-semibold transition-colors duration-200 text-[#1B1A1A]`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm font-inter transition-colors duration-200 text-[#1B1A1A]`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
