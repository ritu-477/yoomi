import React from 'react'
import leftEllips from '../assets/images/webp/hero-left-ellips.webp'
import rightEllips from '../assets/images/webp/hero-right-ellips.webp'
import leftFlower from '../assets/images/webp/heroleft-tree.webp'
import rightFlower from '../assets/images/webp/heroright-tree.webp'

const Hero = () => {
  return (
    <div className='xl:pt-[123px] lg:pt-[100px] md:pt-[80px] sm:pt-[60px] pt-8 bg-off-white relative' id='about'>
      <div className='absolute left-0 top-[90px] sm:top-[103px]'><img src={leftEllips} alt="left-ellips" className='xl:max-w-[258px] pointer-events-none xl:h-[208px] lg:max-w-[200px] lg:h-[180px] sm:max-w-[80px] md:max-w-[120px] md:h-[110px] sm:h-[80px] max-w-[40px]' /></div>
      <div className='absolute right-0 top-[120px] sm:top-[151px]'><img src={rightEllips} className='xl:max-w-[258px] xl:h-[208px] pointer-events-none lg:max-w-[200px] lg:h-[180px] sm:max-w-[80px] md:max-w-[120px] md:h-[110px] sm:h-[80px] max-w-[40px]' alt="right-ellips"  /></div>
      <div className='container'>
        <h1 className='font-normal relative z-10 xl:text-custom-8xl lg:text-5xl sm:text-4xl text-[27px] xl:leading-custom-7xl leading-[35px] text-black text-center mx-auto pb-3 sm:pb-5'><span className='font-extrabold'>Next Generation</span><span> Patient <span className='block'>Engagement and RTM <span className='relative after:absolute after:contents-[""] sm:after:-right-12 sm:after:top-4 lg:after:-top-4 after:bg-star sm:after:w-12 after:w-6 sm:after:h-12 after:h-6 after:bg-cover after:mt-2 sm:after:-mt-4 xl:after:mt-6 lg:after:mt-7'>Solution</span></span></span></h1>
        <p className='font-inter lg:text-2xl text-sm lg:leading-custom-xxl text-center text-black opacity-70'>Industry Leading AI Motion-Tracking Technology</p>
        <form method='get' id='email-form' className='relative z-10'>
          <div className='bg-white max-w-[300px] sm:max-w-[428.89px] rounded p-[5.62px_4px_5.62px_11px] mx-auto shadow-custom-xl sm:mt-8 mt-5 md:mt-12 lg:mt-[57px] flex justify-between items-center'>
            <input type="email" placeholder='Enter Your Email' required className='w-full outline-none font-inter font-medium sm:text-base placeholder:text-black opacity-70 text-sm leading-3 sm:leading-custom-lg' />
            <button className='text-white text-nowrap ms-2 font-inter text-sm leading-4 font-semibold sm:text-base sm:leading-custom-lg px-3 py-2 sm:px-4 bg-deep-blue sm:py-[13px] rounded hover:scale-[0.9] ease-out duration-300'>
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
        <div className='absolute bottom-[80px] md:bottom-[124px] lg:bottom-[177px] sm:bottom-[90px] md:right-[87px] sm:right-[60px] right-0'>
          <img src={rightFlower} alt="right-flower" className='md:max-w-[68px] sm:max-w-[40px] max-w-[25px] -mb-1 pointer-events-none' />
        </div>
      </div>
      </div>
  )
}

export default Hero