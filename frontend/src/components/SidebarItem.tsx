import type { ReactElement } from "react"

interface sidebarprops{
    icon: ReactElement;
    text: string;
}

export function SidebarItem({icon, text}: sidebarprops){
    return <div className="flex items-center hover:bg-slate-100 hover:border-slate-500 hover:border-r">
        <div className="pl-5">
            {icon}  
        </div>
        <div className="py-1 px-4 text-gray-500 ">
            {text}
        </div>
    </div>
}