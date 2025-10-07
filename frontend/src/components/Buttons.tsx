interface Buttoninterface {
    title: string;
    size: "lg" | "md" | "sm";


}


const sizeStyles ={
    "lg": "px-16 py-4 text-xl",
    "md": "px-6 py-3 text-md",
    "sm": "px-4 py-2 text-sm"
}
export function Button(props: Buttoninterface){
        return <button className={sizeStyles[props.size] + " bg-red-400" + " rounded-md" + " mx-1"}>
            {props.title}
            </button>
    
}


