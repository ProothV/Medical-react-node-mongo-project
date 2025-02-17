import React from "react";
import { Link } from "react-router-dom";
import bgimgg from '../images/c1.png'
import About from "./About";
import Game from "./Game";
import ProductsServices from "./ProductServices";


const Home = () => {
  return (
    <div style={{backgroundColor: "rgba(144, 238, 144, 0.3)"}}>
    <div style={{ height: "90vh", position: "relative" }}>
      {/* Background Image/Carousel */}
      <div style={{
        backgroundImage: `url(${bgimgg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        filter: "brightness(0.8)"
      }}></div>

      {/* Content over Carousel */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white"
      }}>
        <h1>Welcome to MediFast</h1>
        <p>Your trusted online medicine delivery service</p>
        <button style={btnStyle}>Order Now</button>
      </div>
      {/* Highlighted Section */}
      <div style={highlightStyle}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Free Home Delivery</li>
          <li>✅ 24/7 Customer Support</li>
          <li>✅ 100% Genuine Medicines</li>
          <li>✅ Exclusive Discounts & Offers</li>
        </ul>
      </div>

      {/* Quick Login Box */}
      <div style={loginBoxStyle}>
        <h3>Login</h3>
        <input type="text" placeholder="Email or Phone" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <button style={btnStyle}>Login</button>
        <p>New User?  
          <Link to="/signup" style={linkStyle}> Sign Up</Link>
        </p>
        <p>Or</p>
        <Link to="/guestcheckout">
          <button style={{ ...btnStyle, backgroundColor: "gray" }}>Guest Checkout</button>
        </Link>
      </div>

    </div>
    <About/>
    <ProductsServices/>
    <Game/>
    </div>
  );
};

// Styles
const loginBoxStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  textAlign: "center",
  width: "250px"
};

const inputStyle = {
  width: "100%",
  padding: "8px",
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
  cursor: "pointer",
  margin: "5px 0"
};

const linkStyle = {
  color: "#008CBA",
  textDecoration: "none",
  marginLeft: "5px"
};

const highlightStyle = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "15px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
};

export default Home;
