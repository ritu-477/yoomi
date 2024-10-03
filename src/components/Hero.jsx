import React from 'react'
import leftEllips from '../assets/images/webp/hero-left-ellips.webp'
import rightEllips from '../assets/images/webp/hero-right-ellips.webp'
import leftFlower from '../assets/images/webp/heroleft-tree.webp'
import rightFlower from '../assets/images/webp/heroright-tree.webp'

const Hero = () => {
  return (
    <div className='xl:pt-[123px] lg:pt-[100px] md:pt-[80px] sm:pt-[60px] pt-12 bg-off-white relative' id='about'>
      <div className='absolute left-0 top-[103px]'><img src={leftEllips} alt="left-ellips" className='xl:max-w-[258px] pointer-events-none xl:h-[208px] lg:max-w-[200px] lg:h-[180px] sm:max-w-[150px] sm:h-[100px] max-w-[70px] h-[50]' /></div>
      <div className='absolute right-0 top-[151px]'><img src={rightEllips} className='xl:max-w-[258px] xl:h-[208px] pointer-events-none lg:max-w-[200px] lg:h-[180px] sm:max-w-[150px] sm:h-[100px] max-w-[70px] h-[50]' alt="right-ellips"  /></div>
          <div className='container'>
        <h1 className='relative font-normal text-center max-w-[819.84px] text-3xl mx-auto md:text-custom-6xl md:leading-custom-5xl lg:text-custom-8xl lg:leading-custom-7xl text-black'><span className='font-extrabold'>Next Generation</span> Patient <span className='block relative after:absolute after:contents-[] after:w-[40px] after:h-[40px] after:bg-star after:bg-cover after:top-[16px] after:right-[-8px]'>Engagement and RTM Solution</span></h1>
        <p className='font-inter text-2xl leading-custom-xxl text-center text-black opacity-70 pt-5'>Industry Leading AI Motion-Tracking Technology</p>
        <form method='get' id='email-form' className='relative z-10'>
          <div className='bg-white max-w-[428.89px] rounded p-[5.62px_4px_5.62px_11px] mx-auto shadow-custom-xl sm:mt-8 mt-6 md:mt-12 lg:mt-[57px] flex justify-between items-center'>
            <input type="email" placeholder='Enter Your Email' required className='w-full outline-none font-inter font-medium text-base placeholder:text-black opacity-70  leading-custom-lg' />
            <button className='text-white text-nowrap ms-2 font-inter font-semibold text-base leading-custom-lg px-4 bg-deep-blue py-[13px] rounded hover:scale-[0.9] ease-out duration-300'>
              Get Started
            </button>
          </div>
        </form>
      </div>
      <div className='h-[2px] bg-sky-blue lg:mt-[127px] md:mt-[90px] sm:mt-[60px] mt-10'></div>
      <div className='lg:h-6 md:h-4 sm:h-3 h-2 bg-deep-blue'></div>
      <div className='h-[1.78px] bg-border-gray'></div>
      <div className='bg-ocean-blue md:pb-[150px] sm:pb-[100px] pb-[85px] lg:pb-[199px]'></div>
      <div className='lg: max-w-[1140px] md:m ax-w-[768px] flex justify-between relative mx-auto'>
        <div className='absolute bottom-[74px] lg:bottom-[158px] md:bottom-[112px] sm:bottom-[87px] xl:left-[-110px] max-xl:left-0'>
          <img className='md:max-w-[133px] sm:max-w-[60px] max-w-[45px] pointer-events-none' src={leftFlower} alt="flower" />
        </div>
        <div className='absolute bottom-[80px] md:bottom-[124px] lg:bottom-[177px] sm:bottom-[90px] sm:right-[87px] sm:right-[37px] right-0'>
          <img src={rightFlower} alt="right-flower" className='md:max-w-[68px] sm:max-w-[40px] max-w-[25px] -mb-1 pointer-events-none' />
        </div>
      </div>
      </div>
  )
}

export default Hero