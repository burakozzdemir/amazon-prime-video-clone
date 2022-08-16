import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/prime-video-logo.png"
import { BsSearch } from 'react-icons/bs'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

const Header = () => {
  return (
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
            <BsSearch className="header_icon" />
            <input placeholder="Search" type="text" />
          </div>
          <AccountCircleSharpIcon className="header_avatar" /> 
        </nav>
      </div>
    </div>
  );
};

export default Header;
