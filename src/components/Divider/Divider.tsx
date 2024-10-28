import React from "react"

interface DividerProps{
    text?:string
}

const Divider:React.FC<DividerProps> = ({text}) => {
    return (
        <div className="flex gap-1 items-center text-[rgba(255,255,255,0.37)]">
            <div className="h-[1px] w-full flex-1 bg-[rgba(255,255,255,0.37)]"></div>
            {text}
            <div className="h-[1px] w-full flex-1 bg-[rgba(255,255,255,0.37)]"></div>
        </div>
    )   
}

export default Divider;