import { FC, useMemo, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { Item, SortDirection, SortField, StatusFilds } from "../type/Item";
import ItemList from "./ItemList";
import IconSort from "./ui/IconSort";
import { sortData } from "../utils/sortData";
import TableHeaders from "./TableHeaders";




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
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.ASC)

  const sortedData = useMemo(() => {
    return sortData(data, sortField, sortDirection);
  }, [data, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(
        sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC
      );
    } else {
      setSortField(field);
      setSortDirection(SortDirection.ASC);
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (

    <div className="w-full  font-inter p-6 ">
      <div className="max-w-7xl mx-auto">
        <div className=" rounded-lg px-[12px] py-[12px]">
          <div className="grid grid-cols-[48px,140px,200px,65px,65px,1.7fr,1fr,110px,1fr,1fr] gap-[17px] text-[14px] items-center">
            <TableHeaders
              headers={headers}
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          </div>
        </div>
        <div className="">
          {sortedData.map(el => <ItemList key={el.id} item={el} />)}
        </div>
      </div>
    </div>
  )

}

export default List;