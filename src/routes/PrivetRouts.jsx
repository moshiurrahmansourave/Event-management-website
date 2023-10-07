
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";


const PrivetRouts = ({children}) => {
    const {user, Loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location.pathname)


    if(Loading){
        return  <div className="flex justify-center my-20 items-center text-center gap-2">
            <p className="text-lg">LOADING</p>
            <span  className="loading loading-spinner loading-sm"></span>
            
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRouts;