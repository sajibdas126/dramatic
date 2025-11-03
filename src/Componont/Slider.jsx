import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Import your images
import slide5 from "../assets/banner2.jpg";
import slide1 from "../assets/movie.jpg";
import slide3 from "../assets/banner.jpg";
import slide4 from "../assets/squad.webp";
import slide2 from "../assets/Wednesday.webp";

const Slider = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5];
    return (
          <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3000, // ⏱️ 3 seconds
          disableOnInteraction: false, // keeps autoplay even after user interaction
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // makes the slider loop infinitely
        className="mySwiper w-full h-[60vh] md:h-[70vh] lg:h-[80vh] "
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;