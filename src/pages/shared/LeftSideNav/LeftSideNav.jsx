import {  FaGithub, FaGoogle,  } from 'react-icons/fa';

const LeftSideNav = () => {
    return (
        <div>
             <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full font-medium text-lg">
                    <FaGoogle className='text-lg'></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full font-medium text-lg">
                    <FaGithub className='text-xl'></FaGithub>
                    Github
                </button>
            </div>
        </div>
    );
};

export default LeftSideNav;