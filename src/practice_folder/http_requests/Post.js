import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Post() {
    const { id } = useParams();
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                console.log(data)
            });
    }, []);
    return (
        <div>
            {data.title}
        </div>
    )
}