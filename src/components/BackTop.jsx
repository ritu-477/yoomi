import React, { useEffect, useState } from 'react';
import Icon from '../common/Icon'

export const BackTop = () => {
    const [visible, setValue] = useState(false);
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const checkScroll = () => {
        if (window.scrollY > 200) {
            setValue(true);
        } else {
            setValue(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <div className='relative'>
            <a href='#'
                className='border border-white bg-deep-blue p-4 absolute bottom-4 right-4 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center '
                onClick={scrollToTop}
            >
                <Icon iconName="arrow" />
            </a>
        </div>
    );
};

export default BackTop;


