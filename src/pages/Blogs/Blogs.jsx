import { FaCalendarAlt } from "react-icons/fa";
import Navbar from "../shared/Navbar/Navbar";
import noumber1 from '../../assets/clint1.jpg'
import noumber2 from '../../assets/clint2.jpg'
import noumber3 from '../../assets/clint3.jpg'
import noumber4 from '../../assets/clint4.jpg'

const Blogs = () => {
    return (
        <div>
              <div>
            <Navbar></Navbar>
            <h1 className="text-5xl font-semibold text-center">Latest <span className="text-yellow-500">Posts</span></h1>
            <div className="flex items-center justify-center mt-8 mb-3">
                <h1 className="font-extrabold text-lg">-------------------</h1>
                <FaCalendarAlt className="text-xl mx-4"></FaCalendarAlt>
                <h1 className="font-extrabold text-lg">-------------------</h1>
            </div>
            <div className=" space-y-8">
                <div>
                    <div className="hero  bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={noumber1} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl font-bold">Top 20 Event and Conference Countries</h1>
                                <p className="py-6">Discover the top 20 countries around the world that are perfect for hosting events and conferences. <br /> From the USA to Germany, Australia to Singapore, <br /> these countries offer excellent venues, facilities, and infrastructure to make your event a success.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="hero  bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={noumber2} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className="text-right">
                                <h1 className="text-3xl font-bold">Budgets for Business Events</h1>
                                <p className="py-6">around the world that are perfect for hosting events and conferences. From the USA <br /> to Germany, Australia to Singapore, <br /> these countries offer excellent venues, facilities, and infrastructure to make your event a success.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="hero  bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={noumber3}className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl font-bold">5 Ideas for Fun Family Activities</h1>
                                <p className="py-6">Managing your event budget can be challenging, but it is essential to ensure that your event is successful. <br /> This blog post provides <br /> valuable tips and insights on creating a budget for your business event.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero  bg-base-200 mb-10">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={noumber4} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className="text-right">
                                <h1 className="text-3xl font-bold">Best Event Ticket Deals</h1>
                                <p className="py-6">Discover the top 20 countries around the world that are perfect for hosting events <br /> and conferences. From the USA to Germany, Australia to Singapore, these countries offer excellent <br /> venues, facilities, and infrastructure to make your event a success.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Blogs;