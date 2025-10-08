import { Crossicon } from "../icons/Crossicon"
import { Button } from "./Buttons"
import { Inputfield } from "./Inputfield"

export function CreateContentModal({open, onClose}: any){
    return <div>
        {open && <div className="w-screen h-screen fixed bg-slate-800 opacity-40 flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-md opacity-100">

                        {/* crossiocn  */}
                        <div className="flex justify-end pt-2 px-2 ">
                            <div className="cursor-pointer" onClick={onClose}>
                            <Crossicon />
                            </div>
                        </div>

                        {/* inputfield  */}
                        <div className="py-1 px-6">
                            <Inputfield placeholder="Enter Title" />
                            <Inputfield placeholder="Enter Link" />
                        </div>

                        {/* butttonfield */}
                        <div className="flex justify-center pb-3">
                            <Button title="Submit" variant="Primary"  />
                        </div>  
                    </div>
                </div>
            </div>}



    </div>
}