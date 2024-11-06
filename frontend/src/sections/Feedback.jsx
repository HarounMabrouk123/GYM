import React from 'react';
import njoum from '../assets/icons/njoum.svg';
import user1 from '../assets/images/user1.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bgclass from '../assets/images/bgclass.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const ClassCourse = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        "--swiper-pagination-color": "#014751",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "0.5",
        "--swiper-pagination-bullet-size": "14px",
        "--swiper-navigation-color": "#014751",
        backgroundImage: `url(${bgclass})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Title for the feedback section */}
      <h1 className="font-palanquin capitalize text-3xl lg:text-4xl font-bold text-white mb-7">
        Clients Feedback
      </h1>

      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2, // Two slides for medium devices
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full max-w-3xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="p-4 bg-black rounded-md max-w-[90%] mx-auto">
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit delectus culpa natus quibusdam est quidem odit harum iusto inventore cumque fuga excepturi.
            </p>
            <img src={njoum} alt="Stars" width={60} height={60} className="mt-4" />
            <div className="flex items-center gap-3 mt-4">
              <img src={user1} alt="User" className="w-10 h-10 rounded-full" />
              <h3 className="text-white text-sm">Courtney Henry</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-black rounded-md max-w-[90%] mx-auto">
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit delectus culpa natus quibusdam est quidem odit harum iusto inventore cumque fuga excepturi.
            </p>
            <img src={njoum} alt="Stars" width={60} height={60} className="mt-4" />
            <div className="flex items-center gap-3 mt-4">
              <img src={user1} alt="User" className="w-10 h-10 rounded-full" />
              <h3 className="text-white text-sm">Courtney Henry</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-black rounded-md max-w-[90%] mx-auto">
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit delectus culpa natus quibusdam est quidem odit harum iusto inventore cumque fuga excepturi.
            </p>
            <img src={njoum} alt="Stars" width={60} height={60} className="mt-4" />
            <div className="flex items-center gap-3 mt-4">
              <img src={user1} alt="User" className="w-10 h-10 rounded-full" />
              <h3 className="text-white text-sm">Courtney Henry</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-black rounded-md max-w-[90%] mx-auto">
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit delectus culpa natus quibusdam est quidem odit harum iusto inventore cumque fuga excepturi.
            </p>
            <img src={njoum} alt="Stars" width={60} height={60} className="mt-4" />
            <div className="flex items-center gap-3 mt-4">
              <img src={user1} alt="User" className="w-10 h-10 rounded-full" />
              <h3 className="text-white text-sm">Courtney Henry</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-black rounded-md max-w-[90%] mx-auto">
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, velit delectus culpa natus quibusdam est quidem odit harum iusto inventore cumque fuga excepturi.
            </p>
            <img src={njoum} alt="Stars" width={60} height={60} className="mt-4" />
            <div className="flex items-center gap-3 mt-4">
              <img src={user1} alt="User" className="w-10 h-10 rounded-full" />
              <h3 className="text-white text-sm">Courtney Henry</h3>
            </div>
          </div>
        </SwiperSlide>

        {/* Additional slides can be added similarly */}
      </Swiper>

    </div>
  );
};

export default ClassCourse;
