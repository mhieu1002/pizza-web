import React from "react";

const Footer = () => {
  const list = [
    {
      class: "fas fa-phone",
      title: "phone number",
      content: "098-137-2100",
    },
    {
      class: "fas fa-map-marker-alt",
      title: "our address",
      content: "Tp. Hồ Chí Minh",
    },
    {
      class: "fas fa-clock",
      title: "opening hours",
      content: "9:00 AM to 23:00 PM",
    },
    {
      class: "fas fa-envelope",
      title: "email address",
      content: "hieeus22@gmail.com",
    },
  ];
  return (
    <div className="w100">
      <section className="footer">
        <div className="box-container">
          {list.map((item, index) => (
            <div className="box" key={index}>
              <i className={item.class}></i>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Footer;
