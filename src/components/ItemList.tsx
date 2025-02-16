import { FC, useMemo, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { Item, SortDirection, SortField } from "../type/Item";
import ItemRow from "./ItemRow";
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

const ItemList: FC = () => {
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
            <TableHeaders
              headers={headers}
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSort}
          />
        </div>
        <div className="">
          {sortedData.map(el => <ItemRow key={el.id} item={el} />)}
        </div>
      </div>
    </div>
  )

}

export default ItemList;