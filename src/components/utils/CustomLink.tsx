import Link from "next/link";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

export const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <Link 
      href={href}
      className="group relative my-8 flex w-fit items-center gap-1 font-inter text-base font-medium leading-none tracking-[-.18px] text-[#221d1d] no-underline pb-2 
      before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-full before:bg-gradient-to-r before:from-current before:via-transparent before:to-current before:bg-[length:300%_2px] before:bg-right-bottom before:bg-no-repeat before:opacity-90 before:transition-all before:duration-300 before:ease-in-out hover:before:bg-left-bottom"
    >
      {children}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="none"
      >
        <path 
          d="M3 8.5H12.5M12.5 8.5L8.5 4.5M12.5 8.5L8.5 12.5" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};