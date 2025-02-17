import React, { useState } from "react";
import { FaMedal, FaCrown, FaStar } from "react-icons/fa"; 
import "bootstrap/dist/css/bootstrap.min.css";


const Subscription = () => {
  const [subscription, setSubscription] = useState({
    name: "",
    email: "",
    plan: "Silver"
  });

  const handleChange = (e) => {
    setSubscription({ ...subscription, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscription successful! Plan: ${subscription.plan}`);
  };

  return (
    <div style={containerStyle}>
      <h2>Choose Your Subscription Plan</h2>

      {/* Subscription Cards */}
      <div style={cardContainer}>
        {/* Silver Plan */}
        <div style={cardStyle}>
          <FaMedal size={40} color="gray" />
          <h3>Silver Plan</h3>
          <p>💊 Basic medicine discounts</p>
          <p>🚚 Standard delivery</p>
          <p>💰 $9.99/month</p>
        </div>

        {/* Gold Plan */}
        <div style={cardStyle}>
          <FaCrown size={40} color="gold" />
          <h3>Gold Plan</h3>
          <p>💊 15% off all medicines</p>
          <p>🚀 Priority delivery</p>
          <p>🎁 Free health checkup</p>
          <p>💰 $19.99/month</p>
        </div>

        {/* Platinum Plan */}
        <div style={cardStyle}>
          <FaStar size={40} color="blue" />
          <h3>Platinum Plan</h3>
          <p>💊 20% off + free tonics</p>
          <p>🚀 Express delivery</p>
          <p>📞 24/7 Doctor consultation</p>
          <p>💰 $29.99/month</p>
        </div>
      </div>

      {/* Special Offers */}
      <div style={offerStyle}>
        <h3>Special Offers for Subscribers</h3>
        <p>✔ Free health consultations</p>
        <p>✔ Early access to discounts</p>
        <p>✔ Exclusive medical webinars</p>
      </div>

      {/* Subscription Form */}
      <div style={formBoxStyle}>
        <h3>Subscribe Manually</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <select name="plan" onChange={handleChange}>
            <option value="Silver">Silver - $9.99/month</option>
            <option value="Gold">Gold - $19.99/month</option>
            <option value="Platinum">Platinum - $29.99/month</option>
          </select>
          <button type="submit">Subscribe Now</button>
        </form>
      </div>
    </div>
  );
};

// Styles
const containerStyle = { textAlign: "center", padding: "30px" };
const cardContainer = { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" };
const cardStyle = { padding: "20px", background: "#f9f9f9", borderRadius: "8px", textAlign: "center", boxShadow: "0px 4px 8px rgba(0,0,0,0.2)" };
const offerStyle = { background: "#e3f2fd", padding: "15px", margin: "20px", borderRadius: "8px" };
const formBoxStyle = { background: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0,0,0,0.2)", display: "inline-block" };

export default Subscription;
