import React from "react";
import { Link, NavLink } from "react-router-dom";
import Decore from "../Decore/Decore";
import logo from "../../footer-logo.svg";
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
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
        <Decore />
      </div>
    </footer>
  )
}

export default Footer