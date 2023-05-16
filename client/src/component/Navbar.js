import { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";

function Navbar() {

    const navref = useRef(null)

const toggle = () => {
    if(navref.current.classList == ""){

      navref.current.classList.add("showmenu");}
      else{
        navref.current.classList.remove("showmenu");
      }
}




  return (
    <div className="body">
      <nav>
        <div class="logo">
          <a href="">Matrix</a>
        </div>

        <ul className="" ref={navref}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>


        <div class="menu" onClick={toggle}>
          <div class="menu-line"></div>
          <div class="menu-line"></div>
          <div class="menu-line"></div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
