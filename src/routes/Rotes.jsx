
import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EventDetail from "../pages/EventPage/EventDetail";
import PrivetRouts from "./PrivetRouts";
import Sponsor from "../pages/Sponsor/Sponsor";

import Speakers from "../pages/Speakers/Speakers";
import Events from "../pages/Events/Events";
import Blogs from "../pages/Blogs/Blogs";



const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path:'/event/:id',
                element: <PrivetRouts>
                    <EventDetail></EventDetail>
                    </PrivetRouts>,
                loader:() => fetch('/eventDetails.json')
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/sponsors',
                element:<Sponsor></Sponsor>
            },
           
            {
                path:'/speakers',
                element:<Speakers></Speakers>
            },
            {
                path:'/events',
                element:<Events></Events>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
]);

export default routes;