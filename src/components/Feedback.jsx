import React from 'react'
import Icon from '../common/Icon'
import feedbackImg from '../assets/images/webp/feedback-image.webp'
import womenImg from '../assets/images/webp/women-image.webp'
import percentageImg from '../assets/images/webp/percentage-circle.webp'

const Feedback = () => {
  return (
    <div className='lg:py-11 md:py-8 py-6'>
      <div className='container'>
        <div className='rounded-[32px] shadow-custom-xxl lg:p-[57px_28px_58px_71px] md:p-10 sm:p-8 p-6'>
          <div className='lg:flex-row flex justify-between flex-col-reverse'>
            <div className='max-w-[552.64px] flex lg:justify-center items-center relative lg:mt-0 mt-6'>
              <img src={feedbackImg} alt="feedback-image" className='max-w-[490px] w-full' />
              <img src={womenImg} alt="women-image" className='lg:max-w-[217.7px] lg:block hidden absolute xl:top-[35px] top-[55px] left-[-20px] xl:left-[-33.97px]' />
              <img src={percentageImg} className='absolute lg:right-[-40px] xl:max-w-[120px] lg:max-w-[110px] md:max-w-[80px] md:right-[47px] sm:top-[-16px] xl:top-[37px] lg:top-[62px] max-w-[52px] top-0 right-0 sm:max-w-[70px] sm:right-[30px]' alt="percentage-image" />
            </div>
            <div className='max-w-[468px] flex flex-col lg:items-end xl:ms-0 lg:ms-[50px]'>
              <div>
                <p className='font-inter font-medium text-base leading-custom-lg text-deep-blue'>TRACKING</p>
                <h2 className='xl:text-custom-4xl xl:leading-custom-4xl sm:text-custom-3xl sm:leading-custom-3xl font-normal text-2xl max-w-[468px]'>Cutting Edge Motion <span className='font-semibold'>Tracking/ <span className='lg:block'>Feedback</span> </span></h2>
                <div className='flex gap-4 items-center mt-5'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal text-base text-black opacity-70 max-w-[361.44px]'>Provides a holistic, real-time analysis of patient exercise form, capturing 300+ data points and critical metrics.</p>
                </div>
                <div className='flex gap-4 items-center pt-2'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal text-base text-black opacity-70 max-w-[362.33px]'>Delivers immediate feedback and guidance to correct and improve exercise form</p>
                </div>
                <div className='flex gap-4 items-center pt-2'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal text-base text-black opacity-70 max-w-[371.44px]'>Supported by the most accurate motion-tracking model designed for rehabilitation, Yoomi Vision</p>
                </div>
                <div className='flex gap-4 items-center pt-2'>
                  <Icon iconName="click" />
                  <p className='font-inter font-normal text-base text-black opacity-70 max-w-[400.44px]'>Requires no custom hardware, sensors, or equipment</p>
                </div>
                <button className='font-inter font-semibold text-base leading-custom-lg py-4 sm:mt-10 mt-6  text-white px-8 bg-deep-blue hover:scale-[0.9] ease-out duration-300'>Test it Yourself</button> 
              </div>
            
            </div>
           </div>
            </div>
      </div>
    </div>
  )
}

export default Feedback 