import React from 'react';
import Hero from '../sections/Hero';
import Courses from '../sections/Courses';
import Fit from '../sections/Fit';
import bgclass from '../assets/images/bgclass.png'
import ClassCourse from '../sections/ClassCourse';
import Instructors from '../sections/Instructors';
import Questions from '../sections/Questions';
import VideoSection from '../sections/VideoSection';
import Feedback from '../sections/Feedback';


const HomeScreen = () => {
  return (
    <main className="relative">
    <section className="padding bg relative " id='hero' >    
        <Hero />     
    </section>
    <section className='padding circular-gradient'>
           <Courses></Courses>
    </section>
    <section className='padding circular-gradient'>
            <Fit></Fit>
    </section>
    <section className='padding' 
            style={{
              backgroundImage: `url(${bgclass})`,
              backgroundSize: 'cover', // Adjust to zoom out the image (e.g., 110% to zoom out)backgroundSize: 'cover',
              backgroundPosition: 'center', // Adjust -2rem to control the upward translation
              
            }}>
        
                
              
             <ClassCourse></ClassCourse>

    </section>
    <section className='bg-black padding circular-gradient '
    >
           <Instructors></Instructors>
    </section>

    <section className='bg-black padding circular-gradient'>
              <VideoSection></VideoSection>
    </section>
            
    <Feedback></Feedback>   
             



    <section className='bg-black  circular-gradient'>
        <Questions></Questions>            

    </section>


    
  </main>
  )
}

export default HomeScreen