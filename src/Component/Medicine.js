
// // Medicine.js
// import React from "react";
// import { Card, Container, Row, Col} from "react-bootstrap";
// // import "./Medicine.css";

// const medicines = [
//   { name: "Paracetamol", type: "Tablet", price: "₹50", image: "paracetamol.jpg" },
//   { name: "Cough Syrup", type: "Tonic", price: "₹120", image: "cough_syrup.jpg" },
//   { name: "ORS Solution", type: "Saline", price: "₹30", image: "ors.jpg" },
//   { name: "Vitamin Capsules", type: "Capsule", price: "₹200", image: "vitamin_capsules.jpg" },
// ];

// const Medicine = () => {
//   return (
//     <Container>
//       <Container fluid className="bg-info text-white text-center p-4 mb-4 rounded">
//       <h1>Exclusive Medical Offers!</h1>
//       <p>Get the best deals on medicines and health products.</p>
//       </Container>

//       <Row>
//         {medicines.map((med, index) => (
//           <Col md={3} key={index}>
//             <Card className="medicine-card">
//               <Card.Img variant="top" src={med.image} alt={med.name} />
//               <Card.Body>
//                 <Card.Title>{med.name}</Card.Title>
//                 <Card.Text>
//                   Type: {med.type} <br />
//                   Price: {med.price}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Medicine;

import React from "react";
import { FaCapsules, FaPills, FaSyringe, FaFlask, FaBriefcaseMedical } from "react-icons/fa";

const medicines = [
  { id: 1, name: "Capsules", icon: <FaCapsules />, price: "₹250", description: "Effective and safe capsules." },
  { id: 2, name: "Tablets", icon: <FaPills />, price: "₹180", description: "Quality tablets for various treatments." },
  { id: 3, name: "Injections", icon: <FaSyringe />, price: "₹400", description: "Essential injections available." },
  { id: 4, name: "Tonics", icon: <FaFlask />, price: "₹150", description: "Healthy and beneficial tonics." },
  { id: 5, name: "Salines", icon: <FaBriefcaseMedical />, price: "₹300", description: "Saline solutions for hydration." },
];

const Medicine = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      {/* Jumbotron Offer */}
      <div
        style={{
          backgroundColor: "#008CBA",
          color: "white",
          padding: "20px",
          textAlign: "center",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2>🎉 Special Offer! 20% OFF on All Medicines 🎉</h2>
        <p>Limited-time offer. Order now and stay healthy!</p>
      </div>

      {/* Medicine Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            style={{
              padding: "15px",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "10px",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)")}
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div style={{ fontSize: "40px", color: "#008CBA" }}>{medicine.icon}</div>
            <h3>{medicine.name}</h3>
            <p>{medicine.description}</p>
            <p style={{ fontWeight: "bold", color: "green" }}>{medicine.price}</p>
            <button style={{ padding: "8px 12px", backgroundColor: "#008CBA", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicine;
