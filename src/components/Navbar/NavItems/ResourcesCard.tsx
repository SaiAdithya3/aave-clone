import React, { useState } from "react";
import {
  BrandIcon,
  GovernanceIcon,
  HelpIcon,
  ResourceIcon,
} from "./ResourcesCard/ResourceIcons";
import { ResourceIllustration } from "./ResourcesCard/ResourceIllustration";

const ResourcesCard = () => {
  const data = [
    {
      id: 1,
      icon: BrandIcon,
      title: "Brand",
      description: "Assets, examples and guides.",
    },
    {
      id: 2,
      icon: ResourceIcon,
      title: "FAQ",
      description: "Assets, examples and guides.",
    },
    {
      id: 3,
      icon: HelpIcon,
      title: "Help",
      description: "Assets, examples and guides.",
    },
    {
      id: 4,
      icon: GovernanceIcon,
      title: "Governance",
      description: "Assets, examples and guides.",
    },
  ];
  return (
    <div className="flex gap-2 justify-between border border-opacity-65 w-[575.531px] h-[277.59px] rounded-[16px] p-2 overflow-hidden relative bg-white">
      <div className="w- flex flex-col gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 items-center justify-between hover:bg-[#221d1d08] rounded-[12px] p-2 overflow-hidden relative bg-white"
          >
            <div className="">
              <React.Fragment>
                <item.icon />
              </React.Fragment>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[15px] font-inter font-semibold text-[#080808]">
                {item.title}
              </h3>
              <p className="text-sm font-inter text-[#6E6E6E]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-red-200">{/* <ResourceIllustration /> */}</div>
    </div>
  );
};

export default ResourcesCard;
