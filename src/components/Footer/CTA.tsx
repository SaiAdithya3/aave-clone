export default function CTA() {
    return (
      <div className="flex flex-col items-center py-[100px] px-5 md:px-[48px]">
        <div className="relative w-full max-w-[986px]">
          <div className="flex md:flex-row flex-col w-full rounded-[12px] overflow-hidden">
            <div className="flex flex-col relative w-full md:w-1/3 bg-[#fcfcfb] p-[48px] gap-[12px]">
              <h2 className="font-regola text-[24px] font-[600] tracking-[-0.48px] leading-[135%]">
                Stay Updated
              </h2>
              <p className="text-[16px] font-inter font-[400] leading-[150%] tracking-[-0.18px] text-[#626161]">
                Be the first to hear Aave protocol news.
              </p>
            </div>
            <div className="flex relative w-full md:w-2/3 bg-[#f7f7f6] p-[48px] gap-[4px]">
              <div className="flex flex-col w-full gap-[8px]">
                <label htmlFor="email" className="flex w-full justify-between items-center h-[32px]">
                  <div className="flex items-center gap-[6px]">
                    <span className="font-[500]">Email</span>
                    <div className="w-1 h-1 rounded-full bg-[#9896ff]" data-error="false"></div>
                  </div>
                  <div className="font-inter text-[14px] font-[400] leading-[150%] tracking-[-0.18px] font-feature-settings-['cv11']"></div>
                </label>
                <div className="flex w-full gap-[4px]">
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="ronnie@aave.com" 
                    className="w-full border-none rounded-[20px_6px_6px_20px] p-[10px_16px] flex items-center gap-[8px] h-[40px] bg-white font-sans text-[16px] font-[400] leading-[150%] tracking-[-0.18px] font-feature-settings-['cv11']"
                  />
                  <button className="relative inline-block rounded-[6px_20px_20px_6px] h-[40px] px-4 bg-[#221d1d] text-white font-sans text-[16px] font-[500] leading-[105%] tracking-[-0.09px] transition-all duration-150 cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }