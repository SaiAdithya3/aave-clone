import SearchIcon from "@/assets/icons/SearchIcon";
import Aavelogo from "@/assets/logos/aavelogo";
import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import ProductsCard from "./NavItems/Products";
import ResourcesCard from "./NavItems/ResourcesCard";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productsContent = (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="font-semibold mb-2">Lending</h3>
        <p className="text-sm text-gray-600">Supply or borrow assets</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Staking</h3>
        <p className="text-sm text-gray-600">Stake AAVE tokens</p>
      </div>
    </div>
  );

  const resourcesContent = (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="font-semibold mb-2">Documentation</h3>
        <p className="text-sm text-gray-600">Learn about AAVE</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Security</h3>
        <p className="text-sm text-gray-600">Security reports and audits</p>
      </div>
    </div>
  );

  const developersContent = (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div>
        <h3 className="font-semibold mb-2">API</h3>
        <p className="text-sm text-gray-600">Integration guides</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Github</h3>
        <p className="text-sm text-gray-600">View source code</p>
      </div>
    </div>
  );

  return (
    <div className="w-full fixed top-0 z-50">
      <nav
        className={`flex mx-auto items-center px-6 md:px-12  justify-between bg-white w-full max-w-[1082px] transition-all duration-300 ${
          isScrolled ? "border-b border-[#00000010]" : "md:pt-6"
        }`}
      >
        <div className="w-1/2 py-5">
          <Aavelogo />
        </div>
        <div className="w-1/2 flex gap-2 items-center px-2">
          <NavItem title="Products" content={<ProductsCard />} />
          <NavItem title="Resources" content={<ResourcesCard />} />
          <NavItem title="Developers" content={developersContent} />
          <div className="button">
            <button className="font-inter px-4 py-[9px] whitespace-nowrap text-sm font-[500] leading-[105%] text-white bg-[#221d1d] hover:bg-[#3d3b3b] rounded-[50px] cursor-default">
              Open App
            </button>
          </div>
          <div className="button mx-2">
            <button className="font-inter p-[8px] font-[500] leading-[105%] text-white bg-[#221d1d] hover:bg-[#3d3b3b] rounded-[50px] cursor-default">
              <SearchIcon />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
