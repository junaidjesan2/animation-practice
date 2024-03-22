import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./stylex.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  const Images = [
    { id: 1, img: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { id: 2, img: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { id: 3, img: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { id: 4, img: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { id: 5, img: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { id: 6, img: "https://swiperjs.com/demos/images/nature-6.jpg" },
    { id: 7, img: "https://swiperjs.com/demos/images/nature-7.jpg" },
    { id: 8, img: "https://swiperjs.com/demos/images/nature-8.jpg" },
  ];
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
