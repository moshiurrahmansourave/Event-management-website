
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

import {  FaCalendarAlt, FaCalendarTimes, FaClock, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneSquareAlt, FaRegEnvelope, FaRegFolderOpen, FaRegMap, FaTag, FaTwitterSquare, FaUserTie, FaWhatsappSquare } from "react-icons/fa";
// import EventDetailsCard from "./EventDetailsCard";



const EventDetail = () => {
    const eventDetail = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const event = eventDetail.find(event => event.id ===idInt)
    console.log(eventDetail, id);

    return (
        <div className="bg-slate-100">
            <Navbar></Navbar>
            <div className="mb-6 w-full bg-[url('https://i.ibb.co/HtLJghp/backgrond-event.png')]">

                <p className="text-4xl pt-11 pb-32 ml-20 text-white font-medium">{event.title}</p>

                <div>
                <Link to="/"><h2 className="absolute text-lg text-white hover:underline ml-48 -mt-28  ">Home</h2></Link>
                <p className="absolute text-white underline ml-72 -mt-28">Eventchamp Conference</p>
                </div>

            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-6">
                <div className="col-span-3 bg-white">
                   <div className="mb-5">
                   <div className=" lg:mx-24">
                        <img className="w-full " src={event.img} alt="" />
                        <h2 className="text-3xl ml-3 font-semibold mt-4 mb-2">Event Details</h2>
                        <p className=" text-lg ml-3 mb-8">{event.more_detail}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold ml-28">SHARE THIS EVENT</h2>
                        <div className="ml-28 my-3 text-4xl flex gap-2 ">
                        <FaFacebookSquare className="hover:text-yellow-400"></FaFacebookSquare>
                        <FaTwitterSquare className="hover:text-yellow-400" ></FaTwitterSquare>
                        <FaLinkedin className="hover:text-yellow-400"></FaLinkedin>
                        <FaWhatsappSquare className="hover:text-yellow-400"></FaWhatsappSquare>
                        <FaInstagramSquare className="hover:text-yellow-400"></FaInstagramSquare>
                        </div>
                    </div>
                   </div>

                   <div className="mt-3  ">
                   <div className=" lg:mx-12">
                    <h2 className="text-3xl underline font-bold text-center my-3">Speakers</h2>
                        <div className="grid grid-cols-2 gap-10">
                            <div><img className="rounded-2xl" src={event.speaker_img1} alt="" /></div>
                            <div><img className="rounded-2xl" src={event.speaker_img2} alt="" /></div>
                            <div><img className="rounded-2xl" src={event.speaker_img3} alt="" /></div>
                            <div><img className="rounded-2xl" src={event.speaker_img4} alt="" /></div>
                            
                        </div>
                    </div>
                   </div>
                    
                </div>

                <div className="col-span-1  mr-2 bg-white ">
                    <div>
                    <div className="border-b">
                       <h2 className="text-xl text-center my-4 font-medium">Event Details</h2>

                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaCalendarAlt className="text-3xl ml-4 text-yellow-300"></FaCalendarAlt>
                        <div>
                        <h2 className="text-sm font-bold">START DATE</h2>
                        <p>March 12, 2023 10:30 am</p>
                        </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaCalendarTimes className="text-3xl ml-4 text-yellow-300"></FaCalendarTimes>
                        <div>
                        <h2 className="text-sm font-bold">END DATE</h2>
                        <p>March 15, 2025 11:30 pm</p>
                        </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaClock className="text-3xl ml-4 text-yellow-300"></FaClock>
                        <div>
                        <h2 className="text-sm font-bold">STATUS</h2>
                        <p>Showing</p>
                        </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaRegMap className="text-3xl ml-4 text-yellow-300"></FaRegMap>
                        <div>
                        <h2 className="text-sm font-bold">VENUE</h2>
                        <p>London Arena</p>
                        </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaMapMarkerAlt className="text-3xl ml-4 text-yellow-300"></FaMapMarkerAlt>
                        <div>
                        <h2 className="text-sm font-bold">LOCATION</h2>
                        <p>{event.location}</p>
                        </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaTag className="text-3xl ml-4 text-yellow-300"></FaTag>
                       <div>
                       <h2 className="text-sm font-bold">PRICE</h2>
                        <p>{event.price}</p>
                       </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaUserTie className="text-3xl ml-4 text-yellow-300"></FaUserTie>
                        <div>
                        <h2 className="text-sm font-bold">ORGANIZER</h2>
                        <p>Moshiur Rahman</p>
                        </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaRegFolderOpen className="text-3xl ml-4 text-yellow-300"></FaRegFolderOpen>
                        <div>
                        <h2 className="text-sm font-bold">CATEGORY</h2>
                        <p>Entertaiment</p>
                        </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaPhoneSquareAlt className="text-3xl ml-4 text-yellow-300"></FaPhoneSquareAlt>
                        <div>
                        <h2 className="text-sm font-bold">PHONE</h2>
                        <p>{event.phone}</p>
                        </div>
                    </div>
                    <div className=" border-b py-4 flex items-center space-x-7">
                        <FaRegEnvelope className="text-3xl ml-4 text-yellow-300"></FaRegEnvelope>
                        <div>
                        <h2 className="text-sm font-bold">EMAIL</h2>
                        <p>{event.email}</p>
                        </div>
                    </div>
                      <button className="btn  rounded-3xl w-full hover:text-yellow-400 text-white hover:bg-white bg-yellow-400 border mt-6 ">Add to calender</button>
                    </div>

                    <div className=" bg-slate-100">
                    
                    </div>


                </div>
            </div>
            <div>
                <h2 className="text-center mt-11 my-4 text-4xl font-semibold">Related <span className="text-yellow-400">Events</span></h2>
                <div className="flex items-center justify-center">
                <h1 className="font-extrabold text-lg">-------------------</h1>
                <FaCalendarAlt className="text-xl mx-4"></FaCalendarAlt>
                <h1 className="font-extrabold text-lg">-------------------</h1>
                </div>
                <p className="text-center pt-7 pb-12">You might also love these events.</p>
            </div>
            {/* ////// */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-2 pb-20">

            <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-[284px]" src="https://i.ibb.co/BqgQ1Dt/Screenshot-83.png" alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $100
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
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-11-15</p>
        </div>

        <p className="flex items-center gap-1"><FaMapMarkerAlt className="text-yellow-400"></FaMapMarkerAlt> Megeve</p>
      </div>
      <p className="pb-3 mt-5">{event.details}</p>
    
  </div>
       </div>
            <div className="  bg-base-100  ">
  <figure><img className="w-full lg:h-[284px]" src="https://i.ibb.co/2KqJXd3/Screenshot-84.png" alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $76
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    Theater and Performing Arts
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt>2023-12-10</p>
        </div>

        <p className="flex items-center gap-1"><FaMapMarkerAlt className="text-yellow-400"></FaMapMarkerAlt> Munich</p>
      </div>
      <p className="pb-3 mt-5">{event.details}</p>
    
  </div>
       </div>
            <div className="  bg-base-100   ">
  <figure><img className="w-full lg:h-[284px]" src="https://i.ibb.co/Vj2qd4B/Screenshot-85.png" alt="events" /></figure>
  <p className="btn btn-sm rounded-2xl absolute -mt-14 
   ml-5 border-none px-5 bg-yellow-500 text-white font-semibold">
            $25
            </p>
  <div className="mx-7">
    <h2 className="text-xl font-medium mt-2">
    Film Screenings and Premieres
    </h2>
      <div className=" flex justify-between items-center my-3">
        <div className="flex items-center gap-7">
        <p className="btn btn-sm rounded-2xl bg-yellow-500 text-white font-semibold">
            Deatails
            </p>
        <p className="flex items-center gap-1"><FaCalendarAlt className="text-yellow-400"></FaCalendarAlt> 2023-11-25</p>
        </div>

        <p className="flex items-center gap-1"><FaMapMarkerAlt className="text-yellow-400"></FaMapMarkerAlt> Istanbul</p>
      </div>
      <p className="pb-3 mt-5">{event.details}</p>
    
  </div>
       </div>
            </div>

        </div>
    );
};

export default EventDetail;