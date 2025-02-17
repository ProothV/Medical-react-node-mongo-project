import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <div className="container">
        <div className="row">
          
          {/* Company Logo & About */}
          <div className="col-md-3">
            <h4>MediFast</h4>
            <p>Your Trusted Medicine Delivery Partner. Get medicines at your doorstep easily and safely.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">🏠 Home</a></li>
              <li><a href="/subscription" className="text-light">💳 Subscription</a></li>
              <li><a href="/insurance" className="text-light">🛡 Insurance</a></li>
              <li><a href="/contact" className="text-light">📞 Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <a href="#" className="text-light me-3"><FaFacebook size={24} /></a>
            <a href="#" className="text-light me-3"><FaTwitter size={24} /></a>
            <a href="#" className="text-light me-3"><FaInstagram size={24} /></a>
            <a href="#" className="text-light"><FaLinkedin size={24} /></a>
          </div>

          {/* Newsletter & Comment Box */}
          <div className="col-md-3">
            <h5>Subscribe</h5>
            <input type="email" className="form-control mb-2" placeholder="Enter your email" />
            <button className="btn btn-primary btn-sm w-100">Subscribe</button>
            
            <h5 className="mt-3">Feedback</h5>
            <textarea className="form-control" placeholder="Leave a comment"></textarea>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p>&copy; 2025 MediFast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
