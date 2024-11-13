import React from 'react';
import Button from '../components/myButton';
import course1 from '../assets/images/course1.png';
import course2 from '../assets/images/course2.png';
import course3 from '../assets/images/course3.png';
import deadlift from '../assets/images/deadlift.png';
import gym from '../assets/images/GYM.png';


const Courses = () => {
  return (
    <section className='flex justify-center flex-col items-center max-lg:flex-col gap-10 w-full max-container'> 
    <h1 className='font-bebas capitalize text-3xl lg:text-4xl font-bold text-white mt-3'>Find what motivates you</h1> 
        <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex-1 flex justify-start flex-col ">
      <img
        src={deadlift}
        alt="product detail"
        className="w-full h-auto object-contain border-top-left" // Set width to full and maintain aspect ratio
      />
      <div className="flex justify-start items-center gap-20 mt-4">
      <img 
src={gym}
alt="Gym logo"
style={{ width: '81px' }} // Adjust these values as needed
/>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure aliquid aut libero nihil distinctio vel illo commodi aliquam, ea magnam deleniti dicta vitae quaerat impedit praesentium esse nesciunt numquam.
        </p>
      </div>
    </div>
    <div className="max-sm:flex-col  flex justify-between gap-10 h-full flex-1"> {/* Ensure this container takes full height */}
    <div className="flex-1 h-full relative"> {/* Make this container relative */}
        <img src={course1} alt="Course 1" className=" max-sm:w-[200px] object-cover border-top-left opacity-70" />
        <p className="absolute bottom-0 left-0 right-0 text-center text-white text-2xl mb-10">Zumba</p> {/* Title on top */}
      </div>
      <div className="flex-1 h-full relative"> {/* Make this container relative */}
        <img src={course2} alt="Course 2" className=" max-sm:w-[200px] object-cover border-top-left opacity-70" />
        <p className="absolute bottom-0 left-0 right-0 text-center text-white text-2xl mb-10 ">Martial arts</p> {/* Title on top */}
      </div>
      <div className="flex-1 h-full relative"> {/* Make this container relative */}
        <img src={course3} alt="Course 3" className=" max-sm:w-[200px] object-cover border-top-left opacity-70" />
        <p className="absolute bottom-0 left-0 right-0 text-center text-white text-2xl mb-10">Yoga</p> {/* Title on top */}
      </div>
    </div>
  </div></section>

  );
};

export default Courses;
