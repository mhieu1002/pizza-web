import React, { useState } from "react";

const ShowPizza = (show, pizza) => {
  const [activeSize, setActiveSize] = useState(1);

  const size = [
    {
      id: 1,
      size: "Smaill 6”",
    },
    {
      id: 2,
      size: "Medium 9”",
      price: "+80.000đ",
    },
    {
      id: 3,
      size: "Large 12”",
      price: "+160.000đ",
    },
  ];

  const crust = [
    {
      value: "thinCrust",
      name: "Thin Crust",
    },
    {
      value: "handtossed",
      name: "Handtossed",
    },
    {
      value: "newYorkCrust",
      name: "New York Crust",
    },
  ];

  const check = () => {
    setActiveSize(1)
    show.setShow(!show.show)
  }
  return (
    <form
      action=""
      className={show.show ? "show-form open-show-form" : "show-form"}
    >
      <i
        className="fas fa-times show-close"
        onClick={() => check()}
      ></i>
      <div className="show-pizza">
        <div className="show-pizza-left">
          <img src={show.pizza.img} />
          {activeSize === 1 && (
            <span>{show.pizza.price + show.pizza.vnd}</span>
          )}
          {activeSize === 2 && (
            <span>{show.pizza.price + 80 + show.pizza.vnd}</span>
          )}
          {activeSize === 3 && (
            <span>{show.pizza.price + 160 + show.pizza.vnd}</span>
          )}
        </div>

        <div className="show-pizza-right">
          <div className="boder-top"></div>
          <h3>{show.pizza.title}</h3>
          <p>SIZE</p>
          <div className="size">
            {size.map((item, index) => (
              <div
                className={
                  activeSize === item.id
                    ? "size-box size-box-active"
                    : "size-box"
                }
                key={index}
                onClick={() => setActiveSize(item.id)}
              >
                <span>{item.size}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <p>CRUST</p>
          <div className="crust">
            {crust.map((item, index) => (
              <div className="crust-radio" key={index}>
                <input name="crust" type="radio" value={item.value} checked/>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <button className="btn-w100">Add To Cart</button>
        </div>
      </div>
    </form>
  );
};

export default ShowPizza;
