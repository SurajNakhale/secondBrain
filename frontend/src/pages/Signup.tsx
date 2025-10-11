import { useRef } from "react";
import { Button } from "../components/Buttons";
import { Inputfield } from "../components/Inputfield";
import { BACKEND_URL } from "../../config";

import axios from "axios"
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
            username,
            password
        })

        navigate("/signin");
        
        alert("you are signup")
        
    }
    return <div className="h-screen w-screen items-center justify-center flex flex-col bg-slate-100 ">
        <div className="bg-white p-4 rounded-md">
            <div className="text-center font-bold pb-4">
                Signup
            </div>
            <div>
                <Inputfield reference={usernameRef} placeholder="username" />
                <Inputfield reference={passwordRef} placeholder="password" />
            </div>

            <div className="p-1">
                <Button onClick={signup} title="Submit" variant="Primary" fullWidth={true} loading={false}/>
            </div>
        </div>
    </div>
}