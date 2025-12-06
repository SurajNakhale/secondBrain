import { useRef } from "react";
import { Button } from "../components/Buttons";
import { Inputfield } from "../components/Inputfield";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { FloatingIcons } from "../components/FloatingIcons";


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
    return <div className="h-screen w-screen items-center justify-center flex flex-col bg-slate-100 relative">
        <FloatingIcons />
        
        <div className="bg-white p-4 rounded-md border border-gray-200 relative z-10">
            <div className="text-center font-bold pb-4 text-2xl tracking-tighter">
                Welcome Back
            </div>
            <div>
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
                <Button onClick={signin} title="Sign in" variant="Primary" fullWidth={true} />
            </div>

            <div className="text-center mt-4 text-sm text-gray-600">
                Don't have an account?{" "}
                <button 
                    onClick={() => navigate("/")} 
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-all"
                >
                    Sign up
                </button>
            </div>
        </div>
    </div>
}