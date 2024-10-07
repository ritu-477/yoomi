import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Icon from '../common/Icon';
import sliderWorkout from '../assets/images/webp/swiper-img.webp';
import sliderChair from '../assets/images/webp/slider-chair-image.webp';

const FeaturesSlider = () => {
  return (
    <div className='xl:pt-[125.63px] lg:pt-20 md:pt-16 pt-12 pb-12 sm:pb-[53px]'>
      <div className='container'>
        <p className='font-inter text-base leading-custom-lg text-deep-blue font-medium pb-2 text-center'>FEATURES</p>
        <h2 className='xl:text-custom-6xl sm:text-3xl text-2xl xl:leading-custom-5xl font-normal pb-[10px] text-center'>Explore Our <span className='font-semibold'>Amazing Features</span></h2>
        <p className='font-inter sm:text-base text-sm sm:leading-custom-lg text-black opacity-70 text-center max-w-[724px] mx-auto'>Yoomi is more than just a regular remote monitoring solution. Our product supports patients and providers through every step of the rehabilitation process</p>
        <div className='rounded-[32px] bg-white shadow-custom-xxl lg:p-[57px_0_58px_71px] md:p-[40px_0_40px_40px] sm:p-[32px_0_32px_32px_32px] p-[24px_0_24px_24px] lg:mt-[55px] md:mt-[40px] mt-4 sm:mt-6'>
          <div className='lg:flex-row flex justify-between flex-col gap-6 sm:gap-8 md:gap-10'>
            <div data-aos="zoom-in" className='lg:max-w-[468px] w-full flex flex-col justify-center lg:items-end xl:ms-0 lg:ms-[50px]'>
              <div className='lg:max-w-[468px] w-full'>
                <p className='font-inter font-medium text-base leading-custom-lg text-deep-blue pb-2'>LIBRARY</p>
                <h2 className='xl:text-custom-4xl xl:leading-custom-4xl sm:text-custom-3xl sm:leading-custom-3xl font-normal text-2xl lg:max-w-[468px]'>Extensive Exercise <span className='font-semibold'>Library</span></h2>
                <div className='flex gap-4 items-center mt-4 sm:mt-5'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal sm:text-base text-sm text-black opacity-70 lg:max-w-[361.44px]'>Utilize Yoomi’s HEP templates to quickly create and assign programs to your patients </p>
                </div>
                <div className='flex gap-4 items-center pt-2'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal sm:text-base text-sm text-black opacity-70 lg:max-w-[362.33px]'>Choose from our library of exercises for all patient cases</p>
                </div>
                <div className='flex gap-4 items-center pt-2'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal sm:text-base text-sm text-black opacity-70 lg:max-w-[371.44px]'>Use Yoomi’s industry-leading exercise generation tool to create your own exercises that track adherence and form in seconds</p>
                </div>
                <button className='font-inter rounded font-semibold sm:text-base text-sm leading-custom-lg sm:py-4 py-3 px-6 sm:px-8 sm:mt-10 mt-6 text-white bg-deep-blue hover:scale-[0.9] ease-out duration-300'>View the Library</button>
              </div>
            </div>
            <div className="block sm:mt-10 mt-4 ml-auto pt-8 rounded sm:pt-12 relative overflow-hidden lg:max-w-[569px] w-full">
              <Swiper
                // loop={true}
                spaceBetween={35}
                slidesPerView={1.2}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 35,
                  },
                  1024: {
                    slidesPerView: 1.2,
                  },
                }}
              >
                {[...Array(4)].map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      data-aos='zoom-in'
                      className="overflow-hidden group rounded xl:max-h-[315px] lg:max-h-[234px] relative max-h-[170px] sm:max-h-[303px] max-w-[460px] w-full"
                    >
                      <img
                        src={idx === 0 || idx === 2 ? sliderWorkout : sliderChair}
                        className='w-full h-full max-w-[461] pointer-events-none group-hover:scale-105 transition_slow'
                        alt='swiper-image'
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-center mt-3.5 gap-2.5">
                <Icon className="swiper-button-prev transition_slow group hover:bg-deep-blue hover:border-transparent cursor-pointer border border-black rounded-full" iconName='leftArrow' />
                <Icon className="swiper-button-next transition_slow group hover:bg-white cursor-pointer border border-deep-blue rounded-full bg-deep-blue" iconName='rightArrow' />
              </div>
              <div data-aos='zoom-in' className="bg-light-blue max-w-[520px] h-[150px] sm:h-[262px] absolute top-0 -right-3 w-full rounded"></div>
            </div>
          </div>
       </div>
      </div>
    </div>
  );
}

export default FeaturesSlider;
