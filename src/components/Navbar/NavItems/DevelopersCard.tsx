import React, { useState } from "react";
import { motion } from "framer-motion";
import {BugBounty, DocumentationIcon, SecurityIcon} from "./DevelopersCard/DeveloperIcons";
import { DeveloperIllustration } from "./DevelopersCard/DevelopersIllustration";

const DevelopersCard = () => {
  const [activeItem, setActiveItem] = useState(1);
  const defaultColors = ["#636161", "#8F8E8E"];

  const data = [
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
    }
  ];

  return (
    <div className="flex gap-2 justify-between  w-[615.7px] h-[212px] rounded-[16px] p-2 overflow-hidden relative bg-white">
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className={`flex gap-3 items-center justify-between rounded-[12px] p-2 overflow-hidden relative cursor-pointer
              ${
                activeItem === item.id
                  ? "bg-[#221d1d08]"
                  : "hover:bg-[#221d1d08]"
              }`}
            onHoverStart={() => setActiveItem(item.id)}
          >
            <div className="flex gap-3 items-center">
              <item.icon
                isActive={activeItem === item.id}
                colors={
                  activeItem === item.id ? item.colors : item.defaultColors
                }
              />
              <div className="flex flex-col">
                <h3
                  className={`text-[15px] font-inter font-semibold transition-colors duration-200
                  ${
                    activeItem === item.id ? "text-[#1B1A1A]" : "text-[#636161]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm font-inter transition-colors duration-200
                  ${
                    activeItem === item.id ? "text-[#1B1A1A]" : "text-[#8F8E8E]"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="">
        <DeveloperIllustration
          isActive={activeItem}
        />
      </div>
    </div>
  );
};

export default DevelopersCard;
