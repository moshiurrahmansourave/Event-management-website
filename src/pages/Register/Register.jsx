import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Register = () => {
    const {creatUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name= form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password ,name)

        //create user
        creatUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className=" card p-4 w-96 glass mx-auto  ">
            <div className="">
                <h2 className="card-title">Registation</h2>
                
    <form onSubmit={handleRegister} className="">
        <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input name="name" type="Text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
        </div>
        <div className="text-center mt-3">
            <p><Link className=" hover:text-yellow-500 font-bold" to="/login">
            If you have account please Login
            </Link>
            </p>
        </div>
   </form>
            </div>
        </div>
        </div>
    );
};

export default Register;