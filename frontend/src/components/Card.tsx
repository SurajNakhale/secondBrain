
import { Xicon } from "../icons/Xicon"
import { Shareicon } from "../icons/Shareicon"
import { Deleteicon } from "../icons/Deleteicon"
import { Yticon } from "../icons/Yticon"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";

interface cardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube"
}


export function Card({title, link, type}: cardProps){
const navigate = useNavigate();

    async function handleDelete(){
        const token = localStorage.getItem("token");
        if(!token){
            alert("please login first");
            navigate("/");
            return;
        }

         try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/content/${title}`);
            // Handle successful response (e.g., remove content from the UI)
            if(response.status == 200){
                console.log("content deleted successfully");
            }
        } catch (error) {
            console.error("Error deleting content:", error);
            alert("Something went wrong while deleting the content.");
        }
    }

    return <div >
        <div className=" px-4 py-2 max-w-72 rounded-md border-2 bg-white border-gray-100">

        <div className="flex justify-between">
            <div className="flex items-center gap-2 font-normal">
                <div className="text-gray-400">
                    {type === "twitter" && <Xicon />}
                    {type === "youtube" && <Yticon />}
                </div>
                {title}
            </div>
            <div className="flex items-center gap-4 text-gray-400">
                <a href={link} target="_blank">
                <Shareicon />
                </a>
                <div onClick={handleDelete}>
                <Deleteicon/>
                </div>
                
            </div>
        </div>

        <div className="pt-5 pb-2">
            {type === "youtube" && 
            <iframe className="w-full" width="560" height="315" 
                src={link.replace("watch", "embed").replace("?v=", "/")} 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>}
        
            {type === "twitter" &&  
            <blockquote className="twitter-tweet">
                <a href={link}></a> 
            </blockquote>}

            
        </div>
        </div>

    </div>
}