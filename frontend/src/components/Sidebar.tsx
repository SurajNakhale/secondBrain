import { Xicon } from "../icons/Xicon";
import { Yticon } from "../icons/Yticon";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../icons/Logo"
export function Sidebar(){
    return <div className="h-screen bg-white border-r-2 w-62 fixed border-gray-200">
        <div className="flex justify-start items-center p-4">
            <div className="text-blue-800">
                <Logo />
            </div>
            <div className="font-extrabold text-shadow-md text-md px-2">
                VaultEos
            </div>
        </div>
        <div className="mt-6">
        <SidebarItem text="Twitter" icon={<Xicon />} />
        <SidebarItem text="Youtube" icon={<Yticon />} />
        </div>
    </div>
}