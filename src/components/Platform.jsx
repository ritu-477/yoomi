import React from 'react'
import cardFirst from '../assets/images/webp/card-image.webp'
import platformEllips from '../assets/images/webp/platform-right-ellips.webp'

const Platform = () => {
  return (
    <div className='lg:py-[79px] md:py-14 sm:py-9 py-6 bg-light-gray lg:my-11 md:my-8 my-6 relative' id='team'>
      <div className='absolute right-0 top-0'><img src={platformEllips} alt="paltform-ellips" className='sm:max-w-[100px] max-w-[50px]' /></div>
      <div className='container'>
        <p className='font-inter text-base leading-custom-lg text-deep-blue font-medium pb-2 text-center'>PLATFORM</p>
        <h2 className='xl:text-custom-6xl sm:text-3xl text-2xl xl:leading-custom-5xl font-normal pb-4 text-center'>Through <span className='font-semibold'>Our Platform</span></h2>
        <p className='font-inter text-base leading-custom-lg text-black opacity-70 text-center'>We’ve helped out partners and patients achieve</p>
        <div className='flex flex-wrap gap-[29px] md:pt-10 pt-8 lg:pt-[59px] mx-auto justify-center'>
          <div className='p-5 w-full h-[207px] max-w-[268px] flex justify-center items-center flex-col relative bg-green'>
            <p className='font-inter md:text-6xl md:leading-custom-8xl sm:text-5xl text-4xl text-white font-semibold'>50%</p>
            <p className='text-xl leading-custom-2xl font-normal font-inter text-white max-w-[148px] text-center'>Reduction in Pain</p>
            <img src={cardFirst} alt="card-image" className='absolute max-w-[90px] right-0 bottom-0 pointer-events-none' />
          </div>
          <div className='p-5 w-full h-[207px] max-w-[268px] flex justify-center items-center flex-col relative bg-light-blue'>
            <p className='font-inter md:text-6xl md:leading-custom-8xl sm:text-5xl text-4xl text-white font-semibold'>90%</p>
            <p className='text-xl leading-custom-2xl font-normal font-inter text-white max-w-[184.96px] text-center'>Increase In-Patient Satisfaction</p>
            <img src={cardFirst} alt="card-image" className='absolute max-w-[90px] right-0 bottom-0 pointer-events-none' />
          </div>
          <div className='p-5 w-full h-[207px] max-w-[268px] flex justify-center items-center flex-col relative bg-deep-blue'>
            <p className='font-inter md:text-6xl md:leading-custom-8xl sm:text-5xl text-4xl text-white font-semibold'>60%</p>
            <p className='text-xl leading-custom-2xl font-normal font-inter text-white text-center pb-5'>Faster Recovery</p>
            <img src={cardFirst} alt="card-image" className='absolute max-w-[90px] right-0 bottom-0 pointer-events-none' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platform