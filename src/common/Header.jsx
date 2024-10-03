
import React, { useEffect, useState } from 'react';
import navLogo from '../assets/images/webp/nav-logo.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };


  useEffect(() => {

        const toggleMenu = () => {
            if (window.innerWidth < 1024) {
                document.body.style.overflow = !isMenuOpen ? "" : "hidden";
            }
            else {
                document.body.style.overflow = "";
            }
        }


        toggleMenu();
        window.removeEventListener("resize", toggleMenu);
        return () => {
            window.removeEventListener("resize", toggleMenu);
            document.body.style.overflow = "";
        }
    }, [isMenuOpen])


    return (
        <div className="flex w-full mx-auto items-center py-[25.5px] relative z-20 bg-off-white">
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <a href=""><img src={navLogo} alt="nav-logo" className='md:max-w-[118px] md:h-[30px] max-w-[80px]' /></a>
                    <div
                        onClick={toggleMenu}
                        className='menuIcon relative max-sm:w-[24px] max-sm:h-[20px] max-lg:w-[38px] max-lg:h-[28px] z-[15] max-lg:flex max-lg:justify-between max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden'
                    >
                        {isMenuOpen ? (
                            <>
                                <span className="h-[4px] absolute top-3 w-full bg-deep-blue transform rotate-45 transition duration-300"></span>
                                <span className="h-[4px] absolute top-3 w-full bg-deep-blue transform -rotate-45 transition duration-300"></span>
                            </>
                        ) : (
                            <>
                                <span className="h-[4px] w-full bg-deep-blue"></span>
                                    <span className="h-[4px] w-full bg-deep-blue"></span>
                                    <span className="h-[4px] w-full bg-deep-blue"></span>
                            </>
                        )}
                    </div>
                    <div className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'} z-10 gap-11 max-lg:gap-8 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-white max-lg:transition-all duration-300 flex items-center max-lg:min-h-screen`}>
                        <ul className='flex flex-col lg:flex-row gap-11 max-lg:gap-8 items-center lg:items-center z-10'>
                            <li onClick={toggleMenu}><a target='blank' className='font-inter font-medium text-lg leading-custom-xl text-black relative after:absolute hover:after:bg-black hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#about">About Us</a></li>
                            <li onClick={toggleMenu}><a target='blank' className='font-inter font-medium text-lg leading-custom-xl text-black relative after:absolute hover:after:bg-black hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#news">News</a></li>
                            <li className='lg:flex-row flex max-lg:flex-col items-center max-lg:gap-8'><a onClick={toggleMenu} target='blank' className='font-inter font-medium text-lg leading-custom-xl text-black relative after:absolute hover:after:bg-black hover:after:left-0 after:w-0 hover:after:w-full hover:after:h-[2px] after:left-0 hover:after:bottom-[-3px] after:ease-in-out after:duration-300' href="#contact">Contact Us</a>
                                <button className='text-white lg:ms-[27.87px] font-inter font-semibold text-base leading-custom-lg px-4 bg-deep-blue py-[13px] rounded hover:scale-[0.9] ease-out duration-300'>
                                    Get Started
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Header;