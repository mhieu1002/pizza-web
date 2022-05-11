import React, {useState} from "react";

const FAQ = () => {
  const list = [
    {
      id: 1,
      title: "How Do It Work?",
      content:
        "It consists of all the appliances needed to cook professionally. The technology regulates temperature, guarantees fresh pizzas are sold and keeps track of sales and inventory",
    },
    {
      id: 2,
      title: "How Long Does It Take For Delivery?",
      content:
        "Our Delivery Time Is Based On The Number Of Orders. In Usual Our Delivery Time Is 20 - 30 Minutes",
    },
    {
      id: 3,
      title: "Can I Order For Huge Parties?",
      content:
        "Yes, If you’re looking for quality and delicious pizza, get in touch with us today to see how we can help satisfy your cravings!",
    },
    {
      id: 4,
      title: "How Much Protein It Contains?",
      content:
        "Pizza may not seem like a superfood, but it can provide a range of essential nutrients, including protein",
    },
    {
      id: 5,
      title: "Is It Cooked With Oil?",
      content:
        "Using olive oil in your pizza dough is an excellent way to enhance its flavor. But don't worry if you're not used to using olive oil. You can always use other kinds of oils as well. You can also add a small amount of oil to your dough if you prefer",
    },
  ];

  const [active, setActive] = useState();

  return (
    <div className="w100" id="faq">
      <section className="faq">
        <h1 className="heading">FAQ</h1>
        <div className="accordion-container">
          {list.map((item, index) => (
            <div 
              className={active === item.id ? "accordion accordion-active" : "accordion"} 
              key={index}
              onClick={() => setActive(item.id)}
            >
              <div className="accordion-heading">
                <span>{item.title}</span>
                <i className="fas fa-angle-down"></i>
              </div>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
