import React, { useState } from "react";
import './Navbar.css'
import closeIcon from '../../assets/nav/closeIcon.png';
import menuIcon from '../../assets/nav/menuIcon.png';
import { MdMenu} from 'react-icons/md'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
     <div>
        <nav className='navbar'>
      <a className='title' href="/">
      Enourmous Hub.
      </a>
      <div className='menu'>
        {/*<img
          className="menuBtn"
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        /> */}
        <i onClick={() => setMenuOpen(!menu)}><MdMenu /></i>
        <ul
          className="menuItems"
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
     </div>
  );
};

export default Navbar;