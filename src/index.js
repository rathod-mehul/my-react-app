import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './content/Dashboard';
import Home from './practice_folder/Router/Home';
import Route1 from './practice_folder/Router/Route1';
import Route2 from './practice_folder/Router/Route2';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "/route-1",
//     element: <Route1/>,
//   },
//   {
//     path: "/route-2",
//     element: <Route2/>,
//   }
// ]);


root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
  // <BrowserRouter>
  // <App/>
  // </BrowserRouter>

//   <React.StrictMode>
//   <RouterProvider router={router} />
// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
