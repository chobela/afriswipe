import { xContext } from "../context/userContext";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const ctx = useContext(xContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://afriswipe.com/api/", {
        request: "login",
        email: email,
        password: password,
      })
      .then((res) => {
        ctx.updateUser();
      })
      .catch((err) => {
        ctx.updateUser();
        console.log(err);
      });
  };

  return (
    <>
      <section className="contact-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact-one__content">
                <div className="block-title">
                  <p className="small-title">Get in touch with us</p>
                  <h2 className="title-block">Ask for your query</h2>
                </div>
                <div className="contact-one__box">
                  <i className="pylon-icon-telephone" />
                  <div className="contact-one__box-content">
                    <h4>Call Anytime</h4>
                    <a href="tel:92 666 888 000">92 666 888 0000</a>
                  </div>
                  {/* /.contact-one__box-content */}
                </div>
                {/* /.contact-one__box */}
                <div className="contact-one__box">
                  <i className="pylon-icon-email1" />
                  <div className="contact-one__box-content">
                    <h4>Write Email</h4>
                    <a href="mailto:needhelp@company.com">
                      needhelp@company.com
                    </a>
                  </div>
                  {/* /.contact-one__box-content */}
                </div>
                {/* /.contact-one__box */}
                <div className="contact-one__box">
                  <i className="pylon-icon-pin1" />
                  <div className="contact-one__box-content">
                    <h4>Visit Office</h4>
                    <a href="#">80 Marktin Colvel, Broklyn, New York, USA</a>
                  </div>
                  {/* /.contact-one__box-content */}
                </div>
                {/* /.contact-one__box */}
              </div>
              {/* /.contact-one__content */}
            </div>
            {/* /.col-lg-5 */}
            <div className="col-lg-7">
              <form onSubmit={handleSubmit} className="contact-one__form">
                <div className="row low-gutters">
                  {/* /.col-md-6 */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Your Email"
                        className="form-control contact-one__form-input"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  {/* /.col-md-6 */}

                  {/* /.col-md-6 */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        className="form-control contact-one__form-input"
                        name="subject"
                      />
                    </div>
                  </div>
                  {/* /.col-md-6 */}
                  <div className="col-md-12">
                    <button className="thm-btn" type="submit">
                      Login
                    </button>
                  </div>
                  {/* /.col-md-6 */}
                </div>
                {/* /.row */}
              </form>
              {/* /.contact-one__from */}
            </div>
            {/* /.col-lg-7 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.contact-one */}
    </>
  );
};

export default Login;