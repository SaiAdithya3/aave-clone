export default function AaveByNumbers() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[1024px] flex items-start">
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold font-inter">Meet Aave By Numbers</h1>
          <p className="text-lg">
          Aave is one of the largest DeFi protocols with billions of dollars in weekly volume across Ethereum and 12+ networks.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-12">
            <div className="w-full rounded-xl p-32 bg-zinc-300">
                Card one
            </div>
            <div className="w-full rounded-xl p-32 bg-zinc-300">
                Card one
            </div>
            <div className="w-full rounded-xl p-32 bg-zinc-300">
                Card one
            </div>
        </div>
      </div>
      <div className="h-[1px] w-full max-w-[1024px] bg-zinc-100"></div>
    </div>
  );
}
