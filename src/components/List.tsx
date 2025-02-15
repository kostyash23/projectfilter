import { FC, useMemo, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { Item, SortField } from "../type/Item";
import ItemList from "./ItemList";
import IconSort from "./ui/IconSort";

type SortDirection = "asc" | "desc"


const headers: { label: string; field: SortField }[] = [
  { label: "", field: "id" },
  { label: "Artwork Name", field: "artwork_name" },
  { label: "Artist Name", field: "artist_name" },
  { label: "Views", field: "views" },
  { label: "Years", field: "creation_year" },
  { label: "Status", field: "status" },
  { label: "Visibility", field: "visibility" },
  { label: "Price", field: "price" },
  { label: "Docs", field: "documents_number" },
  { label: "Updated", field: "date_updated" },
]

const List: FC = () => {
  const { data, loading, error } = useFetchData<Item>('/api_data.json');
  const [sortField, setSortField] = useState<SortField>('id')
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  const sortedData = useMemo(() => {
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
        aValue = a.status === "draft" ? "Hidden" : "Visible";
        bValue = b.status === "draft" ? "Hidden" : "Visible";
      }

      if (sortField === "date_updated") {
        const aDate = aValue ? Date.parse(aValue as string) : null;
        const bDate = bValue ? Date.parse(bValue as string) : null;

        if (aDate === null && bDate === null) return 0;
        if (aDate === null) return 1;
        if (bDate === null) return -1;

        return sortDirection === "asc" ? aDate - bDate : bDate - aDate;
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      return 0;
    });
  }, [data, sortField, sortDirection]);
  
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (

    <div className="w-full  font-inter p-6 ">
      <div className="max-w-7xl mx-auto">
        <div className=" rounded-lg px-[12px] py-[12px]">
          <div className="grid grid-cols-[48px,140px,200px,65px,65px,1.7fr,1fr,110px,1fr,1fr] gap-[17px] text-[14px] items-center">
            {headers.map(({ field, label }) => {
              return <div key={field} className="flex items-center text-sm font-medium text-gray">
                {label}
                {field !== 'id' && field !== 'documents_number' && (<span onClick={() => handleSort(field)}>
                  {sortField === field ?  <IconSort isActive={sortDirection !== "asc"} /> : (
                    <IconSort isActive={false} />
                  )}
                </span>) } 
              </div>
            })}
          </div>
        </div>
        <div className="">
          {sortedData.map(el => {
            return <ItemList key={el.id} item={el} />
          })}
        </div>
      </div>
    </div>
  )

}

export default List;