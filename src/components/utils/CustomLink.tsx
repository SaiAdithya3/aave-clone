interface CustomLinkProps {
  title?: string;
  href?: string;
  color?: string;
  children?: React.ReactNode;
}

export const CustomLink = ({ title, color }: CustomLinkProps) => {
  return (
    <a
      className={`text-[${color}] font-[500] relative inline-flex items-center gap-1 group
                  after:content-[''] after:absolute after:-bottom-1 after:w-full after:h-[1.5px] 
                  after:bg-[linear-gradient(90deg,currentColor_33.33%,transparent_33.33%,transparent_66.66%,currentColor_66.66%)] 
                  after:bg-[length:300%_2px] after:bg-right-bottom after:bg-no-repeat 
                  after:opacity-40 hover:after:opacity-100 
                  after:transition-all after:duration-500 after:ease-in-out
                  hover:after:bg-left-bottom`}
      href="/faq"
    >
      <span>{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className=""
      >
        <path
          d="M3 8.5H12.5M12.5 8.5L8.5 4.5M12.5 8.5L8.5 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
};
