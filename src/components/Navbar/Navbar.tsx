import SearchIcon from "@/assets/icons/SearchIcon";
import Aavelogo from "@/assets/logos/aavelogo";
import { useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";
import ProductsCard from "./NavItems/Products";
import ResourcesCard from "./NavItems/ResourcesCard";
import { motion, AnimatePresence } from "framer-motion";
import DevelopersCard from "./NavItems/DevelopersCard";
import HamburgerIcon from "./HamburgerIcon";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemHover = (title: string) => {
    setHoveredItem(title);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const dropdownVariants = {
    initial: { opacity: 0, y: -8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  };

  return (
    <div className="w-full fixed top-0 z-50 ">
      <nav
        className={`flex mx-auto items-center z-50 px-6 md:px-12 justify-between bg-white w-full max-w-[1082px] transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#00000010] pt-1 md:pt-0"
            : "pt-1 md:pt-6"
        }`}
      >
        <div className="w-1/2 py-5 z-[100]">
          <Aavelogo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-1/2 gap-2 items-center px-2 relative">
          {["Products", "Resources", "Developers"].map((item) => (
            <NavItem
              key={item}
              title={item}
              onHover={() => handleItemHover(item)}
              onLeave={handleItemLeave}
              isActive={hoveredItem === item}
            />
          ))}

          <AnimatePresence mode="wait">
            {hoveredItem && (
              <motion.div
                className="absolute top-full -left-1/3 min-w-max"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={dropdownVariants}
                onMouseEnter={() => setHoveredItem(hoveredItem)}
                onMouseLeave={handleItemLeave}
              >
                {/* <div className="relative"> */}
                <motion.div
                  ref={arrowRef}
                  className="-mb-6 w-4 h-4 z-[30] translate-x-[100px] rotate-45 bg-white border-t border-l border-[#00000010]"
                  // style={{
                  //   left: `${dropdownPosition}px`,
                  //   top: "6px",
                  //   transform: "translateX(-50%)",
                  //   zIndex: 1,
                  // }}
                  layoutId="arrow"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                  }}
                />
                <div className="relative mt-4 bg-white rounded-xl border border-[#00000010] shadow-lg overflow-hidden z-[2]">
                  {hoveredItem === "Products" && <ProductsCard />}
                  {hoveredItem === "Resources" && <ResourcesCard />}
                  {hoveredItem === "Developers" && <DevelopersCard />}
                </div>
                {/* </div> */}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="button">
            <button className="font-inter px-4 py-[9px] whitespace-nowrap text-sm font-[500] leading-[105%] text-white bg-[#221d1d] hover:bg-[#3d3b3b] rounded-[50px] cursor-pointer">
              Open App
            </button>
          </div>
          <div className="button mx-2">
            <button className="font-inter p-[8px] font-[500] leading-[105%] text-white bg-[#221d1d] hover:bg-[#3d3b3b] rounded-[50px] cursor-pointer">
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <HamburgerIcon
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu />
        )}
      </AnimatePresence>
    </div>
  );
}
