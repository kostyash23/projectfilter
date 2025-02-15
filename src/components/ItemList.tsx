import { FC } from "react"
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import { Item } from "../type/Item";
import VisibilityLabel from "./ui/VisibilityLabel";
import StatusLabel from "./ui/statusLabel";
import DocumentLabel from "./ui/DocumentLabel";


interface ItemListProps {
    item: Item;
}

const ItemList: FC<ItemListProps> = ({ item }) => {

    const { main_photo, artwork_name, artist_name, creation_year, status, documents_number, date_updated, price, has_notifications } = item;
    return (
        <div className="bg-gray-bg  rounded-lg shadow-sm hover:shadow-md hover:bg-gray-hover cursor-pointer transition-shadow duration-200 mb-[4px]">
            <div className=" px-[12px] py-[12px]">
                <div className="grid grid-cols-[48px,140px,200px,65px,65px,1.7fr,1fr,110px,1fr,1fr] gap-[17px] items-center text-black">
                    <div className="relative w-12 h-12">
                        <img className="h-full w-full rounded object-cover" src={`/src/assets/images/${main_photo.transformations[0].filename_disk}`} alt="" onError={(e) => {
                            (e.target as HTMLImageElement).src = '/src/assets/images/placeholder.svg';
                        }} />
                    </div>
                    <div className="text-sm text-left  font-medium text-black truncate ">{artwork_name}</div>
                    <div className="text-sm text-left  flex items-center gap-[5px] font-medium text-black truncate">{artist_name} {has_notifications && (
                        <span className="  block h-2 w-2 ml- rounded-full bg-[#818CF8]  " />
                    )}</div>
                    <div className="text-sm text-left font-medium  text-black">1,789</div>
                    <div className="text-sm text-left font-medium text-black ">{creation_year}</div>
                    <div className="text-left text-black">
                        <span className="px-2  inline-flex text-xs leading-5 font-medium rounded-full ">
                            {<StatusLabel status={status} />}
                        </span>
                    </div>
                    <div className="text-left text-black">
                        <VisibilityLabel isVisible={status === "draft"} />
                    </div>
                    <div className="text-sm text-left font-medium text-black">{formatCurrency(price)}</div>
                    <div className="text-left text-black">
                        {<DocumentLabel documentsNumber={documents_number} />}
                    </div>
                    <div className="text-sm text-left text-black font-medium" >{formatDate(date_updated)}</div>
                </div>
            </div>
        </div>


    )
}

export default ItemList;