import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";

const Home = () => {
  const [amount, setAmount] = useState(1000);
  const [months, setMonths] = useState(1);
  const [installments, setInstallments] = useState(0);
  const [total, setTotal] = useState(0);
  const rate = 0.4;

  const changeAmount = (value) => {
    setAmount(value);
    const total = rate * Number(value) + Number(value);
    setTotal(total);
    setInstallments(total / months);
  };

  const changeMonths = (month) => {
    setMonths(month);
    const total = rate * Number(amount) + Number(amount);
    setTotal(total);
    setInstallments(total / months);
  };

  return (
    <>
      {/* /.main-header */}
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content" />
        {/* /.sticky-header__content */}
      </div>
      {/* /.stricky-header */}
      <section className="main-slider">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{
  "slidesPerView": 1,
  "loop": true,
  "effect": "fade",
  "autoplay": {
      "delay": 5000
  },
  "navigation": {
      "nextEl": "#main-slider__swiper-button-next",
      "prevEl": "#main-slider__swiper-button-prev"
  }
    }'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/main-slider/main-slider-1-1.jpg)",
                }}
              />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <p>Simple &amp; Secure Payment Process</p>
                    <h2>Connecting Your Loan Needs</h2>

                    <Link to={"/apply"}>
                      <a className=" thm-btn">Apply For Loan</a>
                    </Link>
                  </div>
                  {/* /.col-lg-7 text-right */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/main-slider/main-slider-1-2.jpg)",
                }}
              />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <p>Simple &amp; Secure Payment Process</p>
                    <h2>Connecting Your Loan Needs</h2>

                    <Link to={"/apply"}>
                      <a className=" thm-btn">Apply For Loan</a>
                    </Link>
                  </div>
                  {/* /.col-lg-7 text-right */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/main-slider/main-slider-1-1.jpg)",
                }}
              />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <p>Simple &amp; Secure Payment Process</p>
                    <h2>Connecting Your Loan Needs</h2>
                    <Link to={"/apply"}>
                      <a className=" thm-btn">Apply For Loan</a>
                    </Link>
                    {/* /.thm-btn dynamic-radius */}
                  </div>
                  {/* /.col-lg-7 text-right */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.swiper-slide */}
          </div>
          {/* /.swiper-wrapper */}
          {/* If we need navigation buttons */}
          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <i className="pylon-icon-left-arrow" />
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <i className="pylon-icon-right-arrow" />
            </div>
          </div>
          {/* /.main-slider__nav */}
        </div>
        {/* /.swiper-container thm-swiper__slider */}
        <div className="feature-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="feature-two__box">
                      <i className="pylon-icon-consumer-behavior" />
                      <p>Quick Payment Process</p>
                    </div>
                    {/* /.feature-two__box */}
                  </div>
                  {/* /.col-lg-4 col-md-6 */}
                  <div
                    className="col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="feature-two__box">
                      <i className="pylon-icon-point-of-sale" />
                      <p>No Prepayment Fees</p>
                    </div>
                    {/* /.feature-two__box */}
                  </div>
                  {/* /.col-lg-4 col-md-6 */}
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.feature-two */}
      </section>
      {/* /.main-slider */}
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-7">
              <div className="about-one__content">
                <div className="block-title text-left">
                  <p>Company Introductions</p>
                  <h2>Our Loans will Fill Your Dreams Come True</h2>
                </div>
                {/* /.block-title */}
                <p>
                  There are many variations of passages of lorem ipsum available
                  the majority have suffered alteration in some form by injected
                  humour. Duis aute irure dolor lipsum is simply free text
                  available in the local markets in reprehenderit.Nam aliquam
                  sem et tortor consequat mattis pellentesque semper tailored
                  for specific uses and specific market segment.
                </p>
              </div>
              {/* /.about-one__content */}
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-four__box text-left">
                    {/* .feature-four__box */}
                    <div className="feature-four__box-inner">
                      <div className="feature-four__box-icon">
                        <i className="flaticon flaticon-property-1" />
                      </div>
                      <div className="feature-four__box-right">
                        <h3>Award Winning</h3>
                        <p>Finance categories winning more than 10 awards</p>
                      </div>
                    </div>
                  </div>
                  {/* /.feature-four__box */}
                </div>
                <div className="col-md-6">
                  <div className="feature-four__box text-left">
                    {/* .feature-four__box */}
                    <div className="feature-four__box-inner">
                      <div className="feature-four__box-icon">
                        <i className="flaticon flaticon-growth-1" />
                      </div>
                      <div className="feature-four__box-right">
                        <h3>Certified Company</h3>
                        <p>Approved Finance company to provide loans</p>
                      </div>
                    </div>
                  </div>
                  {/* /.feature-four__box */}
                </div>
              </div>
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-12 col-xl-5">
              <form
                action="#"
                id="loan-calculator"
                className="about-one__form wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <h3>How Much You Need</h3>
                <div className="about-one__form-content">
                  <div className="input-box__top">
                    <span>K1000</span>
                    <span>K{amount}</span>
                    <span>K40000</span>
                  </div>
                  {/* /.input-box__top */}
                  <div className="input-box">
                    <div
                      className="range-slider-count"
                      id="range-slider-count"
                    />
                    <input
                      type="hidden"
                      defaultValue=""
                      id="min-value-rangeslider-count"
                    />

                    <input
                      step={1000}
                      type="range"
                      className="form-control form-range"
                      defaultValue={1000}
                      min={1000}
                      max={40000}
                      onChange={(e) => changeAmount(e.target.value)}
                    />
                  </div>
                  {/* /.input-box */}
                  <div className="input-box__top">
                    <span>1 Month</span>
                    <span>{months} Month/s</span>
                    <span>12 Months</span>
                  </div>
                  {/* /.input-box__top */}
                  <div className="input-box">
                    <div
                      className="range-slider-month"
                      id="range-slider-month"
                    />
                    <input
                      step={1}
                      type="range"
                      className="form-control form-range"
                      defaultValue={1}
                      min={1}
                      max={12}
                      onChange={(e) => changeMonths(e.target.value)}
                    />
                    <input
                      type="hidden"
                      defaultValue=""
                      id="max-value-rangeslider-month"
                    />
                  </div>
                  {/* /.input-box */}
                  <div className="input-box__top">
                    <span>40%</span>
                  </div>
                  {/* /.input-box__top */}
                  <div className="input-box">
                    <div
                      className="range-slider-interest"
                      id="range-slider-interest"
                    />
                    <input
                      type="hidden"
                      defaultValue=""
                      id="min-value-rangeslider-interest"
                    />
                    <input
                      type="hidden"
                      defaultValue=""
                      id="max-value-rangeslider-interest"
                    />
                  </div>
                  {/* /.input-box */}
                  <p>
                    <span>Pay Monthly</span>
                    <b>
                      K{installments}
                      <i id="loan-monthly-pay" />
                    </b>
                  </p>
                  <p>
                    <span>Total Pay Back</span>
                    <b>
                      K{total}
                      <i id="loan-total" />
                    </b>
                  </p>
                  <Link className=" thm-btn" to={"/apply"}>
                    <a>Apply For Loan</a>
                  </Link>
                </div>
                {/* /.about-one__from-content */}
              </form>
              {/* /.about-one__form */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.about-one */}
      <section className="service-one">
        <div className="container">
          <div className="block-title text-center">
            <p>What We’re Offering</p>
            <h2>All Loans Services</h2>
          </div>
          {/* /.block-title */}
          <div className="row">
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <a href="service-details.html">
                    <div className="post-thumbnail">
                      <img
                        src="assets/images/services/services-1-1.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                {/* /.service-one__image */}
                <div className="service-one__content">
                  <a href="service-details.html">
                    <div className="service-icon">
                      <i className="flaticon-car-loan" />
                    </div>
                  </a>
                  <h3>
                    <a href="service-details.html">Personal Loan</a>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <a
                    href="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  />
                  {/* /.service-one__link */}
                </div>
                {/* /.service-one__content */}
              </div>
              {/* /.service-one__card */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <a href="service-details.html">
                    <div className="post-thumbnail">
                      <img
                        src="assets/images/services/services-1-2.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                {/* /.service-one__image */}
                <div className="service-one__content">
                  <a href="service-details.html">
                    <div className="service-icon">
                      <i className="flaticon-online-money" />
                    </div>
                  </a>
                  <h3>
                    <a href="service-details.html">Education Loan</a>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <a
                    href="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  />
                  {/* /.service-one__link */}
                </div>
                {/* /.service-one__content */}
              </div>
              {/* /.service-one__card */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="service-one__card">
                <div className="service-one__image">
                  <a href="service-details.html">
                    <div className="post-thumbnail">
                      <img
                        src="assets/images/services/services-1-3.png"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                {/* /.service-one__image */}
                <div className="service-one__content">
                  <a href="service-details.html">
                    <div className="service-icon">
                      <i className="flaticon-property-1" />
                    </div>
                  </a>
                  <h3>
                    <a href="service-details.html">Business Loan</a>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have some.
                  </p>
                  <a
                    href="service-details.html"
                    className="pylon-icon-right-arrow service-one__link"
                  />
                  {/* /.service-one__link */}
                </div>
                {/* /.service-one__content */}
              </div>
              {/* /.service-one__card */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.service-one */}
      <section className="feature-one">
        <img
          src="assets/images/shapes/feature-shape-1-1.png"
          alt=""
          className="feature-one__shape-1"
        />
        <img
          src="assets/images/shapes/feature-shape-1-2.png"
          alt=""
          className="feature-one__shape-2"
        />
        <img
          src="assets/images/shapes/feature-shape-1-3.png"
          alt=""
          className="feature-one__shape-3"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="block-title text-left">
                <p>Get to Know About</p>
                <h2>Flexible and Quick Business Loans For You</h2>
              </div>
              {/* /.block-title */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <p className="block-text">
                Turpis cursus in hac habitasse platea dictumst quisque. Aenean
                euismod elementum nisi quis eleifend quam adipiscing vitae
                proin.There of available but the majority have suffered
                alteration in some form, by injected humou or randomised words
                which don’t look even slightly believable.Nam aliquam sem et
                tortor consequat at urna mattis pellentesque..
              </p>
              {/* /.block-text */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-one__box">
                <i className="pylon-icon-assets" />
                <p>Very Low Rates on All Loans</p>
              </div>
              {/* /.feature-one__box */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="feature-one__box">
                <i className="pylon-icon-verification" />
                <p>99.9% Success Rate Guarantee</p>
              </div>
              {/* /.feature-one__box */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="feature-one__box">
                <i className="pylon-icon-finance" />
                <p>Flexible with Your Repayments</p>
              </div>
              {/* /.feature-one__box */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.feature-one */}
      <section className="trusted-company">
        <div
          className="trusted-company__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/trust-bg-1-1.png)",
          }}
        />
        {/* /.trusted-company__bg */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="trusted-company__content">
                <div className="block-title text-left">
                  <p>Trusted Company</p>
                  <h2>Most of the People Trust on Us For Fast Services</h2>
                </div>
                {/* /.block-title */}
                <div className="trusted-company__image">
                  <img
                    src="assets/images/resources/trust-1-1.png"
                    alt=""
                    height={148}
                    width={171}
                  />
                  <p>
                    There are many variations of passages of lorem ipsum
                    available the majority have suffered alteration in some form
                    by injected humour. Duis aute irure dolor lipsum is simply
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                </div>
                {/* /.trusted-company__image */}
                <div className="row">
                  <div className="col-sm-5 col-xs-12">
                    <ul className="trusted-company__list">
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          />
                        </span>
                        <span className="trusted-company__list-text">
                          Credit Card Per Day
                        </span>
                      </li>
                      {/* /.trusted-company__list-item*/}
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          />
                        </span>
                        <span className="trusted-company__list-text">
                          Personal Loan
                        </span>
                      </li>
                      {/* /.trusted-company__list-item*/}
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          />
                        </span>
                        <span className="trusted-company__list-text">
                          Car / Auto Loan
                        </span>
                      </li>
                      {/* /.trusted-company__list-item*/}
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          />
                        </span>
                        <span className="trusted-company__list-text">
                          Home Loan
                        </span>
                      </li>
                      {/* /.trusted-company__list-item*/}
                    </ul>
                    {/* /.trusted-company__list*/}
                  </div>
                  {/* /.col-md-5*/}
                  <div className="col-sm-6 col-xs-12">
                    <ul className="trusted-company__list trusted-company__list-2">
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          />
                        </span>
                        <span className="trusted-company__list-text">
                          Gold Loan Per Day
                        </span>
                      </li>
                      {/* /.trusted-company__list-item*/}
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          />
                        </span>
                        <span className="trusted-company__list-text">
                          Mortage Loan
                        </span>
                      </li>
                      {/* /.trusted-company__list-item*/}
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          />
                        </span>
                        <span className="trusted-company__list-text">
                          Education / Student Loan
                        </span>
                      </li>
                      {/* /.trusted-company__list-item*/}
                      <li className="trusted-company__list-item">
                        <span>
                          <i
                            aria-hidden="true"
                            className="far fa-check-circle"
                          />
                        </span>
                        <span className="trusted-company__list-text">
                          Wedding Loan
                        </span>
                      </li>
                      {/* /.trusted-company__list-item*/}
                    </ul>
                    {/* /.trusted-company__list*/}
                  </div>
                  {/* /.col-md-6*/}
                </div>
              </div>
              {/* /.trusted-company__content */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div className="trusted-company__box-wrap">
                <div className="trusted-company__box">
                  <span>1</span>
                  <p>
                    Easy loan solutions for small agency, business and companies
                  </p>
                </div>
                {/* /.trusted-company__box */}
                <div className="trusted-company__box">
                  <span>2</span>
                  <p>Submit Required Document and Details for loan approval </p>
                </div>
                {/* /.trusted-company__box */}
                <div className="trusted-company__box">
                  <span>3</span>
                  <p>Take our loans now and pay later when studies completed</p>
                </div>
                {/* /.trusted-company__box */}
                <div className="trusted-company__box">
                  <span>4</span>
                  <p>
                    Get small loans for more needs in 2 hours with less
                    documents
                  </p>
                </div>
                {/* /.trusted-company__box */}
              </div>
              {/* /.trusted-company__box-wrap */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.trusted-company */}
      <section className="testimonials-one">
        <div className="container">
          <div className="block-title text-center">
            <p>Customers Testimonials</p>
            <h2>Customers Testimonials</h2>
          </div>
          {/* /.block-title */}
          <div
            className="thm-swiper__slider swiper-container"
            data-swiper-options='{
  "spaceBetween": 0,
  "slidesPerView": 1,
  "slidesPerGroup": 1,
  "loop":true,
  "autoplay": {
      "delay": 5000
  },
  "pagination": {
      "el": ".testimonials-one__swiper-pagination",
      "type": "bullets",
      "clickable": true
  },
  "breakpoints": {
      "0": {
          "spaceBetween": 0,
          "slidesPerView": 1,
          "slidesPerGroup": 1
      },
      "375": {
          "spaceBetween": 0,
          "slidesPerView": 1,
          "slidesPerGroup": 1
      },
      "667": {
          "spaceBetween": 30,
          "slidesPerView": 1,
          "slidesPerGroup": 1
      },
      "767": {
          "spaceBetween": 30,
          "slidesPerView": 1,
          "slidesPerGroup": 1
      },
      "991": {
          "spaceBetween": 30,
          "slidesPerView": 2,
          "slidesPerGroup": 2
      },
      "1199": {
          "spaceBetween": 30,
          "slidesPerView": 3,
          "slidesPerGroup": 3
      }
  }}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Clyde Williamson</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-1.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Vernon Ray</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-2.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Gary Dawson</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-3.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Clyde Williamson</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-1.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Vernon Ray</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-2.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Gary Dawson</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-3.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Clyde Williamson</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-1.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Vernon Ray</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-2.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <div className="testimonials-one__box">
                  <p>
                    <span>
                      I was very impresed by the company service lore ipsum is
                      simply free text used by copy typing refreshing. Neque
                      porro est dolorem ipsum quia.
                    </span>
                  </p>
                  <h3>Gary Dawson</h3>
                  <span className="testi_sname">Analytics</span>
                </div>
                {/* /.testimonials-one__box */}
                <div className="testimonials-one__box-info">
                  <img
                    src="assets/images/resources/testimonials-1-3.png"
                    alt=""
                  />
                </div>
                {/* /.testimonials-one__box-info */}
              </div>
              {/* /.swiper-slide */}
            </div>
            {/* /.swiper-wrapper */}
            <div className="testimonials-one__swiper-pagination swiper-pagination" />
            {/* /.testimonials-one__swiper-pagination swiper-pagination */}
          </div>
          {/* /.thm-swiper__slider */}
        </div>
        {/* /.container */}
      </section>
      {/* /.testimonials-one */}
      <section className="why-choose">
        <img
          src="assets/images/shapes/why-choose-shape-1-1.png"
          className="why-choose__shape-1"
          alt=""
        />
        <img
          src="assets/images/shapes/why-choose-shape-1-2.png"
          className="why-choose__shape-2"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="why-choose__image">
                <p>
                  <i className="pylon-icon-investment" />
                  26 years of working experience
                </p>
                <img src="assets/images/resources/why-choose-1-1.png" alt="" />
              </div>
              {/* /.why-choose__image */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div className="why-choose__content">
                <div className="block-title text-left">
                  <p>Our Benfits</p>
                  <h2>Why Choose Us?</h2>
                </div>
                {/* /.block-title */}
                <p>
                  Provide your best loan services and our experience staff help
                  you. Less document and fast approve process of passages. Also
                  we are providing credit card facility to per day interest
                  credit card lorem Ipsum available, but the majority have
                  suffered.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="why-choose__box">
                      <h3>
                        <i className="fa fa-caret-right" />
                        Professional Team
                      </h3>
                      <p>Lorem ipsum dolor sit is amet, consectetur notted.</p>
                    </div>
                    {/* /.why-choose__box */}
                  </div>
                  {/* /.col-md-6 */}
                  <div className="col-md-6">
                    <div className="why-choose__box">
                      <h3>
                        <i className="fa fa-caret-right" />
                        Quick Payments
                      </h3>
                      <p>Lorem ipsum dolor sit is amet, consectetur notted.</p>
                    </div>
                    {/* /.why-choose__box */}
                  </div>
                  {/* /.col-md-6 */}
                </div>
                {/* /.row */}
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Loan Process</h3>
                    <span>90%</span>
                  </div>
                  {/* /.why-choose__progress-top */}
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "90%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    />
                  </div>
                  {/* /.why-choose__progress-bar */}
                </div>
                {/* /.why-choose__progress */}
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Consultancy</h3>
                    <span>80%</span>
                  </div>
                  {/* /.why-choose__progress-top */}
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "80%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    />
                  </div>
                  {/* /.why-choose__progress-bar */}
                </div>
                {/* /.why-choose__progress */}
                <div className="why-choose__progress">
                  <div className="why-choose__progress-top">
                    <h3>Payment Benefits</h3>
                    <span>85%</span>
                  </div>
                  {/* /.why-choose__progress-top */}
                  <div className="why-choose__progress-bar">
                    <span
                      style={{ width: "85%" }}
                      className="wow slideInLeft"
                      data-wow-duration="1500ms"
                    />
                  </div>
                  {/* /.why-choose__progress-bar */}
                </div>
                {/* /.why-choose__progress */}
              </div>
              {/* /.why-choose__content */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.why-choose */}
      <section className="funfact-one">
        <div
          className="funfact-one__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/funfact-bg-1-1.jpg)",
          }}
        />
        {/* /.funfact-one__bg */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count={99}>
                    00
                  </span>
                  %
                </h3>
                <p>We Approve Loans</p>
              </div>
              {/* /.funfact-one__box */}
            </div>
            {/* /.col-md-6 col-lg-3 */}
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  $
                  <span className="odometer" data-count={90}>
                    00
                  </span>
                  K
                </h3>
                <p>Daily Payments</p>
              </div>
              {/* /.funfact-one__box */}
            </div>
            {/* /.col-md-6 col-lg-3 */}
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count={8900}>
                    00
                  </span>
                </h3>
                <p>Happy Customers</p>
              </div>
              {/* /.funfact-one__box */}
            </div>
            {/* /.col-md-6 col-lg-3 */}
            <div className="col-md-6 col-lg-3">
              <div className="funfact-one__box">
                <h3>
                  <span className="odometer" data-count={346}>
                    00
                  </span>
                </h3>
                <p>Staff Members</p>
              </div>
              {/* /.funfact-one__box */}
            </div>
            {/* /.col-md-6 col-lg-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.funfact-one */}
      <section className="blog-home">
        <div className="container">
          <div className="block-title text-center">
            <p>Directly From the Blog</p>
            <h2 className="blog-title__h2">News &amp; Articles</h2>
          </div>
          {/* /.block-title */}
          <div className="row">
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep, 2020</span>
                  <img src="assets/images/blog/blog-1-1.png" alt="" />
                </div>
                {/* /.blog-card__image */}
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user" />
                      Admin
                    </a>
                    <a href="news-details.html">
                      <i className="far fa-credit-card" />
                      Credit Card
                    </a>
                  </div>
                  {/* /.blog-card__meta */}
                  <h3>
                    <a href="news-details.html">
                      For Car auto you will get 90% loan amount
                    </a>
                  </h3>
                  <div className="blog-card__bottom">
                    <div className="blog-card-bottom-readmore">
                      <a
                        href="news-details.html"
                        className="readmore-card-link"
                      >
                        <i className="pylon-icon-right-arrow" />
                        Read More
                      </a>
                    </div>
                    {/* /.blog-card-bottom-readmore*/}
                    <span className="blog_comment">
                      <a href="#">
                        <i className="far fa-comments" />0 Comments
                      </a>
                    </span>
                  </div>
                  {/* /.blog-card__bottom */}
                </div>
                {/* /.blog-card__content */}
              </div>
              {/* /.blog-card */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep, 2020</span>
                  <img src="assets/images/blog/blog-1-2.png" alt="" />
                </div>
                {/* /.blog-card__image */}
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user" />
                      Admin
                    </a>
                    <a href="news-details.html">
                      <i className="far fa-credit-card" />
                      Credit Card
                    </a>
                  </div>
                  {/* /.blog-card__meta */}
                  <h3>
                    <a href="news-details.html">
                      How to get education loan for overseas
                    </a>
                  </h3>
                  <div className="blog-card__bottom">
                    <div className="blog-card-bottom-readmore">
                      <a
                        href="news-details.html"
                        className="readmore-card-link"
                      >
                        <i className="pylon-icon-right-arrow" />
                        Read More
                      </a>
                    </div>
                    {/* /.blog-card-bottom-readmore*/}
                    <span className="blog_comment">
                      <a href="#">
                        <i className="far fa-comments" />0 Comments
                      </a>
                    </span>
                  </div>
                  {/* /.blog-card__bottom */}
                </div>
                {/* /.blog-card__content */}
              </div>
              {/* /.blog-card */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="blog-card">
                <div className="blog-card__image">
                  <span>20 Sep, 2020</span>
                  <img src="assets/images/blog/blog-1-3.png" alt="" />
                </div>
                {/* /.blog-card__image */}
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <a href="#">
                      <i className="far fa-user" />
                      Admin
                    </a>
                    <a href="news-details.html">
                      <i className="far fa-credit-card" />
                      Credit Card
                    </a>
                  </div>
                  {/* /.blog-card__meta */}
                  <h3>
                    <a href="news-details.html">
                      Easy way to calculate interest on a loan
                    </a>
                  </h3>
                  <div className="blog-card__bottom">
                    <div className="blog-card-bottom-readmore">
                      <a
                        href="news-details.html"
                        className="readmore-card-link"
                      >
                        <i className="pylon-icon-right-arrow" />
                        Read More
                      </a>
                    </div>
                    {/* /.blog-card-bottom-readmore*/}
                    <span className="blog_comment">
                      <a href="#">
                        <i className="far fa-comments" />0 Comments
                      </a>
                    </span>
                  </div>
                  {/* /.blog-card__bottom */}
                </div>
                {/* /.blog-card__content */}
              </div>
              {/* /.blog-card */}
            </div>
            {/* /.col-lg-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.blog-home */}
      <div className="client-carousel pt-90 pb-90 client-carousel__has-border-top">
        <div className="container">
          <div
            className="thm-swiper__slider swiper-container"
            data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
          "0": {
              "spaceBetween": 30,
              "slidesPerView": 2
          },
          "375": {
              "spaceBetween": 30,
              "slidesPerView": 2
          },
          "575": {
              "spaceBetween": 30,
              "slidesPerView": 3
          },
          "767": {
              "spaceBetween": 50,
              "slidesPerView": 4
          },
          "991": {
              "spaceBetween": 50,
              "slidesPerView": 5
          },
          "1199": {
              "spaceBetween": 100,
              "slidesPerView": 5
          }
      }}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
              <div className="swiper-slide">
                <img src="assets/images/resources/brand-1-1.png" alt="" />
              </div>
              {/* /.swiper-slide */}
            </div>
            {/* /.swiper-wrapper */}
          </div>
          {/* /.thm-swiper__slider */}
        </div>
        {/* /.container */}
      </div>
      {/* /.client-carousel */}
      <section
        className="call-to-action"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/call-to-action-bg-1-1.jpg)",
        }}
      >
        <div className="container">
          <div className="left-content">
            <p>
              <span>Simple</span>
              <span>Transparent</span>
              <span>Secure</span>
            </p>
            <h3>Get a Business Loans Quickly</h3>
          </div>
          {/* /.left-content */}
          <div className="right-content">
            <a href="apply-now.html" className="thm-btn">
              Apply For Loan
            </a>
            {/* /.thm-btn */}
          </div>
          {/* /.right-content */}
        </div>
        {/* /.container */}
      </section>
      {/* /.call-to-action */}
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
          <p>© Copyright 2021 by Company.com</p>
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
              <a href="tel:+19812310000">(+1) 9812310000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
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
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
};

export default Home;
