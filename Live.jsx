/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Col, Row, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Ensure this line is included

const Live = () => {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
  };

  return (
    <>
      <Container fluid>
        <Row className="d-flex gap-4 mt-5 justify-content-evenly">
          <Col xs={12} md={6} lg={4}>
            <div
              className="rounded-top p-3"
              style={{ backgroundColor: "#00008B", height: "25rem" }}
            >
              <div className="text-center">
                <span className="text-success">Join As a Brand</span>
                <h1 className="text-white">
                  Interdum et
                  <br />
                  malesuada fames ac
                </h1>
              </div>
              <span className="text-white text-center d-block mt-3">
                Join as a Brand
              </span>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div
              className="rounded-top p-3"
              style={{ backgroundColor: "#00008B", height: "25rem" }}
            >
              <div className="text-center">
                <span className="text-success mt-4">Join As a Creator</span>
                <h1 className="text-white">
                  Interdum et
                  <br />
                  malesuada fames ac
                </h1>
              </div>
              <span className="text-white text-center d-block mt-3">
                Join as a Creator
              </span>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-start m-5 border mt-5">
          <Col xs={12} md={8} lg={6}>
            <div>
              <div className="d-flex flex-row gap-3 p-3">
                <Col>
                  <FaFacebook size={25} color="#4267B2" />
                </Col>
                <Col>
                  <FaTwitter size={25} color="#1DA1F2" />
                </Col>
                <Col>
                  <FaInstagram size={25} color="#E1306C" />
                </Col>
              </div>
              <h2 className="mt-3">
                Phasellus accumsan imperdiet tempor.
                <br />
                Cras tincidunt, arcu
              </h2>
              <span>
                Integer id augue iaculis, iaculis orci ut, blandit
                <br />
                quam. Donec in elit auctor, finibus quam in, phar
              </span>
            </div>
          </Col>

          <Col xs={12} md={4} lg={6}>
            <div
              className="bg-dark rounded-top d-flex justify-content-center align-items-center p-3"
              style={{ margin: "1rem", height: "15rem" }}
            >
              <div style={{ width: "100%" }}>
                <h6 className="text-white text-center">Join as a brand</h6>
                <ul className="list-unstyled mt-3">
                  <h6 className="text-white text-center">Join as a creator</h6>
                  <h5 className="text-white text-center">Join us</h5>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <h2 className="Rise text-center mt-5">Live Campaigns</h2>

        <div className="slider-container">
          
          <Slider {...settings}>
            <div className="mt-5 d-flex justify-content-center">
              <img src="https://via.placeholder.com/300" alt="Slide 1" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300" alt="Slide 2" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300" alt="Slide 3" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300" alt="Slide 4" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300" alt="Slide 5" />
            </div>
            <div>
              <img src="https://via.placeholder.com/300" alt="Slide 6" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Live;
