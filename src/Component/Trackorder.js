import React, { useState } from "react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState("");

  // Mock Order Data
  const mockOrders = {
    "12345": {
      id: "12345",
      date: "Feb 10, 2025",
      items: [
        { name: "Paracetamol", quantity: 2 },
        { name: "Vitamin C Tablets", quantity: 1 }
      ],
      total: "$25.00",
      status: "Shipped"
    },
    "67890": {
      id: "67890",
      date: "Feb 12, 2025",
      items: [
        { name: "Cough Syrup", quantity: 1 },
        { name: "Pain Relief Gel", quantity: 1 }
      ],
      total: "$18.50",
      status: "Processing"
    }
  };

  const handleSearch = () => {
    if (mockOrders[orderId]) {
      setOrderDetails(mockOrders[orderId]);
      setError("");
    } else {
      setOrderDetails(null);
      setError("Order not found. Please check your Order ID.");
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSearch} style={btnStyle}>Track Order</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {orderDetails && (
        <div style={orderBoxStyle}>
          <h3>Order Details</h3>
          <p><strong>Order ID:</strong> {orderDetails.id}</p>
          <p><strong>Date:</strong> {orderDetails.date}</p>
          <p><strong>Items:</strong></p>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>{item.name} (x{item.quantity})</li>
            ))}
          </ul>
          <p><strong>Total:</strong> {orderDetails.total}</p>
          <p><strong>Status:</strong> 
            <span style={getStatusStyle(orderDetails.status)}>
              {orderDetails.status}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: "center",
  padding: "30px"
};

const inputStyle = {
  padding: "10px",
  width: "200px",
  marginRight: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btnStyle = {
  padding: "10px 15px",
  backgroundColor: "#008CBA",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const orderBoxStyle = {
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  display: "inline-block",
  textAlign: "left"
};

// Dynamic status styling
const getStatusStyle = (status) => {
  const colors = {
    Processing: "orange",
    Shipped: "blue",
    Delivered: "green"
  };
  return { color: colors[status], fontWeight: "bold" };
};

export default TrackOrder;
