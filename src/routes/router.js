import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Category from "../Components/Category/Category";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({params})=>{
                    return fetch(`http://localhost:5000/category/${params.id}`)
                },
                element: <Category></Category>

            },
            {
                path: '/courses',
                loader: ()=>fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            }, 
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])