import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import {  FaGithub, FaGoogle,  } from 'react-icons/fa';
import app from '../../../firebase/firebase.config';

import { AuthContext } from '../../../context/AuthProvider';
import { useContext } from 'react';

const LeftSideNav = () => {

    const {user  } = useContext(AuthContext);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingIn = () =>{
        
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
             <div className='p-4 space-y-3 mb-6'>
               
                {
            user ?
            <div className='border'>
                <h4>loged in</h4>
            </div>

            :
            <div>
            <h2 className="text-3xl">Login With</h2>
            <button onClick={handleGoogleSingIn} className="btn btn-outline w-full font-medium text-lg">
                <FaGoogle className='text-lg'></FaGoogle>
                Google
            </button>
            <button className="btn btn-outline w-full font-medium text-lg">
                <FaGithub className='text-xl'></FaGithub>
                Github
            </button>
            </div>
        }
            </div>


            <div className='border'>
                <h2 className='text-3xl'>another </h2>
            </div>
        </div>
    );
};

export default LeftSideNav;