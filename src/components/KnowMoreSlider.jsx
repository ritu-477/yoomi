
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import sliderMen from '../assets/images/webp/slider-men-image.webp';
import sliderWomen from '../assets/images/webp/slider-women.webp';
import sliderDocter from '../assets/images/webp/slider-docter-image.webp'

const KnowMoreSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="py-3.5">
      <div className="container">
        <p data-aos='zoom-in' className="mx-auto w-fit text-deep-blue font-inter uppercase font-medium text-sm sm:text-base">Know More</p>
        <div data-aos='zoom-in' className='max-w-[946px] w-full mx-auto'>
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {[...Array(4)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className="max-w-[946px] rounded-2xl w-full overflow-hidden">
                  <img
                    src={idx === 0 ? sliderMen : idx === 1 ? sliderDocter : idx === 2 ? sliderWomen : sliderDocter}
                    className='w-full max-h-[156px] sm:max-h-[296px] md:max-h-[360px] lg:max-h-[473px] h-full'
                    alt='sports'
                    width={1892}
                    height={946}
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div data-aos='zoom-in' className="max-w-[723px] mx-auto md:-ml-2.5 lg:ml-auto md:mt-5 lg:pt-0.5">
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
              {[...Array(6)].map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="sm:max-w-[152px] rounded w-full overflow-hidden hover:scale-110 transition_slow cursor-pointer">
                    <img
                      src={idx === 0 ? sliderMen : idx === 1 ? sliderDocter : idx === 2 ? sliderWomen : sliderDocter}
                    className='w-[107px] sm:w-full min-h-[70px] max-h-[70px] sm:min-h-[100px] sm:max-h-[100px] lg:max-h-fit lg:min-h-[114px] h-full'
                    alt='sports'
                    width={1892}
                    height={946}
                    priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div >
  );
};

export default KnowMoreSlider;

