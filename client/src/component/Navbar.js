import { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";

function Navbar() {

    const navref = useRef(null)

const toggle = () => {
    if(navref.current.classList == "right-nav"){

      navref.current.classList.add("showmenu");
    
    }
      else{
        navref.current.classList.remove("showmenu");
      }
}
  return (
    <nav>
    <div class="logo">
        <a href="">Corsera</a>
    </div>
    <ul className="right-nav" ref={navref}>
        <li><a className="nav-item" href="">Home</a></li>
        <li><a className="nav-item" href="">Services</a></li>
        <li><a className="nav-item" href="">About</a></li>
        <li><a className="nav-item" href="">Contact</a></li>
    </ul>
    <div class="menu" onClick={toggle}>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
    </div>
    </nav>
  );
}
export default Navbar;
