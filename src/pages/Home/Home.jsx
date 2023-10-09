import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";

import Navbar from "../shared/Navbar/Navbar";
import EventCard from "./EventCard";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Home = () => {
    const { Loading} = useContext(AuthContext)
    const events = useLoaderData();
    if(Loading){
        return  <div className="flex justify-center my-20 items-center text-center gap-2">
            <p className="text-lg">LOADING</p>
            <span  className="loading loading-spinner loading-sm"></span>
            
        </div>
    }
    return (
        <div>
            
            
            <Navbar></Navbar>
            
            <Header></Header>
            
            <div className="grid grid-cols-1 lg:gap-1">
                
                <div className=" ">
                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 p-3 ">
                  {
                    events.map(event => <EventCard
                    key={event.id}
                    events ={event}
                    ></EventCard>)
                   }
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Home;