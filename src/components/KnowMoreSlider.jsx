import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import AOS from 'aos';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'aos/dist/aos.css';

import sliderMen from '../assets/images/webp/slider-men-image.webp';
import sliderWomen from '../assets/images/webp/slider-women.webp';
import sliderDocter from '../assets/images/webp/slider-docter-image.webp';

const KnowMoreSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="md:pt-12 pt-6 xl:pb-[92px] md:pb-[60px] pb-10">
      <div className="container">
        <p data-aos="zoom-in" className="mx-auto w-fit text-deep-blue font-inter uppercase font-medium text-sm sm:text-base pb pb-3 xl:pb-4">
          Know More
        </p>
        <h2 data-aos="fade-up" className='xl:text-custom-6xl sm:text-3xl text-2xl xl:leading-custom-5xl max-w-[615px] mx-auto font-normal lg:pb-14 sm:pb-7 pb-6 text-center'>And Used by the Biggest <span className='font-semibold'>Figures in Sports and Rehab</span></h2>
        <div data-aos="zoom-in" className="max-w-[946px] w-full mx-auto">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {[sliderMen, sliderDocter, sliderWomen, sliderDocter].map((imgSrc, idx) => (
              <SwiperSlide key={idx}>
                <div className="max-w-[946px] rounded-2xl w-full overflow-hidden">
                  <img
                    src={imgSrc}
                    className="w-full max-h-[210px] sm:max-h-[296px] md:max-h-[360px] lg:max-h-[473px] h-full"
                    alt="sports"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div data-aos="zoom-in" className="max-w-[723px] mx-auto md:-ml-2.5 lg:ml-auto md:mt-5 lg:pt-0.5">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={22}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2.9,
                  spaceBetween: 22,
                },
                768: {
                  slidesPerView: 3.9,
                },
              }}
            >
              {[sliderMen, sliderDocter, sliderWomen, sliderDocter, sliderMen, sliderDocter].map((imgSrc, idx) => (
                <SwiperSlide key={idx}>
                  <div className="sm:max-w-[152px] rounded w-full overflow-hidden hover:scale-110 transition-all duration-200 cursor-pointer">
                    <img
                      src={imgSrc}
                      className="w-[107px] max-w-[946px] sm:w-full min-h-[70px] max-h-[70px] sm:min-h-[100px] sm:max-h-[100px] lg:max-h-fit lg:min-h-[114px] h-full"
                      alt="sports"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMoreSlider;

