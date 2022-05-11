import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "./SearchForm"
import User from "./User";

const Header = () => {
  const navlist = [
    {
      display: "Home",
      href: "#home",
    },
    {
      display: "About",
      href: "#about",
    },
    {
      display: "Menu",
      href: "#menu",
    },
    {
      display: "Review",
      href: "#review",
    },
    {
      display: "Order",
      href: "#order",
    },
    {
      display: "FAQ",
      href: "#faq",
    },
  ];

  const [active, setActive] = useState(false);
  const [page, setPage] = useState("Home");
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if(window.scrollY < 580) {
  //       setPage("Home")
  //     }
  //     if(window.scrollY > 580) {
  //       setPage("About")
  //     }
  //     if(window.scrollY > 1270) {
  //       setPage("Menu")
  //     }
  //   })
  // }, [])

  return (
    <div>
      <header>
        <a href="#" className="logo">
          Pizza.
        </a>

        <nav className={active ? "navbar active" : "navbar"}>
          {navlist.map((item, index) => (
            <a
              className={page === item.display ? "on-button" : null}
              href={item.href}
              key={index}
              onClick={() => setPage(item.display)}
            >
              {item.display}
            </a>
          ))}
        </nav>

        <div className="icons">
          <i
            className={
              active ? "fas fa-times menu-bars" : "fas fa-bars menu-bars"
            }
            onClick={() => setActive(!active)}
          ></i>
          <i 
            className="fas fa-search"
            onClick={() => setSearch(!search)}
          ></i>
          <i 
            className="fas fa-user"
            onClick={() => setUser(!user)}
          ></i>
          <a href="#" className="fas fa-shopping-cart"></a>
        </div>
      </header>
      
      <SearchForm search={search} setSearch={setSearch} />
      <User user={user} setUser={setUser} />
    </div>
  );
};

export default Header;
