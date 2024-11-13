import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/products';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !==confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            try {
                const res = await register({name , email , password}).unwrap();
                dispatch(setCredentials({...res,})) ;
                navigate(redirect)
             } catch (err) {
                 toast.error(err?.data?.message || err.error);
             }

        }

    };

    return (
        <main className="circular-gradient w-full min-h-screen flex justify-center items-center">
            <div className="w-[73%] max-md:flex-col max-lg:w-[90%] max-md:mt-8 rounded-lg flex mt-10 justify-between items-center bg-white border-2 border-yellow-300">
                <div className="flex flex-col justify-center items-center max-md:w-full w-1/2 gap-9">
                    <h1 className="text-center text-2xl font-bold font-sans text-yellow-400">
                        Sign Up And Join Us
                    </h1>
                    <form onSubmit={submitHandler} className="w-full flex flex-col items-center gap-4">
                    <input
                            placeholder="Name"
                            type="text"
                            className="w-[80%] py-2 px-2 bg-opacity-10 border-[2px] rounded-lg border-black"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            placeholder="Email"
                            type="text"
                            className="w-[80%] py-2 px-2 bg-opacity-10 border-[2px] rounded-lg border-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="w-[80%] py-2 px-2 rounded-lg border-[2px] border-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                                                <input
                            placeholder="Confirm password"
                            type="password"
                            className="w-[80%] py-2 px-2 rounded-lg border-[2px] border-black"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="py-2 px-4 hover:bg-white hover:text-yellow-400 transition duration-200 text-white rounded-lg bg-yellow-400"
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader /> : 'Sign In'}
                        </button>
                    </form>
                </div>
                <div className="relative flex w-1/2 z-10 max-md:w-full flex-col h-[450px] text-white text-4xl gap-4 justify-center items-center bg-gradient-to-r from-white to-yellow-400"> <span className="w-1/2 text-center">Welcome to the FitLine Family </span>
                <span className="text-white text-center text-3xl text-nowrap w-full">Already have an account ?</span>
                <Link to={redirect ? `/login?redirect=${redirect}` : '/login' }>
                        <button className=" text-xl py-2 px-4 hover:bg-white hover:text-yellow-400 transition duration-200 text-white rounded-lg bg-yellow-400">
                            Log In
                        </button>
                </Link>
             </div>  
            </div>
        </main>
    );
};

export default RegisterScreen;
