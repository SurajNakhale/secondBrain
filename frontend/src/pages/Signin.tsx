import { useRef } from "react";
import { Button } from "../components/Buttons";
import { Inputfield } from "../components/Inputfield";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";


export function Signin(){
        const usernameRef = useRef<HTMLInputElement>(null);
        const passwordRef = useRef<HTMLInputElement>(null);
    
        const navigate = useNavigate();
    
        async function signin(){
            const username = usernameRef.current?.value;
            const password = passwordRef.current?.value;
           const response =  await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
                username,
                password
            })
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/Dashboard");
            
            alert("you are signin")
            
        }
    return <div className="h-screen w-screen items-center justify-center flex flex-col bg-slate-100 ">
        <div className="bg-white p-4 rounded-md">
            <div className="text-center font-bold pb-4">
                Signin
            </div>
            <div>
                <Inputfield reference={usernameRef} placeholder="username" />
                <Inputfield reference={passwordRef} placeholder="password" />
            </div>

            <div className="p-1">
                <Button onClick={signin} title="Submit" variant="Primary" fullWidth={true} />
            </div>
        </div>
    </div>
}