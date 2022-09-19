const Header = () => {
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
            <a href="#">Login</a>
            <a href="news.html">Company News</a>
            <a href="faq.html">FAQs</a>
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
          <ul className="main-menu__list">
            <li className="dropdown">
              <a href="index.html">Home</a>
              <ul>
                <li>
                  <a href="index.html">Home One</a>
                </li>
                <li>
                  <a href="index-2.html">Home Two</a>
                </li>
                <li className="dropdown">
                  <a href="#">Header Styles</a>
                  <ul>
                    <li>
                      <a href="index.html">Header One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Header Two</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="about.html">About Us</a>
              <ul>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li>
                  <a href="team-details.html">Team Details</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="services.html">Service</a>
              <ul>
                <li>
                  <a href="services.html">Service</a>
                </li>
                <li>
                  <a href="services-2.html">Service Two</a>
                </li>
                <li>
                  <a href="service-details.html">Service Details</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Page</a>
              <ul>
                <li>
                  <a href="how-it-works.html">How It Works</a>
                </li>
                <li>
                  <a href="loan-calculator.html">Loan Calculator</a>
                </li>
                <li>
                  <a href="loan-eligibility.html">Loan Eligibility</a>
                </li>
                <li>
                  <a href="apply-now.html">Apply Now</a>
                </li>
                <li className="dropdown">
                  <a href="credit-card.html">Credit Card</a>
                  <ul>
                    <li>
                      <a href="credit-card.html">Credit Card</a>
                    </li>
                    <li>
                      <a href="credit-card-details.html">Credit Card Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="testimonials.html">Testimonials</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="news.html">News</a>
              <ul>
                <li>
                  <a href="news.html">News</a>
                </li>
                <li>
                  <a href="news-details.html">News Details</a>
                </li>
                <li>
                  <a href="news-default.html">News Default</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
            <li className="search-btn search-toggler">
              <a href="#">
                <i className="pylon-icon-magnifying-glass" />
              </a>
            </li>
          </ul>
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
