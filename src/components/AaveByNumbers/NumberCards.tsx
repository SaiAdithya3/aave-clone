
type NumberCardProps = {
  amount: number;
  description: string;
  svg: React.ReactNode;
  percentage: boolean;
}

const NumberCards : React.FC<NumberCardProps>= ({amount, description, svg, percentage}) => {
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="w-full overflow-hidden relative z-[1] rounded-[16px] bg-[#f7f6f6] ">
            {svg}
        </div>
        <div className="w-full flex items-baseline mt-[12px] pt-[20px] pb-[20px]">
          <span className="max-w-[4.25em] font-[600] font-inter w-full text-[24px] leading-[105%] text-nowrap whitespace-nowrap text-[#221d1d] tracking-[-0.48px]">
            {!percentage ? <>
              $<span className="justify-end font-regola w-[56px]">{amount}</span>B</> 
              :
              <>
              <span className="justify-end font-regola w-[56px]">{amount}</span>%
              </>
              }
            
          </span>
          <span className="font-inter text-[16px] leading-[135%] tracking-[-0.18px] text-[#221d1d] opacity-70">
            {description}
          </span>
        </div>
      </div>
    </>
  );
};

export default NumberCards;

