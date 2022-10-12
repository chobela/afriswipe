import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const Apply = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [amount, setAmount] = useState(0);
  const [income, setIncome] = useState();
  const [purpose, setPurpose] = useState();
  const [months, setMonths] = useState();
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [married, setMarried] = useState();
  const [birthdate, setBirthdate] = useState();
  const [address, setAddress] = useState();
  const [employer, setEmployer] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://afriswipe.com/api/", {
        request: "storeloan",
        amount: amount,
        income: income,
        purpose: purpose,
        months: months,
        fullname: fullname,
        email: email,
        phone: phone,
        married: married,
        birthdate: birthdate,
      })
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <>
        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content" />
          {/* /.sticky-header__content */}
        </div>
        {/* /.stricky-header */}
        <section className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/page-header-bg-1-1.jpg)",
            }}
          />
          {/* /.page-header__bg */}
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>/</li>
              <li>
                <span>Apply Now</span>
              </li>
            </ul>
            {/* /.thm-breadcrumb list-unstyled */}
            <h2>Apply Now</h2>
          </div>
          {/* /.container */}
        </section>
        {/* /.page-header */}
        <section className="apply-one">
          <div className="container">
            <form onSubmit={handleSubmit} className="contact-one__form">
              <div className="contact-one__form-box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="block-title">
                      <p className="small-title">Calculate you loan amount</p>
                      <h2 className="title-block">Loan Details</h2>
                    </div>
                    {/* /.block-title*/}
                  </div>
                  {/* /.col-md-12*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Loan Amount*</label>
                      <input
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        type="number"
                        name="loanamount"
                        className="form-control contact-one__form-input"
                        placeholder="Loan Amount"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Monthly Income*</label>
                      <input
                        onChange={(e) => setIncome(e.target.value)}
                        value={income}
                        type="number"
                        name="income"
                        className="form-control contact-one__form-input"
                        placeholder="Monthly Income"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Purpose of Loan</label>
                      <input
                        onChange={(e) => setPurpose(e.target.value)}
                        value={purpose}
                        name="purpose"
                        className="form-control contact-one__form-input"
                        placeholder="Purpose of Loan"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Number of months</label>
                      <input
                        onChange={(e) => setMonths(e.target.value)}
                        value={months}
                        type="number"
                        name="months"
                        className="form-control contact-one__form-input"
                        placeholder="Number of months"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                </div>
                {/* /.row*/}
              </div>
              {/* /.contact-one__form-box*/}
              <div className="contact-one__form-box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="block-title">
                      <p className="small-title">Ask for More Details</p>
                      <h2 className="title-block">Personal Details</h2>
                    </div>
                    {/* /.block-title*/}
                  </div>
                  {/* /.col-md-12*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Full Name <strong>[as per Taxpayer ID]</strong>
                      </label>
                      <input
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullname}
                        type="text"
                        name="yourname"
                        className="form-control contact-one__form-input"
                        placeholder="Full Name"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email*</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="your-email"
                        className="form-control contact-one__form-input"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Mobile Number*</label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="number"
                        name="phonenumber"
                        className="form-control contact-one__form-input"
                        placeholder="Mobile Number"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Marital Status*</label>
                      <input
                        onChange={(e) => setMarried(e.target.value)}
                        value={married}
                        name="married"
                        className="form-control contact-one__form-input"
                        placeholder="Marital Status"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Birth Date*</label>
                      <input
                        onChange={(e) => setBirthdate(e.target.value)}
                        value={birthdate}
                        type="text"
                        name="birthdate"
                        className="form-control contact-one__form-input"
                        placeholder="Birth Date"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Number Of Dependents*</label>
                      <select
                        name="numberofdependents"
                        className="contact-one__form-input custom-select"
                        required=""
                      >
                        <option value="0 Dependents">0 Dependents</option>
                        <option value="1 Dependents">1 Dependents</option>
                        <option value="2 Dependents">2 Dependents</option>
                        <option value="3 Dependents">3 Dependents</option>
                        <option value="4+ Dependents">4+ Dependents</option>
                      </select>
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                </div>
                {/* /.row*/}
              </div>
              {/* /.contact-one__form-box*/}
              <div className="contact-one__form-box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="block-title">
                      <p className="small-title">Street, City And State</p>
                      <h2 className="title-block">Address Details</h2>
                    </div>
                    {/* /.block-title*/}
                  </div>
                  {/* /.col-md-12*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>House No/Name*</label>
                      <input
                        type="text"
                        name="house-no"
                        className="form-control contact-one__form-input"
                        placeholder="House Number/Name"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-4*/}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Street*</label>
                      <input
                        type="text"
                        name="street"
                        className="form-control contact-one__form-input"
                        placeholder="Street"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-4*/}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>City*</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control contact-one__form-input"
                        placeholder="Birth Date"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-4*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>State*</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control contact-one__form-input"
                        placeholder="State"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-4*/}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Country*</label>
                      <input
                        type="text"
                        name="country"
                        className="form-control contact-one__form-input"
                        placeholder="Country"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-4*/}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Pin Code*</label>
                      <input
                        type="number"
                        name="pin"
                        className="form-control contact-one__form-input"
                        placeholder="Pin Code"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-4*/}
                </div>
                {/* /.row*/}
              </div>
              {/* /.contact-one__form-box*/}
              <div className="contact-one__form-box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="block-title">
                      <p className="small-title">Employment and other stuff</p>
                      <h2 className="title-block">Other Details</h2>
                    </div>
                    {/* /.block-title*/}
                  </div>
                  {/* /.col-md-12*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Employment Industry*</label>
                      <input
                        type="text"
                        name="employmentindustry"
                        className="form-control contact-one__form-input"
                        placeholder="Employment Industry"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Employer Name*</label>
                      <input
                        onChange={(e) => setEmployer(e.target.value)}
                        value={employer}
                        type="text"
                        name="employer_name"
                        className="form-control contact-one__form-input"
                        placeholder="Employer Name"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-6*/}
                </div>
                {/* /.row*/}
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Employer Status*</label>
                      <select
                        name="employer_status"
                        className="contact-one__form-input custom-select"
                        required=""
                      >
                        <option value="Full Time Employed">
                          Full Time Employed
                        </option>
                        <option value="Part Time Employed">
                          Part Time Employed
                        </option>
                        <option value="Self Employed">Self Employed</option>
                        <option value="Temporarily Employed">
                          Temporarily Employed
                        </option>
                        <option value="Student">Student</option>
                        <option value="Pension">Pension</option>
                        <option value="Disability">Disability</option>
                        <option value="Unemployed">Unemployed</option>
                      </select>
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-4*/}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Length of Employment*</label>
                      <input
                        type="text"
                        name="lengthemployment"
                        className="form-control contact-one__form-input"
                        placeholder="Length of Employment"
                        required=""
                      />
                    </div>
                    {/* /.form-group*/}
                  </div>
                  {/* /.col-md-4*/}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Work Phone Number*</label>
                      <input
                        type="number"
                        name="worknumber"
                        className="form-control contact-one__form-input"
                        placeholder="Work Phone Number"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Upload Document</label>
                      <input
                        type="file"
                        name="worknumber"
                        className="form-control contact-one__form-input"
                        placeholder="Document"
                        required=""
                      />
                    </div>
                  </div>
                  {/* /.col-md-4*/}
                </div>
                {/* /.row*/}
              </div>
              {/* /.contact-one__form-box*/}
              <div className="contact-one__form-submit">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      defaultValue="Submitr"
                      className="thm-btn"
                    />
                  </div>
                  {/*/.col-md-12*/}
                </div>
                {/*/.row*/}
              </div>
              {/*/.contact-one__form-submit*/}
            </form>
            {/* /.contact-one__form*/}
          </div>
          {/* /.container*/}
        </section>
        {/* /.contact-one*/}
        <footer className="site-footer">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img
                      src="assets/images/logo-light.png"
                      width={155}
                      alt=""
                    />
                  </a>
                  <p>
                    Welcome to pylon loand company we are provide loan as very
                    reasonably interest and you can provide document etur
                    labore.
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
        {/* /.page-wrapper*/}
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler" />
          {/* /.mobile-nav__overlay */}
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler" />
            <div className="logo-box">
              <a href="index.html" aria-label="logo image">
                <img src="assets/images/logo-light.png" width={155} alt="" />
              </a>
            </div>
            {/* /.logo-box */}
            <div className="mobile-nav__container" />
            {/* /.mobile-nav__container */}
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="pylon-icon-email1" />
                <a href="mailto:needhelp@azino.com">needhelp@pylon.com</a>
              </li>
              <li>
                <i className="pylon-icon-telephone" />
                <a href="tel:666-888-0000">666 888 0000</a>
              </li>
            </ul>
            {/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
              <div className="mobile-nav__language">
                <img src="assets/images/resources/flag-1-1.jpg" alt="" />
                <label className="sr-only" htmlFor="language-select">
                  select language
                </label>
                {/* /#language-select.sr-only */}
                <select className="selectpicker" id="language-select">
                  <option value="english">English</option>
                  <option value="arabic">Arabic</option>
                </select>
              </div>
              {/* /.mobile-nav__language */}
              <div className="mobile-nav__social">
                <a href="#" aria-label="twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" aria-label="facebook">
                  <i className="fab fa-facebook-square" />
                </a>
                <a href="#" aria-label="pinterest">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#" aria-label="instagram">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              {/* /.mobile-nav__social */}
            </div>
            {/* /.mobile-nav__top */}
          </div>
          {/* /.mobile-nav__content */}
        </div>
        {/* /.mobile-nav__wrapper */}
        <div className="search-popup">
          <div className="search-popup__overlay search-toggler" />
          {/* /.search-popup__overlay */}
          <div className="search-popup__content">
            <form action="#">
              <label htmlFor="search" className="sr-only">
                search here
              </label>
              {/* /.sr-only */}
              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="thm-btn"
              >
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          {/* /.search-popup__content */}
        </div>
        {/* /.search-popup */}
        <a
          href="#"
          data-target="html"
          className="scroll-to-target scroll-to-top"
        >
          <i className="fa fa-angle-up" />
        </a>
      </>
    </>
  );
};

export default Apply;
