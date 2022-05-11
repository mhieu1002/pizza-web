import React from 'react'
import logo1 from '../assets/images/about-1.svg';
import logo2 from '../assets/images/about-2.svg';
import logo3 from '../assets/images/about-3.svg';

const About = () => {

  const list = [
    {
      title: "made with love",
      content: "Here you will find many delicious pizza, you can feel it's made with love and great passion and attention to detail",
      order: 'our menu',
      img: logo1
    },
    {
      title: "30 minutes delivery",
      content: "Our delivery time is based on the number of orders. In usual our delivery time is 20 - 30 minutes",
      order: 'our menu',
      img: logo2
    },
    {
      title: "share with friends",
      content: "Create Stories from your favorite memories, Finally enjoy and remember to share with friends!",
      order: 'our menu',
      img: logo3
    },
  ]
  return (
    <div className="w100" id="about">
      <section className="about">
      <h1>about us</h1>
      <div className="box-container">
        {list.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.img} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <a href= '#menu' className="btn-w100">{item.order}</a>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  )
}

export default About