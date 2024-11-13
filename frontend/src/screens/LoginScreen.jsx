import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

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
        try {
           const res = await login({email , password}).unwrap();
           dispatch(setCredentials({...res,})) ;
           navigate(redirect)
        } catch (error) {
            toast.error(error?.data?.message || 'Failed to log in');
        }
    };

    return (
        <main className="circular-gradient w-full min-h-screen flex justify-center items-center">
            <div className="w-[73%] max-md:flex-col max-lg:w-[90%] max-md:mt-8 rounded-lg flex mt-10 justify-between items-center bg-white border-2 border-yellow-300">
                <div className="flex flex-col justify-center items-center max-md:w-full w-1/2 gap-9">
                    <h1 className="text-center text-2xl font-bold font-sans text-yellow-400">
                        Login to Your account
                    </h1>
                    <form onSubmit={submitHandler} className="w-full flex flex-col items-center gap-4">
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
                        <button
                            type="submit"
                            className="py-2 px-4 hover:bg-white hover:text-yellow-400 transition duration-200 text-white rounded-lg bg-yellow-400"
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader /> : 'Sign In'}
                        </button>
                    </form>
                </div>
                <div className="flex w-1/2 max-md:w-full flex-col h-full p-24 gap-4 justify-center items-center bg-gradient-to-r from-white to-yellow-400">
                    <span className="text-white text-center text-3xl text-nowrap w-full">Are you new here?</span>
                    <span className="text-white text-center text-2xl text-nowrap w-full">Join Us</span>
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register' }>
                        <button className="py-2 px-4 hover:bg-white hover:text-yellow-400 transition duration-200 text-white rounded-lg bg-yellow-400">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default LoginScreen;
