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
        <a href="#landingSection">Corsera</a>
    </div>
    <ul className="right-nav" ref={navref}>
        <li><a className="nav-item" href="#landingSection">Home</a></li>
        <li><a className="nav-item" href="#cardSection">Services</a></li>
        <li><a className="nav-item" href="#courseSection">Course</a></li>
        <li><a className="nav-item" href="#aboutSection">About</a></li>
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
