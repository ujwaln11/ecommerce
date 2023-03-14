import React from "react";
// import "./Home.css";
import '../../App.css';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* Banner Starts */}
      <section className="banner">
        <div
          className="banner-content"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <h1>
            <center>Welcome To My E-Commerce Website</center>
          </h1>
          <p>
            Thank you for visiting my website. This website is just an Assignment
            provided by TSWorks company to see how my skills are in Web-Technologies. 
            This website is just a protype of an E-commerce Wesbite in this website i 
            have tried to develop using HTML5, CSS, JavaScript & ReactsJS.
            In this Website as i have told i have created 4 pages i.e., HomePage,
            Product Listing Page, Signup Page and Cart Page. Please go through my Website
          </p>
          <div className="banner-button">
            <Link to="/products">See Products</Link>
          </div>
        </div>
      </section>

      {/* Banner Ends */}

      {/* listing Starts */}
      <section className="listing">
        <div
          className="listing-content"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <h1>Making E-Commerce better for everyone</h1>
          <h3>
            The all-in-one commerce platform to start, run, and grow a business.
          </h3>
        </div>
        <div
          className="listing-content"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <p>
            Browse & Discover Thousands of products. Read Customer Reviews and
            Find Best Sellers. Top brands for Phones and Electronics. Latest
            trends in Fashion. Free Shipping available* Huge Selection. Low
            Prices. Best Deals.
          </p>
          <ul>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> Creating a
              community for impact
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i>We’re building a
              100-year company
            </li>
            <li>
              <i className="fa fa-check" aria-hidden="true"></i> The first
              Shopify store was our own
            </li>
          </ul>
          <p>
            E-Commerce Webiste : Online Shopping India - Buy mobiles, laptops, cameras,
            books, watches, apparel, shoes and e-Gift Cards.
          </p>
        </div>
      </section>
      {/* Listing Ends */}

      <div className="banner-button">
        <Link to="/products" style={{ color: "gray" }}>
          See Products
        </Link>
      </div>

      {/* Footer Starts */}
      <section className="footer">
        <div className="footer-div1">
          <h1>E-Commerce</h1>
          <p className="para">
            Home Sweet Home Kanakapura Road, Bengaluru-560062 Karnatake,India
          </p>
          <p>
            Phone: +91 01234 56789
            <br />
            Email: sample@website.com
          </p>
        </div>
        <div className="footer-div2">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
              <Link to="/products">Products</Link>
            </li>
            <li>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
              <Link to="/">About Us</Link>
            </li>
            <li>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
              <Link to="/">Terms of Services</Link>
            </li>
            <li>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-div3">
          <h3>Join Our Newsletter</h3>
          <p>
            Thank You for visiting my Website <br />
            This is just an Assignment
          </p>

          <form className="subscribe">
            <input type="text" />
            <button type="submit">subscribe</button>
          </form>
        </div>
      </section>
      {/* Footer Ends */}
    </div>
  );
};

export default Home;
