import React from "react";
import user1 from "../assets/images/user-1.jpg";
import user2 from "../assets/images/user-2.jpg";
import user3 from "../assets/images/user-3.jpg";
import user4 from "../assets/images/user-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

const Review = () => {
  const list = [
    {
      img: user1,
      name: "Minh Hieu",
      content:
        "Consistently great pizza with great variety of toppings and styles. Service is fast too. Can’t go wrong with this place",
    },
    {
      img: user2,
      name: "Mac Khai",
      content:
        "They offer an awesome range of fresh pizzas. I liked dining here. Staff members are always friendly, prices are rea",
    },
    {
      img: user3,
      name: "Huu An",
      content:
        "I had the best pizza of my life. Since then I have visited this place numerous times and this pizza has still not changed",
    },
    {
      img: user4,
      name: "Khanh Duy",
      content:
        "The service and the food were both excellent. I have never had a bad experience and and the spot is always kept clean",
    },
  ];

  return (
    <section className="review" id="review">
      <h1 className="heading">Review</h1>
      <Swiper
        centeredSlides={true}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.75": {
            slidesPerView: 2,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {list.map((item, index) => (
          <SwiperSlide className="review-slider" key={index}>
            <div className="slide">
              <i className="fas fa-quote-right"></i>
              <div className="user-edit">
                <img src={item.img} />
                <div className="user-info">
                  <h3>{item.name}</h3>
                </div>
              </div>
              <p>{item.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
