
interface inputProps {
    placeholder: string;
    reference?: any ;
}

export function Inputfield({placeholder, reference}: inputProps){
    return <div>
        <input ref={reference} type="text" className="px-4 py-2 border rounded-md m-1.5" placeholder={placeholder} />
    </div>
} 