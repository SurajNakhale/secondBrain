import type { ReactElement } from "react";

interface Buttoninterface {
    title: string;
    variant: "Primary" | "Secondary";
    startIcon?: ReactElement;
    onClick?: ()=> void;
}


const variantclasses ={
    "Primary": "bg-blue-800 text-white",  
    "Secondary": "bg-blue-100 text-blue-800"
    
}

const defaultStyles = "px-3 py-2 rounded-md flex items-center justify-center gap-x-2 cursor-pointer";

export function Button({title , variant, startIcon, onClick}: Buttoninterface){
    return <button onClick={onClick} className={variantclasses[variant] + " " + defaultStyles}>
            {startIcon}
            {title}
            </button>
            
    
}


