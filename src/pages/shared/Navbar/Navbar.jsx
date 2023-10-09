import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import userDefaultPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";


const Navbar = () => {
    const {user ,logOut} = useContext(AuthContext);

    const handleSingOut = () =>{
        logOut()
        .then()
        .catch()
    }


const navLinks = <nav  className="flex  font-medium space-x-10 ">
 <li className="hover:text-yellow-500"><NavLink to="/">HOME</NavLink></li>
 <li className="hover:text-yellow-500"><NavLink to="/blogs">Blogs</NavLink></li>
 <li className="hover:text-yellow-500"><NavLink to="/sponsors">SPONSORS</NavLink></li>
 <li className="hover:text-yellow-500"><NavLink to="/speakers">SPEAKERS</NavLink></li>
 <li className="hover:text-yellow-500"><NavLink to="/events">EVENTS</NavLink></li>
      

      
</nav>
    return (
        <div className="navbar  bg-slate-100 max-w-7xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" px-1  ">
      {navLinks}
    </ul>
  </div>
  <div className="md:navbar-end sm:navbar-center">
    <div className="">
      {
        user && <p>{user?.email}</p>
      }
    </div>
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-7 rounded-full">
          {
            user ?
              <img src={user.photoURL} />
              :
              <img src={userDefaultPic} alt="" />
          }
        </div>
      </label>

        {
            user ?
            
             <Link to="/register">
             <button onClick={handleSingOut} className="btn btn-sm rounded-2xl bg-slate-200 text-yellow-500">Sing Out</button>
             </Link>
             
            :
         <div className="flex">
                <div className="border-r ">
                <Link to="/login">
                <button className="btn btn-sm rounded-none bg-white  text-yellow-500 rounded-l-2xl ">Login</button>
                </Link>
                </div>
            
                <div className="border-l border-gray-300">
                <Link to="/register">
                <button className="btn btn-sm rounded-none bg-white text-yellow-500 rounded-r-2xl ">Sing UP</button>
                </Link>
                </div>
        </div>
        }
    
  </div>
</div>
    );
};

export default Navbar;