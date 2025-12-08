
interface inputProps {
    placeholder: string;
    reference?: any ;
}

export function Inputfield({placeholder, reference}: inputProps){
    return <div>
        <input ref={reference} type="text" className=" outline-none bg-transparent shadow-none border px-4 py-2 rounded-md m-3" placeholder={placeholder} />
    </div>
} 