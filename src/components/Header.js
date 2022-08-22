import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/prime-video-logo.png"
import { BsSearch } from 'react-icons/bs'
import icon from "../assets/images/icon.png"

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_content">
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="tvseries">TV Series</Link>
            </li>
            <li>
              <Link to="movies">Movies</Link>
            </li>
            <li>
              <Link to="categories">Categories</Link>
            </li>
          </ul>
          <NavLink to="home">
          </NavLink>
          <nav className="header_content_nav">
            <div className="header_search">
              <BsSearch className="header_search_icon" />
              <input placeholder="Search" type="text" />
            </div>
            <img src={icon} alt="" className="header_icon" />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
