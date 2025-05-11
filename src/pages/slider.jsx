import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import pre from '../images/prev.png'
import next from '../images/next.png'
import { FaStar } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../pages/review.css"
export default function Slider() {
  const arr = [1,2,3,4,5]
  return (
    <>
      <div className="reviews" id='reviews'>
        <h1 className="text-center">
          What Our Students <span style={{ color: "rgb(144, 217, 22)" }}>Says</span>
        </h1>
        <div>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            // pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <div className='star'> {arr.map((item) => {
                return (
                  <FaStar  className="stat-i"/>
                )
              })}  </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti.</p>
              <h2>Sri Ram</h2>
            </SwiperSlide>
            <SwiperSlide>
              <div className='star'>
                {arr.map((item) => {
                  return (
                    <FaStar  className="stat-i"/>
                  )
                })}
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti.</p>
              <h2>Akash</h2>
            </SwiperSlide>
            <SwiperSlide>
              <div className='star'>
                {arr.map((item) => {
                  return (
                    <FaStar  className="stat-i"/>
                  )
                })}
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti.</p>
              <h2>Priya</h2>
            </SwiperSlide>
            <SwiperSlide>
              <div className='star'>
                {arr.map((item) => {
                  return (
                    <FaStar className="stat-i"/>
                  )
                })}
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti.</p>
              <h2>Ramya</h2>
            </SwiperSlide>
            <SwiperSlide>
              <div className='star'>
                {arr.map((item) => {
                  return (
                    <FaStar  className="stat-i"/>
                  )
                })}
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti .</p>
              <h2>Rakesh</h2>
            </SwiperSlide>
            <SwiperSlide>
              <div className='star'>
                {arr.map((item) => {
                  return (
                    <FaStar  className="stat-i"/>
                  )
                })}
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti </p>
              <h2>Ravi</h2>
            </SwiperSlide>
            <SwiperSlide>
              <div className='star'>{arr.map((item) => {
                return (
                  <FaStar  className="stat-i"/>
                )
              })} </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis in unde? Mollitia vel qui reiciendis incidunt minima similique corrupti.</p>
              <h2>Suresh</h2>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <MdArrowForwardIos className='left' />
                <p><img src={pre} alt="prev" />PREV</p>
              </div>
              <div className="swiper-button-next slider-arrow">
                <p>NEXT <img src={next} alt="next" /></p>
                <MdArrowBackIosNew className='right' />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
}