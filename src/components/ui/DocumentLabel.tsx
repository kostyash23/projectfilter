interface DocsBadgeProps {
    documentsNumber: number
}
const DocumentLabel = ({ documentsNumber }: DocsBadgeProps) => {
    if (documentsNumber === 0) {
        return <span className="text-sm text-gray bg-gray-dark px-[8px]  rounded-md py-[4px]">No Docs</span>
    }
    return (
        <div className="flex items-center gap-1 text-sm justify-center  rounded-md text-center px-[8px] w-min py-[4px] text-indigo font-normal bg-indigo-bg ">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>
            <span>{documentsNumber}</span>
        </div>
    )
}

export default DocumentLabel