import { StatusFilds } from "../../type/Item"

interface StatusBadgeProps {
    status: StatusFilds
  }
 
interface StatusBadgeProps {
  status: StatusFilds;
}

const StatusLabel = ({ status }: StatusBadgeProps) => {
  const statusConfig: Record<StatusFilds, { label: string; className: string }> = {
    [StatusFilds.DRAFT]: {
      label: "Draft",
      className: "bg-gray-light text-black",
    },
    [StatusFilds.ON_SALE]: {
      label: "On Sale",
      className: "bg-green-bg text-green",
    },
    [StatusFilds.SOLD_OUT]: {
      label: "Sold Out",
      className: "bg-red-bg text-red",
    },
    [StatusFilds.NOT_FOR_SALE]: {
      label: "Not for Sale",
      className: "bg-gray-dark text-gray",
    },
    [StatusFilds.ON_DIGITALIZATION]: {
      label: "On Digitalization",
      className: "bg-blue-bg text-blue",
    },
    [StatusFilds.READY_FOR_VERIFICATION]: {
      label: "Ready for Verification",
      className: "bg-orange-bg text-orange",
    },
    [StatusFilds.PUBLISHED]: {
      label: "Published",
      className: "bg-purple-100 text-purple-700",
    },
  };

  const config = statusConfig[status];

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