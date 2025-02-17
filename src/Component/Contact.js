import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! We will get back to you soon.");
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>

      {/* Contact Details */}
      <div style={contactDetails}>
        <h3>📍 Address</h3>
        <p>Medicure Healthcare Pvt. Ltd.</p>
        <p>123, Health Street, New Delhi, India</p>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: support@medicure.com</p>
      </div>

      {/* Contact Form */}
      <div style={formContainer}>
        <h3>📩 Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Help & More Buttons */}
      <div style={helpButtons}>
        <button onClick={() => alert("Help section coming soon!")}>🆘 Help</button>
        <button onClick={() => alert("More info coming soon!")}>ℹ More Info</button>
      </div>
    </div>
  );
};

// Styles
const containerStyle = { textAlign: "center", padding: "30px" };
const contactDetails = { background: "#f0f8ff", padding: "20px", borderRadius: "8px", margin: "20px auto", width: "50%" };
const formContainer = { background: "#f9f9f9", padding: "20px", borderRadius: "8px", margin: "20px auto", width: "50%" };
const helpButtons = { display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" };

export default Contact;
