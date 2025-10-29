import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// ইমেজগুলো ইমপোর্ট করো
import img1 from "../assets/banner.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/movie.jpg";
import img4 from "../assets/squad.webp";
import img5 from "../assets/Wednesday.webp";

export default function ImageCarousel() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="w-full py-6">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500, // প্রতি 2.5 সেকেন্ড পর slide বদলাবে
          disableOnInteraction: false, // ইউজার ইন্টারঅ্যাকশনেও autoplay বন্ধ হবে না
        }}
        className="mySwiper"
       
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full md:h-full  lg:h-full object-cover  transition-transform duration-300 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
