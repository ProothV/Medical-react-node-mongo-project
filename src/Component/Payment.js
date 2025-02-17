// import React from "react";
// import bgimgs from '../images'

// const Payment = () => {
//   const loadRazorpay = () => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       const options = {
//         key: "rzp_test_yourkeyhere", // Replace with your Razorpay test/live key
//         amount: 50000, // Amount in paisa (e.g., ₹500 = 50000 paisa)
//         currency: "INR",
//         name: "MediDelivery",
//         description: "Purchase Medicines",
//         image: {},
//         handler: (response) => {
//           alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//         },
//         prefill: {
//           name: "John Doe",
//           email: "johndoe@example.com",
//           contact: "9876543210",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     };
//   };

//   return (
//     <div className="container mt-5 text-center">
//       <h2>Complete Your Payment</h2>
//       <p>Pay securely for your medicine orders</p>
//       <button className="btn btn-success px-4 py-2" onClick={loadRazorpay}>
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const Payment = () => {
//   const [paid, setPaid] = useState(false);
//   const [error, setError] = useState(null);

//   const handleApprove = (orderID) => {
//     setPaid(true);
//     alert(`Payment successful! Order ID: ${orderID}`);
//   };

//   return (
//     <div className="container mt-5 text-center">
//       <h2>Complete Your Payment</h2>
//       <p>Pay securely for your medicine orders with PayPal.</p>

//       {paid ? (
//         <h4 className="text-success">Payment Successful! 🎉</h4>
//       ) : (
//         <PayPalScriptProvider options={{ "client-id": "ATWVAeoxZ2djB1iuA1Gm5eBH1WOBu_fU0iAiY8c0aCC-g7FQrND-CtnhwrhK2j2-yRhnRThz7fnH-q0Y" }}>
//           <PayPalButtons
//             style={{ layout: "vertical" }}
//             createOrder={(data, actions) => {
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     amount: {
//                       value: "10.00", // Replace with dynamic amount
//                     },
//                   },
//                 ],
//               });
//             }}
//             onApprove={async (data, actions) => {
//               const order = await actions.order.capture();
//               handleApprove(order.id);
//             }}
//             onError={(err) => {
//               setError(err);
//               console.error("PayPal Checkout Error:", err);
//             }}
//           />
//         </PayPalScriptProvider>
//       )}

//       {error && <p className="text-danger">Payment failed: {error.message}</p>}
//     </div>
//   );
// };

// export default Payment;
// these sis the file

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle successful payment
  const handleApprove = (orderID) => {
    setPaid(true);
    alert(`Payment successful! Order ID: ${orderID}`);
  };

  return (
    <div className="container" style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2 className="text-center">Payment Details</h2>

      {/* Payment Form */}
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <label>Amount (in USD):</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          required
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </form>

      {/* PayPal Button */}
      {formData.amount && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <PayPalScriptProvider options={{ "client-id": "ATWVAeoxZ2djB1iuA1Gm5eBH1WOBu_fU0iAiY8c0aCC-g7FQrND-CtnhwrhK2j2-yRhnRThz7fnH-q0Y" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{ amount: { value: formData.amount } }],
                });
              }}
              onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                handleApprove(order.id);
              }}
              onError={(err) => {
                setError(err);
                console.error("PayPal Error:", err);
              }}
            />
          </PayPalScriptProvider>
        </div>
      )}

      {/* Payment Status Messages */}
      {paid && <p className="text-success text-center">✅ Payment Successful! 🎉</p>}
      {error && <p className="text-danger text-center">❌ Payment Failed: {error.message}</p>}
    </div>
  );
};

export default Payment;

