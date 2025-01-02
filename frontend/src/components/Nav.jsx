import React, { useState } from 'react';
import HeaderLogo from "../assets/images/HeaderLogo.png";
import Button from './myButton';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation
import { FaUserCircle } from 'react-icons/fa'; 
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const location = useLocation();  // Get current location

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  // Check if the current page is the register or login page
  const isAuthPage = location.pathname === '/register' || location.pathname === '/login';

  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-black'>
      <nav className='flex justify-between items-center max-container'>
      <a href='/'>
              <img
                src={HeaderLogo}
                alt='logo'
                className='m-0 h-[40px]'
              />
            </a>
        {/* Render only the logo on the register or login page */}
        {!isAuthPage && (
          <>
               <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                 <li className='font-montserrat leading-normal text-lg text-white'>               
                   <a href="/" className='no-underline text-white hover:underline'>Home</a>
                 </li>
                 <li className='font-montserrat leading-normal text-lg text-white'>               
                   <a href="#about" className='no-underline text-white hover:underline'>About</a>
                 </li>
                 <li className='font-montserrat leading-normal text-lg text-white'>
                   <a href="/products" className='no-underline text-white hover:underline'>Products</a>
                 </li>
                 <li className='font-montserrat leading-normal text-lg text-white'>
                   <a href="/chatbot" className='no-underline text-white hover:underline'>GymBro</a>
                 </li>
               </ul>

            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
              {userInfo ? (
                <div className='relative flex items-center'>
                  <button onClick={toggleDropdown} className='flex items-center text-white'>
                    {/* Add user icon next to the username */}
                    <FaUserCircle className='mr-2' size={20} />
                    {userInfo.name}
                  </button>
                  {isDropdownOpen && (
                    <div className='absolute right-0 mt-32 w-48 bg-white shadow-lg rounded-md'>
                      <Link to='/profile' className='block px-4 py-2 text-black hover:bg-gray-200'>
                        Profile
                      </Link>
                      <button
                        onClick={logoutHandler}
                        className='block w-full px-4 py-2 text-black text-left hover:bg-gray-200'>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                 <Link className='text-black ' to='/register'> <Button backgroundColor='bg-[#FDDB07] border-[#FDDB07] rounded-full '>Sign In</Button> </Link>
                 <Link className='text-black' to='/login'> <Button backgroundColor='bg-[#FDDB07] border-[#FDDB07] rounded-full '>Log In</Button> </Link>
                </>
              )}
            </div>
          </>
        )}
        <div className='hidden max-lg:block'>
          <img src={HeaderLogo} alt='Mobile Logo' className='w-[80px] h-[18px]' />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
