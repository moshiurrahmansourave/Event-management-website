
import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EventDetail from "../pages/EventPage/EventDetail";
import PrivetRouts from "./PrivetRouts";


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
            }
        ]
    }
]);

export default routes;