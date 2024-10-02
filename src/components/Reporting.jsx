import React from 'react'
import reportImg from '../assets/images/webp/report-image.webp'
import rangeImg from '../assets/images/webp/range-image.webp'
import daysImg from '../assets/images/webp/days-image.webp'

const Reporting = () => {
  return (
    <div className='lg:py-11 md:py-8 py-6'>
      <div className='container'>
        <div className='rounded-[32px] shadow-custom-xxl lg:p-[89px_37.45px_106.49px_34px] md:p-[40px_37.45px_106.49px_34px] sm:p-[30px_30px_106.49px_30px] p-[24px_24px_90px_24px]'>
          <div className='lg:flex-row flex justify-between flex-col gap-6 sm:gap-8 md:gap-10'>
            <div className='lg:max-w-[404px] w-full flex flex-col justify-center'>
              <p className='font-inter text-base leading-custom-lg text-deep-blue font-medium pb-2'>REPORT</p>
              <h2 className='xl:text-custom-4xl xl:leading-custom-4xl sm:text-custom-3xl sm:leading-custom-3xl font-normal text-2xl'>Reporting <span className='font-semibold'>+ Analytics</span></h2>
              <p className='font-inter text-base text-black opacity-70 lg:max-w-[385px] pt-4 sm:pt-5'>Track patient progress over time with compliance, pain, RPE, ROM and other key metrics</p>
              <div className='sm:mt-9 mt-6'>
                <button className='font-inter font-semibold text-base leading-custom-lg py-4 text-white px-5 bg-deep-blue hover:scale-[0.9] ease-out duration-300'>View the Matrics</button> 
              </div>
            </div>
            <div className='max-w-[549.22px] w-full relative mt-6 lg:mt-0 lg:justify-start justify-center flex mx-auto'>
              <img src={reportImg} alt="report-image" className='max-w-[549.22px] w-full' />
              <img src={rangeImg} alt="range-image" className='absolute top-[-5px] md:top-[-30px] lg:top-[-40px] lg:left-[-68px] md:max-w-[264px] md:left-[-54px] left-[-10px] sm:left-[-5px] max-w-[130px] sm:max-w-[200px] lg:max-w-[282px] shadow-custom-xxl' />
              <img src={daysImg} alt="days-image" className='absolute bottom-[-40px] sm:bottom-[-51px] sm:right-[24px] max-w-[128px] right-[14px] sm:max-w-[201.51px] shadow-custom-xxl' />
            </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default Reporting