import React from 'react'
import nihImg from '../assets/images/webp/nih-image.webp'
import carolImg from '../assets/images/webp/carol-image.webp'
import rwjImg from '../assets/images/webp/rwj-image.webp'
import fofImg from '../assets/images/webp/fof-image.webp'
import foundedImg from '../assets/images/webp/founded-image.webp'

const Partners = () => {
  return (
    <div className='lg:py-[43px] md:py-8 py-6'>
      <div className='container'>
        <p className='font-inter text-base leading-custom-lg text-deep-blue font-medium pb-2 text-center'>PARTNERS</p>
        <h2 className='xl:text-custom-6xl sm:text-3xl text-2xl xl:leading-custom-5xl font-normal text-center max-w-[684px] mx-auto'>Recognized by Leading <span className='font-semibold'>Healthcare Institutions</span></h2>
        <div className='flex lg:gap-7 gap-5 max-lg:flex-wrap justify-center sm:pt-9 pt-7'>
          <div className='w-[207px] h-[137px] flex items-center justify-center border shadow-custom-4xl hover:shadow-custom-5xl bg-white border-gray-light rounded p-10'>
            <img src={nihImg} alt="nig-image" className='max-w-[92.73px] pointer-events-none' />
          </div>
          <div className='w-[207px] h-[137px] flex items-center justify-center border shadow-custom-4xl hover:shadow-custom-5xl bg-white border-gray-light rounded p-10'>
            <img src={carolImg} alt="nig-image" className='max-w-[82px] pointer-events-none' />
          </div>
          <div className='w-[207px] h-[137px] flex items-center justify-center border shadow-custom-4xl hover:shadow-custom-5xl bg-white border-gray-light rounded p-10'>
            <img src={rwjImg} alt="nig-image" className='max-w-[96.37px] pointer-events-none' />
          </div>
          <div className='w-[207px] h-[137px] flex items-center justify-center border shadow-custom-4xl hover:shadow-custom-5xl bg-white border-gray-light rounded p-10'>
            <img src={fofImg} alt="nig-image" className='max-w-[77.68px] pointer-events-none' />
          </div>
          <div className='w-[207px] h-[137px] flex items-center justify-center border shadow-custom-4xl hover:shadow-custom-5xl bg-white border-gray-light rounded p-10'>
            <img src={foundedImg} alt="nig-image" className='max-w-[92.53px] pointer-events-none' />
          </div>
        </div>
     </div>
    </div>
  )
}

export default Partners