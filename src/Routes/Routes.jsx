import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
            index: true, 
            Component: Home
            }, 
            {
            path: '/home', 
            Component: Home
            }, 
            
    ]
    }
])