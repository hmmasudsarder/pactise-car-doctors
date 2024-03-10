import Login from "../Components/Login/Login";
import SignUP from "../Components/SignUP/SignUP";
import Main from "../Layour/Main";
import Home from "../Pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: "/signUp",
                element: <SignUP/>
            }
        ]
    }
])

export default router;