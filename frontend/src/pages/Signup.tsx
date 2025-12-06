import { useRef } from "react";
import { Button } from "../components/Buttons";
import { Inputfield } from "../components/Inputfield";
import { BACKEND_URL } from "../../config";

import axios from "axios"
import { useNavigate } from "react-router-dom";
import { FloatingIcons } from "../components/FloatingIcons";

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
             <FloatingIcons />
        <div className="bg-white p-4 rounded-md border border-gray-200 ">
            <div className="text-center font-bold pb-4 text-2xl tracking-tighter">
                Sign up
            </div>
            <div className="">
                <div className="font-tight text-sm">
                    <div className="pl-3">
                      Username
                    </div>
                    <Inputfield reference={usernameRef} placeholder="username" />      
                </div>
                    
                <div className="font-tight text-sm mt-3">
                    <div className="pl-3">
                      Password
                    </div>
                    <Inputfield reference={passwordRef} placeholder="password" />
                </div> 
            </div>

            <div className="px-3 mt-4">
                <Button onClick={signup} title="Sign up" variant="Primary" fullWidth={true} loading={false}/>
            </div>

           <div className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <button 
                    onClick={() => navigate("/signin")} 
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-all"
                >
                    Sign in
                </button>
            </div>
        </div>
    </div>
}