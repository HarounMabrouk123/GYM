import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useProfileMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import Loader from '../components/Loader';


const ProfileScreen = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const [updateProfile, { isLoading: isUpdating }] = useProfileMutation();
    const { userInfo } = useSelector((state) => state.auth);



    useEffect(() => {
        setName(userInfo.name);
        setEmail(userInfo.email);
      }, [userInfo.email, userInfo.name]);

      const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          toast.error('Passwords do not match');
        } else  {
          try {
              const res = await updateProfile({name , email , password}).unwrap();
              dispatch(setCredentials({...res,})) ;
              navigate(redirect)
           } catch (err) {
               toast.error(err?.data?.message || err.error);
           }

      }
      };

    return (
        <main className="w-full min-h-screen flex justify-center items-center">
            <div className="w-[80%] max-w-md mx-auto">
                <h1 className="text-center text-2xl font-bold">User Profile</h1>
                <form onSubmit={submitHandler} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <button
                        type="submit"
                        disabled={isUpdating}
                        className="p-2 bg-blue-500 text-white rounded"
                    >
                        {isUpdating ? <Loader /> : 'Update Profile'}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default ProfileScreen;