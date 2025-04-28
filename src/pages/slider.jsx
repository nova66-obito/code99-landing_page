import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FaStar } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../pages/review.css"
export default function Slider() {
  return (
    <>
      <div className="container" id="review">
        <h1 className="heading">What Our Student Says</h1>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: false,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className='student_says'>
              <div className="icon-s"><h1><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h1></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, doloribus.</p>
              <h3>Sree Ram</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='student_says'>
              <div className="icon-s"><h1><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h1></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
              <h3>Akash</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='student_says'>
              <div className="icon-s"><h1><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h1></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
              <h3>Sheik</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='student_says'>
              <div className="icon-s"><h1><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h1></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
              <h3>Saadh</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='student_says'>
              <div className="icon-s"><h1><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></h1></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempora.</p>
              <h3>Priya</h3>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <div><MdArrowBackIosNew  style={{ fontSize: "35px" }} /><p style={{ color: "white", fontSize: "20px", fontWeight: "600",position:"relative",top:"6px" }}>Prev</p></div>
            </div>
            <div className="swiper-button-next slider-arrow">
              <div><p style={{ color: "white", fontSize: "20px", fontWeight: "600",position:"relative",top:"6px" }}>Next</p><MdArrowForwardIos style={{ fontSize: "35px"}} /></div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

    </>
  )
}