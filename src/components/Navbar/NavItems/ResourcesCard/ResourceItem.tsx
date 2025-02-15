// First, create a new component for each resource item
interface ResourceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ResourceItem = ({ icon, title, description }: ResourceItemProps) => (
  <div className="flex gap-3 p-2 rounded-lg hover:bg-[#221d1d08] transition-all duration-200">
    <div className="logo">
      {icon}
    </div>
    <div className="content flex font-inter flex-col gap-1">
      <h1 className="text-[15px] font-semibold">{title}</h1>
      <p className="text-sm text-[#221d1d99]">{description}</p>
    </div>
  </div>
);