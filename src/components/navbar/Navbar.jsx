import React from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/Logo.png";
import search from "../../assets/search.svg";
import login from "../../assets/Logout.svg";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const items = ["Home", "Shop", "Plant Care", "Blogs"];
  const item = items?.map((e, i) => <li key={i}>{e}</li>);
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <img src={logo} alt="logo" />
          <ul>{item}</ul>
          <div className="nav_icons">
            <img src={search} alt="search" />
            <IoCartOutline className="nav_cart" />
            <button>
              <img src={login} alt="login" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
