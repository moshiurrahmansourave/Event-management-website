import { FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhoneSquareAlt, FaRegEnvelope, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
    return (
      
        <div>

     
         <footer className="md:flex   justify-around p-10  text-base-content py-20 bg-slate-200 ">
              
              <aside>
                <div className=" space-y-2">
                  <h2 className="text-2xl font-bold">Connect us</h2>
                  <div className="flex gap-2 items-center">
                    <FaMapMarkerAlt className="text-yellow-500"></FaMapMarkerAlt>
                  <p className="font-semibold">Walking Street, Los Angeles, California, USA</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaRegEnvelope className="text-yellow-500"></FaRegEnvelope>
                  <p className="font-semibold">info@eventchamp.com</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaPhoneSquareAlt className="text-yellow-500"></FaPhoneSquareAlt>
                  <p className="font-semibold">+90 312 69 12</p>
                  </div>
                </div>
                    <div className="flex text-4xl gap-3 my-4">
                    <FaFacebookSquare className="text-yellow-400"></FaFacebookSquare>
                    <FaTwitterSquare className="text-yellow-400" ></FaTwitterSquare>
                    
                    <FaWhatsappSquare className="text-yellow-400"></FaWhatsappSquare>
                    <FaInstagramSquare className="text-yellow-400"></FaInstagramSquare>
                    </div>
              </aside> 
              <nav>
                <header className="text-2xl font-bold ">Services</header> 
                <div className="flex flex-col space-y-2">
                <a className="link link-hover hover:text-yellow-500">Party Poppers</a> 
                <a className="link link-hover hover:text-yellow-500 ">All Rental Items</a> 
                <a className="link link-hover hover:text-yellow-500">Audio & Video Equipment</a> 
                <a className="link link-hover hover:text-yellow-500">Singer & Celebrity Booking</a>
                </div>
              </nav> 
              <nav>
                <header className="text-2xl font-bold">Company</header> 
                <div className="flex flex-col space-y-2">
                <a className="link link-hover hover:text-yellow-500">About us</a>  
                <a className="link link-hover hover:text-yellow-500">Jobs</a> 
                <a className="link link-hover hover:text-yellow-500">Press kit</a>
                </div>
              </nav> 
              
            </footer>
 
        </div>
        
    );
};

export default Footer;