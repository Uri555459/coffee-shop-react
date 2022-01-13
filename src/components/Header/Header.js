import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from '../../logo.svg'

import './header.scss'

const Header = () => {
  return (
    <div className="header__container container">
      <header className='header'>
        <nav className="nav">
          <Link className='logo' to='/coffee-shop-react'>
            <img src={logo} alt="" />
            <span>Coffee house</span>
          </Link>
          <ul className="nav__list">
            <li className="nav__list-item">
              <NavLink className='nav__list-link' to='/our-coffee'>Our coffee</NavLink>
            </li>
            <li className="nav__list-item">
              <NavLink className='nav__list-link' to='/for-your-pleasure'>For your pleasure</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
};

export default Header;
