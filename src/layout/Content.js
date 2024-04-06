import React from "react";
import Route1 from "../practice_folder/Router/Route1";
import Dashboard from "../content/Dashboard";
import User2 from "../practice_folder/Router/User2";
import { Route, Router, Routes, Switch } from 'react-router-dom'
import UserDetails from "../practice_folder/Router/UserDetails";
import FormValidationDemo from "../practice_folder/FormValidationDemo";
import HttpRequestComponent from "../practice_folder/http_requests/HttpRequestComponent";
import Post from "../practice_folder/http_requests/Post";
import PostComments from "../practice_folder/http_requests/PostComments";
import Name from "../practice_folder/Redux/Name";

export default function Content() {
    return (
        <main style={{ marginTop: "58px" }}>
            <div className="container pt-4">
                <Routes>
                    <Route path="*" element={<Route1 />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/user2" element={<User2 />} />
                    <Route path="/posts" element={<HttpRequestComponent />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/post/:id/comments" element={<PostComments />} />
                    <Route path="users/:id" element={<UserDetails />} />
                    <Route path="/form-validation" element={<FormValidationDemo />} />
                    <Route path="/Name" element={<Name />}></Route>

                </Routes>
            </div>
        </main>
    )
}