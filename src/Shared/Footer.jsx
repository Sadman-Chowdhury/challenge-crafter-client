import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-12">
      <aside>
        <div>
          <img src={logo} alt="Challenge Crafter Logo" className="w-20 mb-4" />
        </div>
        <p>
          Challenge Crafter Inc
          <br />© 2024 Challenge Crafter Inc. All rights reserved.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <aside className="flex flex-col mt-4">
        <h6 className="footer-title">Follow us</h6>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover text-xl"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
