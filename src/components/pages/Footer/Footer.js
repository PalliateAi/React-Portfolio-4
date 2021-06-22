import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to={"//eddyku.com"} target="_blank">
              How it works
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Testimonials
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Careers
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Investors
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Terms of Service
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to={"//eddyku.com"} target="_blank">
              Contact
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Support
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Destinations
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Sponsorships
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to={"//eddyku.com"} target="_blank">
              Submit Video
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Ambassadors
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Agency
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Influencer
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to={"//eddyku.com"} target="_blank">
              Instagram
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Facebook
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Youtube
            </Link>
            <Link to={"//eddyku.com"} target="_blank">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <GoCreditCard className="navbar-icon" />
              FinTech ||
            </Link>
          </div>
          <small className="website-rights"> FinTech || © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"//eddyku.com"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to={"//eddyku.com"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={"//eddyku.com"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to={"//eddyku.com"}
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to={"//eddyku.com"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
