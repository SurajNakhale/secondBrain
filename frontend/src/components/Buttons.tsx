import type { ReactElement } from "react";

interface Buttoninterface {
    title: string;
    variant: "Primary" | "Secondary";
    startIcon?: ReactElement;
    onClick?: ()=> void;
    fullWidth?: boolean; 
    loading?: boolean;
}


const variantclasses ={
    "Primary": "bg-blue-800 text-white hover:bg-blue-900",  
    "Secondary": "bg-blue-100 text-blue-800 hover:bg-blue-200"
    
}

const loadingclasses ={
    "Primary": "bg-blue-800 text-white hover:bg-blue-900",
    "Secondary": "bg-blue-100 text-blue-800 hover:bg-blue-200"
}


const defaultStyles = "px-3 py-2 rounded-md flex items-center justify-center gap-x-2 cursor-pointer";

export function Button({title , variant, startIcon, onClick, fullWidth, loading}: Buttoninterface){
    return <button onClick={onClick} className={`${ loading ? loadingclasses[variant] : variantclasses[variant]} ${defaultStyles} ${fullWidth ? "w-full" : ""}`}>
            {startIcon}
            {title}
            {loading && (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 ml-2"/>
            )}
            </button>
            
    
}


