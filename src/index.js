import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {createBrowserRouter,
        RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from './ErrorPage';
import Contact from './routes/Contact';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"contacts/:contactId",
        element:<Contact/>,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

