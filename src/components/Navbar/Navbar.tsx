import SearchIcon from "@/assets/icons/SearchIcon";
import Aavelogo from "@/assets/logos/aavelogo"; 

export default function Navbar() {
  return (
    <div className="w-full ">
      <nav className="flex mx-auto items-center px-6 md:px-12 md:pt-6 py-1 md:pb-0 justify-between bg-white w-full max-w-[1082px]">
        <div className="w-1/2 py-5">
          <Aavelogo />
        </div>
        <div className="w-1/2 flex gap-2 items-center px-2">
          <div className="item">
            <h1 className="font-inter px-[16px] py-[9px] text-sm font-[500] leading-[105%] text-[#221d1d] bg-transparent hover:bg-[#221d1d08] rounded-[50px] cursor-default">
              Products
            </h1>
          </div>
          <div className="item">
            <h1 className="font-inter px-[16px] py-[9px] text-sm font-[500] leading-[105%] text-[#221d1d] bg-transparent hover:bg-[#221d1d08] rounded-[50px] cursor-default">
              Resources
            </h1>
          </div>
          <div className="item">
            <h1 className="font-inter px-[16px] py-[9px] text-sm font-[500] leading-[105%] text-[#221d1d] bg-transparent hover:bg-[#221d1d08] rounded-[50px] cursor-default">
              Developers
            </h1>
          </div>
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
