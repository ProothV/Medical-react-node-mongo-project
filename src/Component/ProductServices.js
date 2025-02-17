// import React from "react";
// import "../Component/productServices.css"; // Import CSS for styling


// const products = [
//   { id: 1, name: "Paracetamol", image: "https://euon.echa.europa.eu/documents/2435000/3104097/medical_devices2.jpg/521d8f51-47c6-5be9-d12d-03548ab7b721?t=1525357934047/100" },
//   { id: 2, name: "Ibuprofen", image: "https://via.placeholder.com/100" },
//   { id: 3, name: "Antibiotic", image: "https://via.placeholder.com/100" },
//   { id: 4, name: "Cough Syrup", image: "https://via.placeholder.com/100" },
//   { id: 5, name: "Vitamin D", image: "https://via.placeholder.com/100" },
//   { id: 6, name: "Pain Relief Gel", image: "https://via.placeholder.com/100" },
//   { id: 7, name: "Skin Cream", image: "https://via.placeholder.com/100" },
//   { id: 8, name: "Eye Drops", image: "https://via.placeholder.com/100" },
//   { id: 9, name: "Thermometer", image: "https://via.placeholder.com/100" },
//   { id: 10, name: "Blood Pressure Monitor", image: "https://via.placeholder.com/100" },
//   { id: 11, name: "Oximeter", image: "https://via.placeholder.com/100" },
//   { id: 12, name: "Saline Solution", image: "https://via.placeholder.com/100" },
// ];

// const services = [
//   { id: 1, name: "Online Consultation" },
//   { id: 2, name: "Prescription Upload" },
//   { id: 3, name: "Home Delivery" },
//   { id: 4, name: "Health Checkups" },
//   { id: 5, name: "Medical Insurance Assistance" },
//   { id: 6, name: "Emergency Helpline" },
// ];

// const ProductsServices = () => {
//   return (
//     <div className="container">
//       <h2>🛒 Our Products & 🏥 Services</h2>

//       {/* Products Section */}
//       <div className="products-section">
//         {products.map((product) => (
//           <div className="product-card" key={product.id}>
//             <img src={product.image} alt={product.name} />
//             <h5>{product.name}</h5>
//             <button className="order-btn">Order Now</button>
//           </div>
//         ))}
//       </div>

//       {/* Services Section */}
//       <div className="services-section">
//         {services.map((service) => (
//           <div className="service-card" key={service.id}>
//             <h5>{service.name}</h5>
//             <button className="get-btn">Get Service</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsServices;

import React, { useEffect, useState } from "react";
import axios from "axios";


const ProductsServices = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/medicines")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h2>🛒 Our Products</h2>
      <div className="products-section">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsServices;

