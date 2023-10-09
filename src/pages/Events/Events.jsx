import { FaCalendarAlt } from "react-icons/fa";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import events_1 from '../../assets/events_1.jpg'
import events_2 from '../../assets/events_2.jpg'
import events_3 from '../../assets/events_3.jpg'
import events_4 from '../../assets/events_4.jpg'
import events_5 from '../../assets/events_5.jpg'
import events_6 from '../../assets/events_6.jpg'
import events_7 from '../../assets/events_7.jpg'

const Events = () => {
    const { Loading} = useContext(AuthContext)
    if(Loading){
        return  <div className="flex justify-center my-20 items-center text-center gap-2">
            <p className="text-lg">LOADING</p>
            <span  className="loading loading-spinner loading-sm"></span>
            
        </div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl text-center font-semibold">Evens<span className="text-yellow-500">Showing</span> </h2>
            <div className="flex items-center justify-center mt-8 mb-3 text-gray-400">
                <h1 className="font-extrabold text-lg">-------------------</h1>
                <FaCalendarAlt className="text-lg mx-4"></FaCalendarAlt>
                <h1 className="font-extrabold text-lg">-------------------</h1>
            </div>
            <p className="text-center text-lg mb-10 text-gray-400">Enjoy your beautiful life</p>

        <div className="grid md:grid-cols-2 gap-20">
        <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-80" src={events_1} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $145
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    Concerts and Music Festivals
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-09-15</p>
        </div>

        
      </div>
      
    
  </div>
       </div>

       <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-80" src={events_2} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $165
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    Megeve Winter Party
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-08-15</p>
        </div>

        
      </div>
      
    
  </div>
       </div>
        <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-80" src={events_3} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $167
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    Eventchamp Conference
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-11-13</p>
        </div>

        
      </div>
      
    
  </div>
       </div>

       <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-80" src={events_4} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $189
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    Friendship Dinner
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-11-23</p>
        </div>

        
      </div>
      
    
  </div>
       </div>
        <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-80" src={events_5} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $123
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    The Future of Currencies
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-11-32</p>
        </div>

        
      </div>
      
    
  </div>
       </div>

       <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-80" src={events_6} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $112
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    Rock Concert of the Gloria
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-11-15</p>
        </div>

        
      </div>
      
    
  </div>
       </div>
        <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-80" src={events_7} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $145
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    LA Beach Picnic
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-11-15</p>
        </div>

        
      </div>
      
    
  </div>
       </div>

       <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-80" src="https://i.ibb.co/BqgQ1Dt/Screenshot-83.png" alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $156
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    Surf Carnival
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-11-15</p>
        </div>

        
      </div>
      
    
  </div>
       </div>
        </div>
        </div>
    );
};

export default Events;