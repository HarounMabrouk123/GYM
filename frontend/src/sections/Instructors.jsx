import React from 'react'
import rectangle2 from '../assets/images/rectangle2.png'
import rectangle3 from '../assets/images/rectangle3.png'
import coach1 from '../assets/images/coach1.png'
import coach2 from '../assets/images/coach2.png'
import coach3 from '../assets/images/coach3.png'
import coach4 from '../assets/images/coach4.png'


const Instructors = () => {
  return (
    <div className='max-lg:mt-[1200px] relative flex items-center justify-center flex-col gap-10'> 
         <div className='w-[30%] opacity-35  z-0 max-md:hidden  h-16 bg-gradient-to-t from-[#FF6400] to-[#FFED00] absolute top-[70%] -left-16'></div>
        <div className='w-[66%]  opacity-35 z-0 max-md:hidden  h-16 bg-gradient-to-t from-[#FF6400] to-[#FFED00] absolute top-[85%] -left-16'></div>

        <h1 className='text-white text-[48px] font-palanquin capitalize lg:text-4xl font-bold  mt-3 text-center'>Instructors</h1>
        <div className='flex z-20 max-lg:flex-col justify-between gap-6'>
            <div className='flex flex-col justify-between gap-5'>
                <img src={coach1} alt="" />
                <div className='flex flex-col justify-between gap-4 items-center'>
                     <h1 className='text-white text-center'>Mahmoud</h1>
                     <p className='text-white'>kawarji</p>
                </div>
            </div>
            <div className='flex flex-col justify-between gap-5'>
                <img src={coach2} alt="" />
                <div className='flex flex-col justify-between gap-4 items-center'>
                     <h1 className='text-white text-center'>Mahmoud</h1>
                     <p className='text-white'>kawarji</p>
                </div>
            </div>
            <div className='flex flex-col justify-between gap-5'>
                <img src={coach3} alt="" />
                <div className='flex flex-col justify-between gap-4 items-center'>
                     <h1 className='text-white text-center'>Mahmoud</h1>
                     <p className='text-white'>kawarji</p>
                </div>
            </div>
            <div className='flex flex-col justify-between gap-5 '>
                <img src={coach4} alt="" />
                <div className='flex flex-col justify-between gap-4 items-center'>
                     <h1 className='text-white text-center'>Mahmoud</h1>
                     <p className='text-white'>kawarji</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instructors