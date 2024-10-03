import React from 'react'
import newlatterLogo from '../assets/images/webp/newslatter-logo.webp'
import newslatterMen from '../assets/images/webp/newslatter-men.webp'
import newslatterRight from '../assets/images/webp/newslatter-right-image.webp'
const Newsletter = () => {
  return (
    <div className='-mb-[192px]'>
      <div className='container'>
        <div className='max-w-[1145px] bg-deep-blue xl:p-[38px_103px_19px_82px] lg:p-[38px_60px_19px_60px] rounded-[32px] sm:py-6 sm:px-6 px-5 py-8 relative '>
          <div className='sm:flex md:justify-between flex-wrap'>
            <div className='max-w-[442px] flex flex-col justify-center'>
              <img src={newlatterLogo} alt="newslatter-logo" className='lg:w-[228px] sm:w-[100px] w-[80px] h-[55px] pointer-events-none' />
              <p
                className='font-plusJakarta text-nowrap md:text-3xl text-xl md:leading-custom-3xl text-2 font-normal text-white sm:pt-7 pt-5'>
                Sign Up to Join <span className='font-semibold'>Our Newsletter</span></p>
              <form method='get' id='emailForm' className='shadow-custom-xl py-[5.62px] xl:mt-12 lg:mt-8 mt-5 ps-[11px] pe-1 text-center lg:max-w-[428px] max-w-[328px] bg-white flex justify-between w-full rounded'>
                <input type="text" placeholder="Enter Your Email" required className='font-inter font-medium xl:text-base sm:text-sm text-xs xl:leading-custom-lg !text-blue outline-none w-full mr-3 placeholder:text-blue opacity-70' />
                <button className='font-inter font-bold xl:text-base sm:text-sm text-xs xl:leading-custom-lg text-white bg-deep-blue xl:py-[13px] md:py-3 py-2.5 xl:px-4 md:px-3.5 px-3 rounded text-end hover:scale-95 duration-300 text-nowrap'>Get
                  Started</button>
              </form>
            </div>
            <img src={newslatterMen} alt="" className='lg:max-w-[300px] pointer-events-none md:max-w-[190px] max-w-[200px] max-md:text-center max-md:mx-auto lg:mt-0 mt-5' />
            <div className='absolute right-0 bottom-0'>
              <img src={newslatterRight} alt="" className='pointer-events-none lg:w-[182px] w-[145px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter