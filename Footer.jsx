/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container fluid className="bg-light py-4">
        <Row className="text-center text-md-start">
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <h5>BookMyCollab</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur<br />
              adipiscing elit, sed do eiusmod tempor<br />
              incididunt ut
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-dark"><FaFacebook size={20} color="#4267B2" /></a>
              <a href="#" className="text-dark"><FaTwitter size={20} color="#1DA1F2" /></a>
              <a href="#" className="text-dark"><FaInstagram size={20} color="#E1306C" /></a>
            </div>
          </Col>

          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">About</a></li>
              <li><a href="#" className="text-dark">Career</a></li>
              <li><a href="#" className="text-dark">Terms & Conditions</a></li>
              <li><a href="#" className="text-dark">Privacy Policy</a></li>
              <li><a href="#" className="text-dark">Refund Policy</a></li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <h5>Join us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Join as a brand</a></li>
              <li><a href="#" className="text-dark">Join as a creator</a></li>
              <li><a href="#" className="text-dark">Find creator</a></li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="bg-dark text-white py-2 text-center">
        <p className="mb-0">No Upfront Payment • Verified Creators • Inbuilt Messengers • Secure and Timely Payment</p>
      </div>

      <div className="bg-light text-dark py-2 text-center">
        <p className="mb-0">© Copyright • All Rights Reserved</p>
        <p className="mb-0">BookMyCollab 2024</p>
      </div>
    </>
  );
}

export default Footer;
