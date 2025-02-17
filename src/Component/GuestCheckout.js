import React, { useState } from "react";

const GuestCheckout = () => {
  const [guest, setGuest] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Proceeding as Guest!");
  };

  return (
    <div style={containerStyle}>
      <h2>Guest Checkout</h2>
      <form onSubmit={handleCheckout}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} style={inputStyle} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={inputStyle} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} style={inputStyle} required />
        <input type="text" name="address" placeholder="Delivery Address" onChange={handleChange} style={inputStyle} required />
        <button type="submit" style={btnStyle}>Proceed to Checkout</button>
      </form>
    </div>
  );
};

// Styles
const containerStyle = {
  width: "300px",
  margin: "50px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "4px"
};

const btnStyle = {
  backgroundColor: "#008CBA",
  color: "white",
  padding: "10px",
  width: "100%",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default GuestCheckout;
