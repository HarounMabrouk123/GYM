import React from 'react'
import class1 from '../assets/images/class1.png'
import class2 from '../assets/images/class2.png'
import class3 from '../assets/images/class3.png'
import students from '../assets/icons/students.png'
import yellow from '../assets/icons/yellow.png'
import Button from '../components/myButton'
import dot from '../assets/icons/dot.png'
import minirect from '../assets/images/minirect.png'

const ClassCourse = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-10 '>
        <h1 className='text-white text-[48px] font-bebas capitalize lg:text-4xl font-bold  text-center'>Classes</h1>
        <div className='flex  max-lg:flex-col justify-between items-center gap-8'>
            <div className='flex flex-col justify-center mr-6 ml-6 gap-4'>
                <div className="relative">
                     <img src={minirect} alt="" className="absolute  -bottom-2  z-0  " />
                     <img src={class1} alt="" className="relative z-10  left-1 " />
                 </div>
                 <div className='flex justify-between gap-10'>
                    <div className='flex justify-between gap-3' >
                        <img src={yellow} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h5 className='text-white'>yoga</h5>
                    </div>
                    
                    <div className='flex justify-between gap-3'>
                        <img src={students} alt="" />
                         <p className='text-white'>30 minutes</p>
                    </div>
                 </div>
                 <div className='flex flex-col justify-between gap-2'>
                    <h1 className='text-white text-xl'>Stength and sweat</h1>
                    <h3 className='text-white'>Instructor : wala brahmi</h3>
                    <div className='flex gap-3 '>
                        <img src={dot} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h4 className='text-white'>no of classes : 30</h4>
                    </div>
                    <div className='flex gap-3 '>
                        <img src={dot} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h4 className='text-white'>difficulty : beginner</h4>
                    </div>
                    
                 </div>
                 <div className='flex justify-between gap-5'>
                     <Button backgroundColor='bg-[#FDDB07] text-black border-[#FDDB07] rounded-[5px] text-sm text-center whitespace-nowrap'>Learn more</Button>
                     <Button backgroundColor=' text-white border-white rounded-[5px] text-sm text-center whitespace-nowrap'>Start free trial</Button>
                 </div>
            </div>
            <div className='flex flex-col justify-center mr-6 ml-6 gap-4'>
            <div className="relative">
                     <img src={minirect} alt="" className="absolute -bottom-2  z-0  " />
                     <img src={class2} alt="" className="relative z-10  left-1 " />
                 </div>
                 <div className='flex justify-between gap-10'>
                    <div className='flex justify-between gap-3' >
                        <img src={yellow} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h5 className='text-white'>yoga</h5>
                    </div>
                    
                    <div className='flex justify-between gap-3'>
                        <img src={students} alt="" />
                         <p className='text-white'>30 minutes</p>
                    </div>
                 </div>
                 <div className='flex flex-col justify-between gap-2'>
                    <h1 className='text-white text-xl'>Stength and sweat</h1>
                    <h3 className='text-white'>Instructor : wala brahmi</h3>
                    <div className='flex gap-3 '>
                        <img src={dot} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h4 className='text-white'>no of classes : 30</h4>
                    </div>
                    <div className='flex gap-3 '>
                        <img src={dot} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h4 className='text-white'>difficulty : beginner</h4>
                    </div>
                    
                 </div>
                 <div className='flex justify-between gap-5'>
                     <Button backgroundColor='bg-[#FDDB07] text-black border-[#FDDB07] rounded-[5px] text-sm text-center whitespace-nowrap'>Learn more</Button>
                     <Button backgroundColor=' text-white border-white rounded-[5px] text-sm text-center whitespace-nowrap'>Start free trial</Button>
                 </div>
            </div>
            <div className='flex flex-col justify-center mr-6 ml-6 gap-4'>
            <div className="relative">
                     <img src={minirect} alt="" className="absolute -bottom-2  z-0  " />
                     <img src={class3} alt="" className="relative z-10  left-1 " />
                 </div>
                 <div className='flex justify-between gap-10'>
                    <div className='flex justify-between gap-3' >
                        <img src={yellow} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h5 className='text-white'>yoga</h5>
                    </div>
                    
                    <div className='flex justify-between gap-3'>
                        <img src={students} alt="" />
                         <p className='text-white'>30 minutes</p>
                    </div>
                 </div>
                 <div className='flex flex-col justify-between gap-2'>
                    <h1 className='text-white text-xl'>Stength and sweat</h1>
                    <h3 className='text-white'>Instructor : wala brahmi</h3>
                    <div className='flex gap-3 '>
                        <img src={dot} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h4 className='text-white'>no of classes : 30</h4>
                    </div>
                    <div className='flex gap-3 '>
                        <img src={dot} alt="" className='w-[8px] h-[8px] mt-2'/>
                        <h4 className='text-white'>difficulty : beginner</h4>
                    </div>
                    
                 </div>
                 <div className='flex justify-between gap-5'>
                     <Button backgroundColor='bg-[#FDDB07] text-black border-[#FDDB07] rounded-[5px] text-sm text-center whitespace-nowrap'>Learn more</Button>
                     <Button backgroundColor=' text-white border-white rounded-[5px] text-sm text-center whitespace-nowrap'>Start free trial</Button>
                 </div>
            </div>
        </div>
        <Button backgroundColor=' w-[185px] bg-[#FDDB07] text-black border-[#FDDB07] rounded-[5px] text-xl text-center  '  clas>See all</Button>
    </div>
  )
}

export default ClassCourse