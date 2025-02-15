interface VisibilityLabelProps {
  isVisible: boolean
}

const VisibilityLabel = ({ isVisible }: VisibilityLabelProps) => {

  if (isVisible) {
    return (
      <div className="flex items-center text-green font-normal bg-green-bg px-[8px] py-[4px] rounded-md text-[12px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-[8px]">
          <g clip-path="url(#clip0_522_40)">
            <path d="M8 3.5C3 3.5 1 8 1 8C1 8 3 12.5 8 12.5C13 12.5 15 8 15 8C15 8 13 3.5 8 3.5Z" stroke="#065F46" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="#065F46" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_522_40">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Visible
      </div>
    )
  }
  return (
    <div className="flex items-center text-black-semi bg-black-semibg px-[8px] py-[4px] rounded-md text-[12px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14" fill="none" className="mr-[8px]">
        <g clip-path="url(#clip0_522_31)">
          <path d="M2.625 2.18739L11.375 11.8124" stroke="#1E293B" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.47161 8.61841C8.04229 9.00872 7.47551 9.21249 6.89595 9.1849C6.31639 9.15731 5.77152 8.90062 5.38122 8.4713C4.99092 8.04198 4.78714 7.4752 4.81473 6.89564C4.84232 6.31608 5.09901 5.77122 5.52833 5.38091" stroke="#1E293B" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.41016 4.85156C7.87522 4.94062 8.29883 5.17818 8.61735 5.52855C8.93587 5.87892 9.1321 6.32319 9.17656 6.79461" stroke="#1E293B" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.4065 9.24754C12.5987 8.18004 13.1231 6.99988 13.1231 6.99988C13.1231 6.99988 11.3731 3.06238 6.99812 3.06238C6.61926 3.06187 6.241 3.0926 5.86719 3.15426" stroke="#1E293B" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.04688 3.75195C1.81727 4.8807 0.875 7.00039 0.875 7.00039C0.875 7.00039 2.625 10.9379 7 10.9379C8.02512 10.9459 9.03742 10.7097 9.95312 10.2488" stroke="#1E293B" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_522_31">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Hidden
    </div>
  )
}

export default VisibilityLabel