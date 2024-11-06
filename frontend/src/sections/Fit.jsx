import React from 'react'
import fit from '../assets/images/fit.png'
import rectangle from '../assets/images/rectangle.png'

const Fit = () => {
  return (
    <div className='relative w-full flex flex-col justify-center items-center gap-7 '> 
              <div className='w-[30%] max-md:hidden opacity-55 h-16 bg-gradient-to-t from-[#FF6400] to-[#FFED00] absolute top-[75%] -right-16'></div>
              <div className='w-[40%] max-md:hidden opacity-55 h-16 bg-gradient-to-t from-[#FF6400] to-[#FFED00] absolute top-[92%] -right-16'></div>

        <div className='flex flex-col justify-center items-center max-w-[50%] gap-8 '>
            <h1 className='text-white text-[48px] font-palanquin capitalize lg:text-4xl font-bold  mt-3 text-center'>Fit your lifestyle</h1>
            <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto dolorum assumenda ipsam commodi nobis deleniti sint doloribus, asperiores laudantium perspiciatis enim! Ad quas voluptatem dolorum vitae. Accusamus, cum consectetur!</p>
        </div>
        <div className="relative"> 
           <img src={rectangle} alt="" className="absolute -bottom-2 " />
           <img src={fit} alt="" className="relative z-10  left-2  " />
        </div>

    </div>
  )
}

export default Fit