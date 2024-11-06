import React from 'react'
import HeaderLogo from "../assets/images/HeaderLogo.png"; // or whatever the actual file name and extension is
import Button from './myButton';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-black'>
    <nav className='flex justify-between items-center max-container'>
      <a href='/'>
        <img
          src={HeaderLogo}
          alt='logo'
          width={248}
          height={44}
          className='m-0 w-[129px] h-[29px]'
        />
      </a>
      <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            <li  className='font-montserrat leading-normal text-lg text-white'>Home</li>
            <li  className='font-montserrat leading-normal text-lg text-white'>About</li>
            <li  className='font-montserrat leading-normal text-lg text-white'>Workout Programs</li>
            <li  className='font-montserrat leading-normal text-lg text-white'>Recipes</li>
            <li  className='font-montserrat leading-normal text-lg text-white'>Store</li>
      </ul>
      <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
        <Button backgroundColor='bg-[#FDDB07] border-[#FDDB07] rounded-full'>sign in</Button>
        <Button backgroundColor='bg-[#FDDB07] border-[#FDDB07] rounded-full'>Log in</Button>
      </div>
      <div className='hidden max-lg:block'>
        <img src="" alt="" />
      </div>
    </nav>
  </header>
  )
}

export default Nav