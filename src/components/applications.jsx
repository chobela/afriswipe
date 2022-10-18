import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { xContext } from "../context/userContext";

const Applications = () => {
  const [loans, setLoans] = useState([]);

  const ctx = useContext(xContext);

  useEffect(() => {
    const token = ctx.token;

    const options = {
      method: "GET",
      headers: {
        "content-type": "text/plain",
        Authorization: "bearer " + token,
      },
    };

    const url = "http://38.242.204.36:8085/items/loans";

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.hasOwnProperty("data")) {
          console.log(response.data);
          setLoans(response.data);
        } else {
          // if (response.errors[0].message == "Token expired.") {
          //   navigation.navigate("Root");
          // } else {
          //   alert(response.errors[0].message);
          // }
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="contact-one">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact-one__content">
                <div className="block-title">
                  <p className="small-title">My Loan Applications</p>
                  <h2 className="title-block">Active Applications</h2>
                </div>

                {loans.map((loan) => {
                  return (
                    <div className="contact-one__box">
                      <i className="pylon-icon-email1" />
                      <div className="contact-one__box-content">
                        <h4>{loan.date_created}</h4>
                        <h6>K{loan.amount}</h6>
                        <p>Purpose : {loan.purpose}</p>
                        <a href="">Pending Approval</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget footer-widget__about">
                <a href="index.html">
                  <img src="assets/images/logo-light.png" width={155} alt="" />
                </a>
                <p>
                  Welcome to pylon loand company we are provide loan as very
                  reasonably interest and you can provide document etur labore.
                </p>
                <div className="footer-widget__about-phone">
                  <i className="pylon-icon-tech-support" />
                  <div className="footer-widget__about-phone-content">
                    <span>Call Anytime</span>
                    <h3>
                      <a href="tel:+19812310000">+1 9812310000</a>
                    </h3>
                  </div>
                  {/* /.footer-widget__about-phone-content */}
                </div>
                {/* /.footer-widget__about-phone */}
              </div>
              {/* /.footer-widget footer-widget__about */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget footer-widget__link">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <a href="about.html">
                      <i className="fa fa-arrow-right" />
                      About
                    </a>
                  </li>
                  <li>
                    <a href="services.html">
                      <i className="fa fa-arrow-right" />
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="news.html">
                      <i className="fa fa-arrow-right" />
                      Latest News
                    </a>
                  </li>
                  <li>
                    <a href="testimonials.html">
                      <i className="fa fa-arrow-right" />
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i className="fa fa-arrow-right" />
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="loan-calculator.html">
                      <i className="fa fa-arrow-right" />
                      Loan Calculator
                    </a>
                  </li>
                </ul>
                {/* /.list-unstyled */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-lg-2 */}
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget footer-widget__post">
                <h3 className="footer-widget__title">Latest News</h3>
                <ul className="list-unstyled footer-widget__post-list">
                  <li>
                    <img
                      src="assets/images/resources/footer-post-1-1.png"
                      alt=""
                    />
                    <div className="footer-widget__post-list-content">
                      <span>October 16, 2020</span>
                      <h3>
                        <a href="news-details.html">
                          We’re Providing the Quality Services
                        </a>
                      </h3>
                    </div>
                    {/* /.footer-widget__post-content */}
                  </li>
                  <li>
                    <img
                      src="assets/images/resources/footer-post-1-2.png"
                      alt=""
                    />
                    <div className="footer-widget__post-list-content">
                      <span>October 16, 2020</span>
                      <h3>
                        <a href="news-details.html">
                          We’re Providing the Quality Services
                        </a>
                      </h3>
                    </div>
                    {/* /.footer-widget__post-content */}
                  </li>
                </ul>
                {/* /.list-unstyled */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget footer-widget__contact">
                <h3>Contact</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <a href="mailto:needhelp@company.com">
                      <i className="pylon-icon-email1" />
                      needhelp@company.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="pylon-icon-clock2" />
                      Mon - Sat 8:00 AM - 6:00 PM
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="pylon-icon-pin1" />
                      80 Broklyn Golden Street, New York. USA
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.footer-widget footer-widget__contact */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </footer>
      {/* /.site-footer */}
      <div className="bottom-footer">
        <div className="container">
          <p>© Copyright 2020 by Company.com</p>
          <div className="bottom-footer__social">
            <a href="#" className="fab fa-facebook-f" />
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-pinterest-p" />
            <a href="#" className="fab fa-instagram" />
          </div>
          {/* /.bottom-footer__social */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bottom-footer */}
    </>
  );
};

export default Applications;
