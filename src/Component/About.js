import React from "react";
import "../Component/about.css";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-4">
      {/* Notification Bar */}
      <Alert variant="info" className="text-center">
        📢 Latest Update: Free delivery on orders above ₹500!
      </Alert>

      <Row>
        {/* Left Side - Detailed Information */}
        <Col md={6} className="info-section">
          <h2>About Medixplore</h2>
          <p>
            Medixplore is dedicated to providing high-quality medicines and
            healthcare services. We ensure timely delivery, secure payments,
            and 24/7 customer support to cater to your medical needs.
          </p>
          <h3>Our Vision</h3>
          <p>
            To revolutionize healthcare accessibility by bridging the gap
            between pharmacies and patients through seamless digital solutions.
          </p>
        </Col>

        {/* Right Side - Features, Services & Achievements */}
        <Col md={6} className="features-section">
          <div className="feature-box bg-light p-3 mb-3 shadow-sm">
            <h4>🚀 Fast & Secure Delivery</h4>
            <p>Guaranteed on-time medicine delivery across the country.</p>
          </div>
          <div className="feature-box bg-light p-3 mb-3 shadow-sm">
            <h4>💳 Multiple Payment Options</h4>
            <p>Choose from UPI, Credit/Debit Cards, and Net Banking.</p>
          </div>
          <div className="feature-box bg-light p-3 mb-3 shadow-sm">
            <h4>🏆 Achievements</h4>
            <p>Awarded "Best Online Pharmacy" for three consecutive years.</p>
          </div>
        </Col>
      </Row>

      {/* Bottom Buttons for Navigation */}
      <div className="text-center mt-4">
        <Button variant="primary" className="m-2">Website News</Button>
        <Button variant="success" className="m-2">Latest Contents</Button>
        <Button variant="warning" className="m-2">Another Side</Button>
        <Button variant="danger" className="m-2">Medixplore</Button>
      </div>
    </Container>
  );
};

export default About;
