import { Item, SortDirection, SortField, StatusFilds } from "../type/Item";


export function sortData(
  data: Item[],
  sortField: SortField,
  sortDirection: SortDirection
): Item[] {
  return [...data].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === "views") {
      aValue = a.views || 0; 
      bValue = b.views || 0;
    } else if (sortField === "status") {
      aValue = a.status || "";
      bValue = b.status || "";
    } else if (sortField === "visibility") {
      aValue = a.status === StatusFilds.DRAFT ? "Hidden" : "Visible";
      bValue = b.status === StatusFilds.DRAFT ? "Hidden" : "Visible";
    }

    if (sortField === "date_updated") {
      const aDate = aValue ? Date.parse(aValue as string) : null;
      const bDate = bValue ? Date.parse(bValue as string) : null;

      if (aDate === null && bDate === null) return 0;
      if (aDate === null) return 1;
      if (bDate === null) return -1;

      return sortDirection === SortDirection.ASC ? aDate - bDate : bDate - aDate;
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === SortDirection.ASC ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === SortDirection.ASC
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });
}
