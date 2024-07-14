import React from "react";
import { useState } from "react";

import { TbMenu2 } from "react-icons/tb";
import { logo } from "../pages";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/* <!-- Navbar Brand Logo --> */}
      <a href="/" class="logo">
        <img src={logo} class="h-10" alt="Ryan Logo" />
      </a>

      {/* <!-- Mobile Menu Toggle Button (Offcanvas Button) --> */}
      <div class="lg:hidden flex items-center ms-auto px-2.5">
        <button
          class="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5"
          type="button"
          id="hs-unstyled-collapse"
          data-hs-collapse="#mobileMenu"
          data-hs-type="collapse"
        >
          <TbMenu2 />
        </button>
      </div>

      {/* <!-- Navigation Menu --> */}
      <div
        id="mobileMenu"
        class="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
      >
        <ul id="navbar-navlist" class="navbar-nav">
          {/* <!-- Home Page Link --> */}
          <li class="nav-item">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>

          {/* <!-- About Page Link --> */}
          <li class="nav-item">
            <a class="nav-link" href="/#/portfolio">
              Portfolio
            </a>
          </li>

          {/* <!-- Portfolio Page Link --> */}
          <li class="nav-item">
            <a class="nav-link" href="/#/about">
              About
            </a>
          </li>

          {/* <!-- Features Page Link --> */}
          <li class="nav-item">
            <a class="nav-link" href="/#/services">
              Services
            </a>
          </li>

          {/* <!-- Price Page Link --> */}
          <li class="nav-item">
            <a class="nav-link" href="/#/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
