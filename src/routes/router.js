import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Category from "../Components/Category/Category";
import Checkout from "../Components/Checkout/Checkout";
import CourseDetail from "../Components/CourseDetail/CourseDetail";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Main from "../Components/layout/Main";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

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
                path: '/course/:id',
                loader: ({params})=>fetch(`http://localhost:5000/course/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            

        ]
    },

    {
        path: '/checkout/:course_id',
        loader: ({params})=>fetch(`http://localhost:5000/course/${params.course_id}`),
        element: <Checkout></Checkout>
    },
    
    {
        path: '/',
        element: <Home></Home>
    },

    {
        path: '/blogs',
        element:<Blogs></Blogs>
    }, 
    {
        path: '/faq',
        element: <Faq></Faq>
    }, 
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Signup></Signup>
    }
])