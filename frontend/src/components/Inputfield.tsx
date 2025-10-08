
interface inputProps {
    placeholder: string;
    onChange?: ()=> void;
}

export function Inputfield({placeholder, onChange}: inputProps){
    return <div>
        <input type="text" className="px-4 py-2 border rounded-md m-1.5" placeholder={placeholder} onChange={onChange}/>
    </div>
} 