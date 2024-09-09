import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperImage } from '../../db/db.js';
import './Swiper.css';

const swipe = swiperImage();

export default function Slider() {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >

				{swipe.map((item) => (
          <SwiperSlide key={item.id} className="swiper-card">
            <img src={item.img} alt={item.title} />
						<div className="swiper-text">
							<h2>{item.title}</h2>
							<p>{item.price}</p>
						</div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
