import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";

export function useContent(){
    const [contens, setContents] = useState([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/contents`,{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        }).
        then((response)=>{
            setContents(response.data.content);
        })
    }, [])

    return contens;
}