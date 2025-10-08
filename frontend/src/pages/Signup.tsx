import { Button } from "../components/Buttons";
import { Inputfield } from "../components/Inputfield";


export function Signup(){
    return <div className="h-screen w-screen items-center justify-center flex flex-col bg-slate-100 ">
        <div className="bg-white p-4 rounded-md">
            <div className="text-center font-bold pb-4">
                Signup
            </div>
            <div>
                <Inputfield placeholder="username" />
                <Inputfield placeholder="password" />
            </div>

            <div className="p-1">
                <Button title="Submit" variant="Primary" fullWidth={true} loading={false}/>
            </div>
        </div>
    </div>
}