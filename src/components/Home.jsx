import React from "react";
import home1 from "../assets/images/home-img-1.png";
import home2 from "../assets/images/home-img-2.png";
import home3 from "../assets/images/home-img-3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Home = () => {
  const list = [
    {
      about: "NEW",
      title: "Cheesy Bites Trio Shrimp",
      content:
        "Shrimp, Onions, Red Capsicums, Pineapples, Black Olives, Parsley, Mozzarella Cheeses On Garlic-Parsley Butter Sauce",
      img: home1
    },
    {
      about: "NEW",
      title: "Hawaiian Paradise",
      content:
        "Hawaiian-Flavored Pizza With Hams And Pineapples",
      img: home2
    },
    {
      about: "NEW",
      title: "Veggie Supreme",
      content:
        "Black Olives, Fresh Cherry Tomatoes, Mushrooms, Pineapples, Sweet Corns, Onions On Top Of Mozzarella Cheese",
      img: home3
    },
  ];

  return (
    <section className="home" id ="home">
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
          {list.map((item, index) => (
            <SwiperSlide className="slide" key={index}>
              <div className="content">
                <span>{item.about}</span>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <a href="#menu" className="btn">
                  Order Now
                </a>
              </div>
              <div className="image">
                <img src={item.img} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Home;
