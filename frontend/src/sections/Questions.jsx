import React, { useState } from 'react';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleVisibility = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "Lorem ipsum dolor sit amet consectetur. Velit.",
    "Lorem ipsum dolor sit amet consectetur. Velit.",
    "Lorem ipsum dolor sit amet consectetur. Velit.",
    "Lorem ipsum dolor sit amet consectetur. Velit."
  ];

  return (
    <div className="flex flex-col items-center  text-gray-200 p-8">
      <h1 className="font-palanquin capitalize text-3xl lg:text-4xl font-bold text-white mb-7">Frequently Asked Questions</h1>
      {questions.map((question, index) => (
        <div key={index} className="w-full max-w-2xl mb-4">
          <div 
            
            className="flex justify-between items-center  border-b border-gray-700 py-4"
          >
            <h2 className="text-lg">{question}</h2>
            <button onClick={() => toggleVisibility(index)}  className="text-2xl font-bold text-gray-400">
              {activeIndex === index ? '-' : '+'}
            </button>
          </div>
          {activeIndex === index && (
            <div className="bg-yellow-600 text-gray-100 p-4 rounded-md mt-2">
              <p>
                Lorem ipsum dolor sit amet consectetur. Lorem faucibus ut pellentesque amet sit convallis interdum gravida metus.
                Gravida sodales quis ornare ultricies arcu faucibus pellentesque nulla consectetur. Amet eget fringilla ullamcorper
                adipiscing nisi adipiscing mi morbi. Dui netus purus tincidunt et blandit interdum. Odio massa faucibus orci enim
                fermentum. 
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Yellow Section Below */}
      <div className="bg-yellow-500 text-gray-900 p-8 mt-8 w-full flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Are you ready to change?</h2>
        <p className="max-w-lg text-center mb-6">
          Challenge your strength. Stretch your body. Breathe easy. Our team of
          world-class instructors will empower you to achieve your fitness goals.
        </p>
        <button className="bg-transparent border border-gray-900 px-6 py-2 font-semibold hover:bg-gray-900 hover:text-yellow-500 rounded">
          Start your Free Trial
        </button>
      </div>
    </div>
  );
};

export default Questions;
