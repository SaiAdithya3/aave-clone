import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BrandIcon,
  GovernanceIcon,
  HelpIcon,
  ResourceIcon,
} from "./ResourcesCard/ResourceIcons";
import { ResourceIllustration } from "./ResourcesCard/ResourceIllustration";

const DevelopersCard = () => {
  const [activeItem, setActiveItem] = useState(1);
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
    }
  ];

  return (
    <div className="flex gap-2 justify-between  w-[615.7px] h-[212px] rounded-[16px] p-2 overflow-hidden relative bg-white">
      <div className="w-[50%] flex flex-col gap-2">
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
      <div className="w-[50%]">
        <ResourceIllustration
          colors={data.find((item) => item.id === activeItem)?.colors}
          defaultColors={defaultColors}
        />
      </div>
    </div>
  );
};

export default DevelopersCard;
