import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Singleblog from "./components/Pages/Singleblog";
import AddBlog from "./components/Blogs/AddBlog";

const Router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/archive',
        element: <Archive />
    },
    {
        path: 'blogs',
        element: <Blogs />
    },
    {
        path: '/addBlog',
        element: <AddBlog />
    },
    {
        path: 'contact',
        element: <Contact />
    },
    {
        path: '/pages/singleblog',
        element: <Singleblog />
    }
    
])
export default Router;