import { FC } from "react"

interface IconSortProps {
  isActive: boolean;
}
const IconSort: FC<IconSortProps> = ({ isActive }) => {
  return (
    <div
      className="inline-block cursor-pointer  ml-[5px]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" className="pt-[2px]">
        <path
          className={`transition-transform duration-300 origin-left ${isActive ? "scale-x-[1.8]" : "scale-x-[1]"}`}
          d="M1 1.40078H7V0.800781H1V1.40078Z"
          fill="#525252"
          stroke="#525252"
          strokeWidth="0.5"
        />
        <path
          className="transition-transform duration-300"
          d="M1 5.60078H10V5.00078H1V5.60078Z"
          fill="#525252"
          stroke="#525252"
          strokeWidth="0.5"
        />
        <path
          className={`transition-transform duration-300 origin-left ${isActive ? "scale-x-[0.4]" : "scale-x-[1]"}`}
          d="M1 9.80078H13V9.20078H1V9.80078Z"
          fill="#525252"
          stroke="#525252"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  )
}

export default IconSort