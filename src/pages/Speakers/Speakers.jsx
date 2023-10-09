
import Navbar from "../shared/Navbar/Navbar";
import { FaCalendarAlt } from "react-icons/fa";
import speaker_1 from '../../assets/speaker_1.png'
import speaker_2 from '../../assets/speaker_2.png'
import speaker_3 from '../../assets/speaker_3.png'
import speaker_4 from '../../assets/speaker_4.png'
import speaker_5 from '../../assets/speaker_5.png'
import speaker_6 from '../../assets/speaker_6.png'




const Speakers = () => {
    return (
        <div className=" bg-[url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
            <Navbar></Navbar>
            <h2 className="text-4xl text-center font-semibold bg-">Speaker <span className="text-yellow-500">Listing</span> </h2>
            <div className="flex items-center justify-center mt-8 mb-3 text-yellow-500">
                <h1 className="font-extrabold text-lg">-------------------</h1>
                <FaCalendarAlt className="text-lg mx-4"></FaCalendarAlt>
                <h1 className="font-extrabold text-lg">-------------------</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-0 md:gap-14 md:space-y-0 space-y-6 backdrop-blur-sm bg-white/30 p-12">
            <div className="w-96 ">
            <div className=" p-7  glass">
  <figure><img className="w-full hover:opacity-80 rounded-2xl" src={speaker_1} alt="car!"/></figure>
  <div className="">
    <h2 className="card-title my-3">Roberto Berry</h2>
    <p>Discover insights with Roberto Berry, renowned speaker in the events industry. Join us at Eventchamp for an unforgettable experience.</p>
    
  </div>
</div>
            </div>
            <div className="w-96">
            <div className=" p-7  glass">
  <figure><img className="w-full hover:opacity-80 rounded-2xl" src={speaker_3} alt="car!"/></figure>
  <div className="">
    <h2 className="card-title my-3">Saul R. Lopez</h2>
    <p>Join us as we welcome Saul R. Lopez, the visionary speaker sharing insights on success & leadership. Do not miss out on this incredible opportunity at Eventchamp!</p>
    
  </div>
</div>
            </div>
            <div className="w-96">
            <div className=" p-7  glass">
  <figure><img className="w-full hover:opacity-80 rounded-2xl" src={speaker_2} alt="car!"/></figure>
  <div className="">
    <h2 className="card-title my-3">Thomas Childers</h2>
    <p>Looking for an engaging speaker? Check out Thomas Childers! He is sure to captivate your audience with his thought-provoking insights and dynamic speaking style</p>
    
  </div>
</div>
            </div>
            <div className="w-96">
            <div className=" p-7  glass">
  <figure><img className="w-full hover:opacity-80 rounded-2xl" src={speaker_4} alt="car!"/></figure>
  <div className="">
    <h2 className="card-title my-3">Frances B. Chandler</h2>
    <p>Get ready to be inspired by Frances B. Chandler, our keynote speaker at Eventchamp. With over 20 years of experience in the events industry.</p>
    
  </div>
</div>
            </div>
            <div className="w-96">
            <div className=" p-7  glass">
  <figure><img className="w-full hover:opacity-80 rounded-2xl" src={speaker_5} alt="car!"/></figure>
  <div className="">
    <h2 className="card-title my-3">Melek Ozcan</h2>
    <p>Join us at Eventchamp to hear Melek Ozcan's insights on entrepreneurship, innovation and technology. With her extensive experience as an investor and advisor.</p>
    
  </div>
</div>
            </div>
            <div className="w-96">
            <div className=" p-7  glass">
  <figure><img className="w-full hover:opacity-80 rounded-2xl" src={speaker_6} alt="car!"/></figure>
  <div className="">
    <h2 className="card-title my-2">Mary Griffin</h2>
    <p>Join us for an unforgettable experience with Mary Griffin, renowned speaker and thought leader in her field.With her extensive experience as an investor and advisor. </p>
    
  </div>
</div>
            </div>

            </div>
        </div>
    );
};

export default Speakers;