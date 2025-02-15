import { ResourceItem } from './ResourceItem';
import { BrandIcon /* import other icons */ } from './ResourceIcons';

const ResourcesCard = () => {
  const resources = [
    {
      icon: <BrandIcon />,
      title: "Brand",
      description: "Assets, examples and guides."
    },
    // Add other resources here
  ];

  return (
    <div className="flex gap-4 w-[575.531px] h-[277.59px] rounded-[16px] p-4 overflow-hidden relative bg-white shadow-[0_6px_20px_0_rgba(0,0,0,.05),0_0_0_1px_rgba(0,0,0,.06)]">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col gap-2">
        {resources.map((resource, index) => (
          <ResourceItem
            key={index}
            icon={resource.icon}
            title={resource.title}
            description={resource.description}
          />
        ))}
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 flex items-center justify-center">
        <svg
          className="w-64 h-64"
          style={{ overflow: "hidden" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          fill="none"
        >
          {/* Your existing SVG paths */}
        </svg>
      </div>
    </div>
  );
};

export default ResourcesCard;