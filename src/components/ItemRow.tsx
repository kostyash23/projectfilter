import { FC } from "react"
import { Item } from "../type/Item";
import { columns } from "./columns";

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