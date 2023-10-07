import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import EventCard from "./EventCard";


const Home = () => {
    const events = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            
            <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-1">
                <div className="col-span-1 ">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-3 ">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 p-3">
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