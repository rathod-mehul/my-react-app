import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
export default function HttpRequestComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((res) => {
            return res.json();
        })
            .then((data) => {
                setData(data);
            });
    }, []);
    return (
<Fragment>
    <table className="table">
        <thead>
            <tr>
                <td>id</td>
                <td>user id</td>
                <td>title</td>
                <td>body</td>
                <td>view post</td>
            </tr>
        </thead>
        <tbody>
            {data.map((data)=>(
                    <Fragment>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                            <td>
                                <Link to={`/post/${data.id}`}>
                                see post
                                </Link>
                            </td>
                        </tr>
                    </Fragment>
            ))}
        </tbody>
    </table>
</Fragment>

        )
}