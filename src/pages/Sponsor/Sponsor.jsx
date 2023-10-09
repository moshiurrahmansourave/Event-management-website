import { FaCalendarAlt } from "react-icons/fa";
import Navbar from "../shared/Navbar/Navbar";
import card1 from '../../assets/card1.png'
import card2 from '../../assets/caed2.png'
import card3 from '../../assets/card3.jfif'
import card4 from '../../assets/card4.webp'

import card6 from '../../assets/card6.avif'


const Sponsor = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl text-center font-semibold">Sponsors <span className="text-yellow-500">Style 1</span> </h2>
            <div className="flex items-center justify-center mt-8 mb-3 text-gray-400">
                <h1 className="font-extrabold text-lg">-------------------</h1>
                <FaCalendarAlt className="text-lg mx-4"></FaCalendarAlt>
                <h1 className="font-extrabold text-lg">-------------------</h1>
            </div>
            <p className="text-gray-300 text-center">Eventchamp partners with industry leaders to bring you unparalleled event experiences.</p>

            <div className=" md:px-36 my-14">
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div className="mx-auto border w-60 shadow-2xl">
                    <img className="w-full" src={card1} alt="" />
                    </div>
                    <div className="mx-auto border w-60 shadow-2xl">
                    <img className="w-full" src={card2} alt="" />
                    </div>
                    <div className="mx-auto border w-60 shadow-2xl">
                    <img className="w-full" src={card3} alt="" />
                    </div>
                    <div className="mx-auto border shadow-2xl w-60 md:ml-44 md:mt-12">
                    <img className="w-full" src={card4} alt="" />
                    </div>
                    
                    <div className="mx-auto border shadow-2xl md:ml-44 w-60 md:mt-12">
                    <img className="w-full" src={card6} alt="" />
                    </div>
                    
                    
                </div>
            </div>
            
            <div className="mt-40">
            <h2 className="text-4xl text-center font-semibold">Sponsors <span className="text-yellow-500">Style 2</span> </h2>
            <div className="flex items-center justify-center mt-8 mb-3 text-gray-400">
                <h1 className="font-extrabold text-lg">-------------------</h1>
                <FaCalendarAlt className="text-lg mx-4"></FaCalendarAlt>
                <h1 className="font-extrabold text-lg">-------------------</h1>
            </div>
            <p className="text-gray-300 text-center">Eventchamp partners with industry leaders to bring you unparalleled event experiences.</p>

            <div className=" md:px-36 my-14">
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div className="p-6 bg-slate-300 mx-auto border w-60 shadow-2xl">
                    <img className="w-full" src={card4} alt="" />
                    </div>
                    <div className="p-6 bg-slate-300  mx-auto border w-60 shadow-2xl">
                    <img className="w-full" src={card3} alt="" />
                    </div>
                    <div className="p-6 bg-slate-300  mx-auto border w-60 shadow-2xl">
                    <img className="w-full" src={card2} alt="" />
                    </div>
                    <div className="p-6 bg-slate-300  mx-auto border shadow-2xl w-60 md:ml-44 md:mt-12">
                    <img className="w-full" src={card1} alt="" />
                    </div>
                    
                    <div className="p-6 bg-slate-300  mx-auto border shadow-2xl md:ml-44 w-60 md:mt-12">
                    <img className="w-full" src={card6} alt="" />
                    </div>
                    
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Sponsor;