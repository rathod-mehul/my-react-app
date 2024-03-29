import React, {useState, useEffect, Fragment} from "react";

export default function PostRequestComponent(){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method: "POST",
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Handle data
        })
        .catch((err) => {
            console.log(err.message);
        });
    } ,[]);

    return(
        <div>  
            post , put and delate Request
        </div>
    )
}