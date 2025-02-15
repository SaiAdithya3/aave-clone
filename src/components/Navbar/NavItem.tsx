import { useState, useRef, useEffect } from "react";

interface NavItemProps {
  title: string;
  content: React.ReactNode;
}

export default function NavItem({ title, content }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="font-inter px-[16px] py-[9px] text-sm font-[500] leading-[105%] text-[#221d1d] bg-transparent hover:bg-[#221d1d08] rounded-[50px] cursor-default">
        {title}
      </h1>
      {isHovered && (
        <div
          className="absolute left-1/2 -translate-x-1/2 min-w-max"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-[7.5px] w-4 h-4 rotate-45 z-[10] bg-white border-t border-l border-[#00000010]" />
          <div className="mt-4 opacity-0 animate-dropdown">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}
