import React from "react";
import Route1 from "../practice_folder/Router/Route1";
import Dashboard from "../content/Dashboard";
import User from "../practice_folder/Router/User";
import { Route, Router, Routes, Switch } from 'react-router-dom'
import UserDetails from "../practice_folder/Router/UserDetails";
import FormValidationDemo from "../practice_folder/FormValidationDemo";

export default function Content() {
    return (
        <main style={{ marginTop: "58px" }}>
            <div className="container pt-4">
            <Routes>
                <Route path="*" element={<Route1/>}/>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="user" element={<User/>}/>
                <Route path="users/:id" element={<UserDetails/>}/>
                <Route path="/form-validation" element={<FormValidationDemo />} />
            </Routes>
            </div>
        </main>
    )
}