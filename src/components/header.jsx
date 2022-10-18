import { Link, useLocation } from "react-router-dom";
import { xContext } from "../context/userContext";
import React, { useContext, useState, useEffect } from "react";

const Header = () => {
  const ctx = useContext(xContext);
  const location = useLocation();
  const active = location.pathname;

  return (
    <header className="main-header">
      <div className="topbar">
        <div className="container">
          <div className="topbar__left">
            <div className="topbar__social">
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
            {/* /.topbar__social */}
            {ctx.token != "" ? (
              <a>You are logged in</a>
            ) : (
              <>
                <Link to={"/login"}>
                  <a>Login</a>
                </Link>
                <Link to={"/signup"}>
                  <a>Sign Up</a>
                </Link>
              </>
            )}
          </div>
          {/* /.topbar__left */}
          <div className="topbar__right">
            <a href="#">
              <i className="pylon-icon-email1" />
              needhelp@company.com
            </a>
            <a href="#">
              <i className="pylon-icon-clock2" />
              Mon - Sat 8:00 AM - 6:00 PM
            </a>
          </div>
          {/* /.topbar__right */}
        </div>
        {/* /.container */}
      </div>
      {/* /.topbar */}
      <nav className="main-menu">
        <div className="container">
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="assets/images/logo-dark.png" width={155} alt="" />
            </a>
            <span className="fa fa-bars mobile-nav__toggler" />
          </div>
          {/* /.logo-box */}
          {ctx.token != "" ? (
            <ul className="main-menu__list">
              <li className={active === "/" ? "current" : ""}>
                <Link to={"/"}>
                  <a>Home</a>
                </Link>
              </li>
              <li className={active === "/apply" ? "current" : ""}>
                <Link to={"/apply"}>
                  <a>Apply Now</a>
                </Link>
              </li>
              <li className={active === "/myloans" ? "current" : ""}>
                <Link to={"/applications"}>
                  <a>My Applications</a>
                </Link>
              </li>
              <li className="search-btn search-toggler">
                <a href="#">
                  <i className="" />
                </a>
              </li>
            </ul>
          ) : (
            <></>
          )}
          {/* /.main-menu__list */}
          <div className="main-header__info">
            <div className="main-header__info-phone">
              <i className="pylon-icon-tech-support" />
              <div className="main-header__info-phone-content">
                <span>Call Anytime</span>
                <h3>
                  <a href="tel:+19812310000">+1 9812310000</a>
                </h3>
              </div>
              {/* /.main-header__info-phone-content */}
            </div>
            {/* /.main-header__info-phone */}
          </div>
          {/* /.main-header__info */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.main-menu */}
    </header>
  );
};

export default Header;
