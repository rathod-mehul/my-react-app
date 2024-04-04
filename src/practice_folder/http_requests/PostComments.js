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
            <div className='m-5'>
                <span className='border border-1 border-danger bg-success text-light p-2'> email :</span>   {data.length > 0 && data[0].email}
            </div>
            <div className='m-5'>
                <br /><span className='border border-1 border-danger bg-success text-light p-2'> body :</span> {data.length > 0 && data[0].body}
            </div>
            <div className='m-5'>
                <br /> <span className='border border-1 border-danger bg-success text-light p-2'> post id :</span> {data.length > 0 && data[0].postId}
            </div>

        </div>
    )
}