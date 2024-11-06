import React from 'react';
import Button from '../components/myButton';

const Hero = () => {
  return (
    <section className="flex  max-md:justify-center items-center lg:flex-row flex-col gap-10 w-full max-w-screen-xl mx-auto h-auto lg:h-[70vh] p-5 lg:p-0 -ml-8 ">
      <div className="flex flex-1 flex-col lg:pt-[191px] lg:pl-[147px] w-full lg:w-auto text-center lg:text-left">
        <h1 className="font-palanquin capitalize text-3xl lg:text-4xl font-bold text-white mt-3">
          Get more out of your
        </h1>
        <h1 className="font-palanquin capitalize text-3xl lg:text-4xl font-bold text-white mt-2 lg:mt-0">
          Fitness Journey
        </h1>
        <p className="text-white mt-4 lg:mt-[30px] text-base lg:text-lg">
          Join the community to track your progress
        </p>
        <div className="text-white mt-4 lg:mt-6 max-w-md lg:max-w-lg mx-auto lg:mx-0">
          <p className="text-sm lg:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quidem, libero deserunt accusamus maiores
            repellat itaque possimus neque quos ea, quas ab aliquam! Nam voluptatem debitis rem libero maxime culpa inventore
            illo eius soluta animi esse, quas nesciunt, impedit ut similique sapiente obcaecati modi. Aut fuga vitae qui explicabo accusantium!
          </p>
        </div>
        <div className="flex gap-3 mt-5 justify-center lg:justify-start">
          <Button backgroundColor="bg-[#FDDB07] border-[#FDDB07] rounded-full">Create Account</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
