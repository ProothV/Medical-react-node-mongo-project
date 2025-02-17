import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Insurance = () => {
  const [insuranceData, setInsuranceData] = useState({
    name: "",
    age: "",
    plan: "Basic"
  });

  const handleChange = (e) => {
    setInsuranceData({ ...insuranceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Insurance application submitted! Plan: ${insuranceData.plan}`);
  };

  return (
    <div style={containerStyle}>
      <h2>Medical Insurance Information</h2>
      
      {/* Information Section */}
      <div style={infoStyle}>
        <h3>Why Get Medical Insurance?</h3>
        <p>✔ Covers unexpected medical expenses</p>
        <p>✔ Protects you and your family</p>
        <p>✔ Ensures hassle-free hospital treatments</p>
      </div>

      {/* Insurance Form */}
      <div style={formBoxStyle}>
        <h3>Apply for Medical Insurance</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
          <select name="plan" onChange={handleChange}>
            <option value="Basic">Basic - $99/year</option>
            <option value="Premium">Premium - $199/year</option>
            <option value="Ultimate">Ultimate - $299/year</option>
          </select>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

// Styles
const containerStyle = { textAlign: "center", padding: "30px" };
const infoStyle = { background: "#e3f2fd", padding: "15px", margin: "20px", borderRadius: "8px" };
const formBoxStyle = { background: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0,0,0,0.2)", display: "inline-block" };

export default Insurance;
