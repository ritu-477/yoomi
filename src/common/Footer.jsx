import React from 'react'
import footerLogo from '../assets/images/webp/footer-logo.webp'
import Icon from '../common/Icon';

const Footer = () => {
  return (
    <div className='bg-footer-bg bg-cover bg-center bg-no-repeat mt-24 pt-[213px]'>
      <div className='container'>
        <div className='flex-row flex flex-wrap -mx-3 justify-between'>
          <div className='lg:w-[25%] px-3 w-ful'>
            <a href=""><img src={footerLogo} alt="footer-logo" className='lg:max-w-[192px] max-w-[100px] pointer-events-none" alt="footer-logo' /></a>
            <p className='font-inter font-light text-sm text-white py-[29.82px] lg:max-w-[277px]'>I'm a
              paragraph Click here to add your own text and edit me. It’s easy. Just click “Edit Text</p>
            <a target='blank' href="mailto:contact@yoomi.com" className='text-white flex gap-[18px] max-w-[197px] font-light font-inter text-base leading-custom-lg hover:text-light-blue'><Icon className='max-w-[25px]' iconName='messageIcon' />contact@yoomi.com</a>
            <a href="callto:+123456789" className='text-white flex gap-[18px] font-inter text-base leading-custom-lg max-w-[146px] pt-4 hover:text-light-blue'><Icon className='max-w-[24px]' iconName='callIcon' /> +123
              456789</a>
          </div>
          <div className='lg:w-[33.33%] px-3 w-full lg:mt-0 mt-4'>
            <div className='flex-row flex flex-wrap -mx-3 justify-between'>
              <div className='lg:w-[33.33%] px-3 sm:w-[33.33%] w-[50%]'>
                <ul className='ms-0 ps-0'>
                  <li className='font-semibold text-sm leading-4 font-inter text-white lg:pb-[18px] py-4 lg:pt-0'>About Us</li>
                  <li className='lg:pb-[18px] sm:pb-4 pb-3'><a className='font-inter font-normal leading-4 text-white text-sm text-nowrap hover:text-light-blue transition-all ease-linear' href="#team">Meet the Team</a></li>
                  <li className='lg:pb-[18px] sm:pb-4 pb-3'><a className='font-inter font-normal leading-4 text-white text-sm text-nowrap hover:text-light-blue transition-all ease-linear' href="#mission">Our Mission</a></li>
                  <li><a className='font-inter font-normal leading-4 text-white text-sm text-nowrap hover:text-light-blue transition-all ease-linear' href="#vision">Our Vision</a></li>
                </ul>
              </div>
              <div className='lg:w-[33.33%] px-3 sm:w-[33.33%] w-[50%] flex sm:justify-center justify-end'>
                <ul className='ms-0 ps-0'>
                  <li className='font-semibold text-sm leading-4 font-inter text-white lg:pb-[18px] py-4 lg:pt-0'>Contact Us</li>
                  <li className='lg:pb-[18px] sm:pb-4 pb-3'><a className='font-inter font-normal leading-4 text-white text-sm text-nowrap hover:text-light-blue transition-all ease-linear' href="https://x.com/i/flow/login">Twitter</a></li>
                  <li className='lg:pb-[18px] sm:pb-4 pb-3'><a target='blank' className='font-inter font-normal leading-4 text-white text-sm text-nowrap hover:text-light-blue transition-all ease-linear' href="https://www.instagram.com/">Instagram</a></li>
                  <li><a target='blank' className='font-inter font-normal leading-4 text-white text-sm text-nowrap hover:text-light-blue transition-all ease-linear' href="https://in.linkedin.com/">Linkedin</a></li>
                </ul>
              </div>
              <div className='lg:w-[16.66%] px-3 sm:w-[33.33%] w-full flex sm:justify-end justify-start sm:mt-0 mt-4'>
                <ul className='ms-0 ps-0'>
                  <li className='font-semibold text-sm leading-4 font-inter text-white lg:pb-[18px] py-4 lg:pt-0'>News</li>
                  <li className='lg:pb-[18px] sm:pb-4'><a className='font-inter font-normal leading-4 text-white text-sm text-nowrap hover:text-light-blue transition-all ease-linear' href="">Recent</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-medium-gray py-[22px] mt-10'>
          <div className='container'>
            <div className='flex sm:justify-end justify-center gap-6'>
              <a href="/" className='font-inter font-normal text-nowrap text-sm hover:text-light-blue transition-all ease-linear leading-4 text-gray'>Terms of Service</a>
              <a href="/" className='font-inter font-normal text-nowrap text-sm hover:text-light-blue transition-all ease-linear leading-4 text-gray'>Privacy Policy</a>
              <a href="/" className='font-inter font-normal text-nowrap text-sm hover:text-light-blue transition-all ease-linear leading-4 text-gray'>Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer