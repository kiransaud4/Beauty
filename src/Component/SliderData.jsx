import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles'
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SliderData() {
  return (
    <>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/a70da661-25ff-45d3-84c8-4144c4db85d6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/58dc0169-a3e2-4800-804f-b655258aa4c8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/c5624ff3-be8f-4aeb-99ac-03f156ffa8b1.jpg" alt="" /></SwiperSlide>
             </Swiper>
    </>
  )
}
