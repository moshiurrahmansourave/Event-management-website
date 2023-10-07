import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Login = () => {

    const {singIn} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        singIn(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="">
        <Navbar></Navbar>
        <div className="card w-96 glass mx-auto my-6 ">
            <div className="p-3">
                <h2 className="card-title">Login form</h2>
               
    <form onSubmit={handleLogin} className="">
        <div className="form-control mb-4">
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
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
        </div>

        <div className="flex items-center justify-between mx-4 mt-3">
        <p><Link className=" hover:text-yellow-500 hover:underline" to="">Lost password?</Link></p>
            
        <p><Link className=" hover:text-yellow-500 hover:underline" to="/register">Create an account</Link></p>
        </div>
   </form>
            </div>
        </div>
        </div>
    );
};

export default Login;