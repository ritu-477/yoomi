import React from 'react'
import Icon from '../common/Icon'
import feedbackImg from '../assets/images/webp/feedback-image.webp'
import womenImg from '../assets/images/webp/women-image.webp'
import percentageImg from '../assets/images/webp/percentage-circle.webp'
import leftEllips from '../assets/images/webp/tracking-left-ellips.webp'
import rightEllips from '../assets/images/webp/tracking-right-ellips.webp'

const Feedback = () => {
  return (
    <div className='lg:py-11 md:py-8 py-6 relative' id='vision'>
      <div className='absolute left-0 top-[-126px] -z-10'><img src={leftEllips} className='lg:max-w-[303px] md:max-w-[280px] max-w-[150px]' alt="tracking-ellips" /></div>
      <div className='absolute right-0 bottom-[-160px] -z-10'><img src={rightEllips} className='lg:max-w-[303px] md:max-w-[280px] max-w-[150px]' alt="tracking-ellips" /></div>
      <div className='container'>
        <div className='rounded-[32px] shadow-custom-xxl lg:p-[57px_28px_58px_71px] md:p-10 sm:p-8 p-6 relative z-10 bg-white'>
          <div className='lg:flex-row flex justify-between flex-col-reverse gap-6 sm:gap-8 md:gap-10'>
            <div className='lg:max-w-[552.64px] w-full flex justify-center lg:justify-start items-center relative'>
              <img src={feedbackImg} alt="feedback-image" className='max-w-[490px] w-full mt-6 lg:mt-0 pointer-events-none' />
              <img src={womenImg} alt="women-image" className='lg:max-w-[217.7px] max-w-[200px] rounded shadow-custom-xxl sm:block hidden absolute pointer-events-none xl:top-[35px] top-[-5px] left-[2px] md:left-0 lg:top-[55px] lg:left-[-20px] xl:left-[-33.97px]' />
              <img src={percentageImg} className='absolute lg:right-[-40px] sm:block hidden xl:right-0 xl:max-w-[120px] pointer-events-none lg:max-w-[110px] md:max-w-[80px] md:right-[47px] sm:top-[-16px] xl:top-[37px] lg:top-[62px] sm:max-w-[70px] sm:right-[30px]' alt="percentage-image" />
            </div>
            <div className='max-w-[468px] w-full flex flex-col lg:items-end xl:ms-0 lg:ms-[50px]'>
              <div className='lg:max-w-[468px] w-full'>
                <p className='font-inter font-medium text-base leading-custom-lg text-deep-blue'>TRACKING</p>
                <h2 className='xl:text-custom-4xl xl:leading-custom-4xl sm:text-custom-3xl sm:leading-custom-3xl font-normal text-2xl lg:max-w-[468px]'>Cutting Edge Motion <span className='font-semibold'>Tracking/ <span>Feedback</span> </span></h2>
                <div className='flex gap-4 items-center mt-5'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal text-base text-black opacity-70 lg:max-w-[361.44px]'>Provides a holistic, real-time analysis of patient exercise form, capturing 300+ data points and critical metrics.</p>
                </div>
                <div className='flex gap-4 items-center pt-2'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal text-base text-black opacity-70 lg:max-w-[362.33px]'>Delivers immediate feedback and guidance to correct and improve exercise form</p>
                </div>
                <div className='flex gap-4 items-center pt-2'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal text-base text-black opacity-70 lg:max-w-[371.44px]'>Supported by the most accurate motion-tracking model designed for rehabilitation, Yoomi Vision</p>
                </div>
                <div className='flex gap-4 items-center pt-2'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal text-base text-black opacity-70 lg:max-w-[400.44px]'>Requires no custom hardware, sensors, or equipment</p>
                </div>
                <button className='font-inter font-semibold text-base leading-custom-lg py-4 sm:mt-10 mt-6 text-white rounded px-8 bg-deep-blue hover:scale-[0.9] ease-out duration-300'>Test it Yourself</button> 
              </div>
            
            </div>
           </div>
            </div>
      </div>
    </div>
  )
}

export default Feedback 