import { AnimatedText } from "./AnimatedText";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-[1024px] flex flex-col items-start gap-4">
        <div className="bg-zinc-200 hover:bg-zinc-400 transition-all rounded-full px-4 items-center py-1">
          Introducing Aave's new visual identity
          <span className="p-1 bg-gray-200 rounded-full"></span>
          Read more
        </div>
        <h1 className="font-regola font-semibold text-5xl">
          <AnimatedText />
        </h1>
        <p className="font-inter flex text-[20px] leading-[150%] flex-col text-[#636161] items-start font-semibold text-lg">
          <span>Aave is the world’s largest liquidity protocol.</span>
          <span>Supply, borrow, swap, stake and more.</span>
        </p>
        <button className="bg-[#00bc20] text-white font-semibold py-4 px-8 rounded-full mt-8">
          Get Started
        </button>
        <div className="flex items-center font-inter text-[#8f8e8e] font-light gap-1">
          <span className="p-1 bg-purple-400 rounded-full"></span>
          <span className="text-[#636161] font-normal">$ 31.65 billion</span>
          billion of liquidity currently supplied in Aave.
        </div>
      </div>
    </div>
  );
}
