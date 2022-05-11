import React, { useState } from "react";
import ShowPizza from "./ShowPizza";
import data from "../data/data";

const Menu = () => {
  const [noOfElement, setNoOfElement] = useState(9);
  const [show, setShow] = useState(false);
  const [pizza, setPizza] = useState({});

  const loadMore = () => {
    setNoOfElement(noOfElement + 3);
  };

  const slice = data.pizzaData.slice(0, noOfElement);

  const check = (item) => {
    setPizza(item);
    setShow(!show);
  };

  return (
    <div className="w100" id="menu">
      <section className="menu">
        <h1>our menu</h1>
        <div className="box-container">
          {slice.map((item, index) => (
            <div className="box" key={index}>
              <i
                className="fas fa-eye menu-eye"
                onClick={() => check(item)}
              ></i>
              <img src={item.img} />
              <h3>{item.title}</h3>
              <span>{item.price + item.vnd}</span>
              <a onClick={() => check(item)} className="btn">
                {item.add}
              </a>
            </div>
          ))}
        </div>
        <h3 className="load-more" onClick={() => loadMore()}>
          Load More...
        </h3>
      </section>

      <ShowPizza 
        show={show} 
        setShow={setShow} 
        pizza={pizza} 
        setPizza={setPizza}
      />
    </div>
  );
};

export default Menu;
