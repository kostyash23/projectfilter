import { FC } from "react";
import { SortField, SortDirection } from "../type/Item";
import IconSort from "./ui/IconSort";

interface TableHeadersProps {
  headers: { label: string; field: SortField }[];
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

const TableHeaders: FC<TableHeadersProps> = ({ headers, sortField, sortDirection, onSort }) => {
  return (
    <div className="grid grid-cols-[48px,140px,200px,65px,65px,1.7fr,1fr,110px,1fr,1fr] gap-[17px] text-[14px] items-center">
      {headers.map(({ field, label }) => {
        return (
          <div key={field} className="flex items-center text-sm font-medium text-gray">
            {label}
            {field !== 'id' && field !== 'documents_number' && (
              <span onClick={() => onSort(field)}>
                {sortField === field ? (
                  <IconSort isActive={sortDirection !== SortDirection.ASC} />
                ) : (
                  <IconSort isActive={false} />
                )}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TableHeaders;
