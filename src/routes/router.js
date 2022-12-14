import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Category from "../Components/Category/Category";
import Checkout from "../Components/Checkout/Checkout";
import CourseDetail from "../Components/CourseDetail/CourseDetail";
import Courses from "../Components/Courses/Courses";
import ErrorPage from "../Components/ErrorPage";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Main from "../Components/layout/Main";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                    return fetch(`https://edemy-server-kohl.vercel.app/category/${params.id}`)
                },
                element: <Category></Category>

            },
            {
                path: '/courses',
                loader: ()=>fetch('https://edemy-server-kohl.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({params})=>fetch(`https://edemy-server-kohl.vercel.app/course/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            

        ]
    },

    {
        path: '/checkout/:course_id',
        loader: ({params})=>fetch(`https://edemy-server-kohl.vercel.app/course/${params.course_id}`),
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
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