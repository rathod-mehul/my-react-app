import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function PostComments() {
    const { id } = useParams();
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                console.log(data)
                console.log(data[0].email);
            });
    }, []);
    return (
        <div>
            {/* {data.title} */}
            {/* {data[0].email} */}
            email :   {data.length > 0 && data[0].email}
            <br /> body: {data.length > 0 && data[0].body}
            <br /> post id : {data.length > 0 && data[0].postId}
        </div>
    )
}