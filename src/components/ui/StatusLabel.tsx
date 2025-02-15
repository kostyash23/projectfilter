import { Item } from "../../type/Item"

interface StatusBadgeProps {
    status: Item["status"];
  }
  
  const StatusLabel = ({ status }: StatusBadgeProps) => {

    const statusConfig: Record<string, { label: string; className: string }> = {
      draft: {
        label: "Draft",
        className: "bg-gray-light text-black",
      },
      on_sale: {
        label: "On Sale",
        className: "bg-green-bg text-green",
      },
      on_digitalization: {
        label: "On Digitalization",
        className: "bg-blue-bg text-blue",
      },
      ready_for_verification: {
        label: "Ready for Verification",
        className: "bg-orange-bg text-orange",
      },
      published: {
        label: "Published",
        className: "bg-purple-100 text-purple-700",
      },
    
    };
    
    const config = status && statusConfig[status];

    if (!config) return null;
  
    return (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-normal ${config.className}`}
      >
        {config.label}
      </span>
    );
  };
  
  export default StatusLabel;