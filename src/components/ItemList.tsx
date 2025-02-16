import { FC, JSX } from "react"
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import { Item, StatusFilds } from "../type/Item";
import VisibilityLabel from "./ui/VisibilityLabel";
import DocumentLabel from "./ui/DocumentLabel";
import StatusLabel from "./ui/StatusLabel";


interface ColumnConfig {
    key: string; // унікальний ключ (для .map)
    className?: string; // додатковий клас, якщо треба
    render: (item: Item) => JSX.Element | string | number;
}

// Приклад конфігурації
const columns: ColumnConfig[] = [
    {
        key: "photo",
        render: (item) => (
            <div className="relative w-12 h-12">
                <img
                    className="h-full w-full rounded object-cover"
                    src={`/src/assets/images/${item.main_photo.transformations[0].filename_disk}`}
                    alt=""
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "/src/assets/images/placeholder.svg";
                    }}
                />
            </div>
        ),
    },
    {
        key: "artwork_name",
        render: (item) => (
            <div className="text-sm text-left font-medium text-black truncate ">
                {item.artwork_name}
            </div>
        ),
    },
    {
        key: "artist_name",
        render: (item) => (
            <div className="text-sm text-left flex items-center gap-[5px] font-medium text-black truncate">
                {item.artist_name}{" "}
                {item.has_notifications && (
                    <span className="block h-2 w-2 rounded-full bg-[#818CF8]" />
                )}
            </div>
        ),
    },
    {
        key: "views",
        render: () => (
            <div className="text-sm text-left font-medium text-black">1,789</div>
        ),
    },
    {
        key: "creation_year",
        render: (item) => (
            <div className="text-sm text-left font-medium text-black">
                {item.creation_year}
            </div>
        ),
    },
    {
        key: "status",
        render: (item) => (
            <div className="text-left text-black">
                <span className="px-2  inline-flex text-xs leading-5 font-medium rounded-full ">
                    {<StatusLabel status={item.status} />}
                </span>
            </div>
        ),
    },
    {
        key: "visibility",
        render: (item) => (
            <div className="text-left text-black">
                <VisibilityLabel isVisible={item.status === StatusFilds.DRAFT} />
            </div>
        ),
    },
    {
        key: "price",
        render: (item) => (
            <div className="text-sm text-left font-medium text-black">
                {formatCurrency(item.price)}
            </div>
        ),
    },
    {
        key: "documents_number",
        render: (item) => (
            <div className="text-left text-black">
                <DocumentLabel documentsNumber={item.documents_number} />
            </div>
        ),
    },
    {
        key: "date_updated",
        render: (item) => (
            <div className="text-sm text-left text-black font-medium">
                {formatDate(item.date_updated)}
            </div>
        ),
    },
];

interface ItemListProps {
    item: Item;
}

const ItemList: FC<ItemListProps> = ({ item }) => {

    return (
        <div className="bg-gray-bg  rounded-lg shadow-sm hover:shadow-md hover:bg-gray-hover cursor-pointer transition-shadow duration-200 mb-[4px]">
            <div className=" px-[12px] py-[12px]">
                <div className="grid grid-cols-[48px,140px,200px,65px,65px,1.7fr,1fr,110px,1fr,1fr] gap-[17px] items-center text-black">
                    {columns.map((col) => (
                        <div key={col.key}>{col.render(item)}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemList;