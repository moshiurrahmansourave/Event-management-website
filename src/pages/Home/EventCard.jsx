import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const EventCard = ({events}) => {
    const { id, img ,title, date, location, price, details} = events;
    return (
       <Link to={`/event/${id}`}>
       
       <div className="  bg-base-100 hover:shadow-lg hover:-mt-2 transition-all duration-200  ">
  <figure><img className="w-full lg:h-[284px]" src={img} alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            {price}
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
      {title}
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> {date}</p>
        </div>

        <p className="flex items-center gap-1"><FaMapMarkerAlt className="text-yellow-400"></FaMapMarkerAlt> {location}</p>
      </div>
      <p className="pb-3 mt-5">{details}</p>
    
  </div>
       </div>

       </Link>
    );
};

export default EventCard;