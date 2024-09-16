/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";


const Ugc = () => {
  return (
    <>
    <div className="d-flex justify-content-between mt-5">
      <div>
      <h1 className="Rise" style={{ marginLeft: "5rem" }}>UGC</h1>
      <p className="d-flex justify-content-lg-start" style={{ marginLeft: "5rem" }}>
        Documentation and examples for common text utilities to control
        alignment
      </p>
    </div>
        <div>
          <button className="d-flex justify-content-end rounded-pill">
            View All
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-5">
        <div className="card" style={{ width: "14.5rem" }}>
          <button className="btn btn-danger rounded-pill position-absolute bg-white text-danger">
            Entertenment
          </button>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt="Card Image"
          />
          <div className="card-body d-flex gap-5">
            <div>
              <h5 className="card-title">Aditya Thakur</h5>
              <p className="card-text">Raw Thakur</p>
            </div>
            <div>
              <h5 className="card-title">1.5M</h5>
              <p className="card-text">Followers</p>
            </div>
          </div>
          <div className="border d-flex">
            <div className="d-flex">
              <div className="container d-flex gap-3">
                <Col>
                  <FaFacebook size={15} color="#4267B2" />
                </Col>
                <Col>
                  <FaTwitter size={15} color="#1DA1F2" />
                </Col>
                <Col>
                  <FaInstagram size={15} color="#E1306C" />
                </Col>
              </div>
            </div>
            <div>
              <button className="custom-btn btn-2">compare</button>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "14.5rem" }}>
        <button className="btn btn-danger rounded-pill position-absolute bg-white text-danger">
          Entertenment
        </button>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Card Image"
        />
        <div className="card-body d-flex gap-5">
          <div>
            <h5 className="card-title">Aditya Thakur</h5>
            <p className="card-text">Raw Thakur</p>
          </div>
          <div>
            <h5 className="card-title">1.5M</h5>
            <p className="card-text">Followers</p>
          </div>
        </div>
        <div className="border d-flex">
          <div className="d-flex">
            <div className="container d-flex gap-3">
              <Col>
                <FaFacebook size={15} color="#4267B2" />
              </Col>
              <Col>
                <FaTwitter size={15} color="#1DA1F2" />
              </Col>
              <Col>
                <FaInstagram size={15} color="#E1306C" />
              </Col>
            </div>
          </div>
          <div>
            <button className="custom-btn btn-2">compare</button>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "14.5rem" }}>
      <button className="btn btn-danger rounded-pill position-absolute bg-white text-danger">
        Entertenment
      </button>
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="Card Image"
      />
      <div className="card-body d-flex gap-5">
        <div>
          <h5 className="card-title">Aditya Thakur</h5>
          <p className="card-text">Raw Thakur</p>
        </div>
        <div>
          <h5 className="card-title">1.5M</h5>
          <p className="card-text">Followers</p>
        </div>
      </div>
      <div className="border d-flex">
        <div className="d-flex">
          <div className="container d-flex gap-3">
            <Col>
              <FaFacebook size={15} color="#4267B2" />
            </Col>
            <Col>
              <FaTwitter size={15} color="#1DA1F2" />
            </Col>
            <Col>
              <FaInstagram size={15} color="#E1306C" />
            </Col>
          </div>
        </div>
        <div>
          <button className="custom-btn btn-2">compare</button>
        </div>
      </div>
    </div>
    <div className="card" style={{ width: "14.5rem" }}>
    <button className="btn btn-danger rounded-pill position-absolute bg-white text-danger">
      Entertenment
    </button>
    <img
      src="https://via.placeholder.com/150"
      className="card-img-top"
      alt="Card Image"
    />
    <div className="card-body d-flex gap-5">
      <div>
        <h5 className="card-title">Aditya Thakur</h5>
        <p className="card-text">Raw Thakur</p>
      </div>
      <div>
        <h5 className="card-title">1.5M</h5>
        <p className="card-text">Followers</p>
      </div>
    </div>
    <div className="border d-flex">
      <div className="d-flex">
        <div className="container d-flex gap-3">
          <Col>
            <FaFacebook size={15} color="#4267B2" />
          </Col>
          <Col>
            <FaTwitter size={15} color="#1DA1F2" />
          </Col>
          <Col>
            <FaInstagram size={15} color="#E1306C" />
          </Col>
        </div>
      </div>
      <div>
        <button className="custom-btn btn-2">compare</button>
      </div>
    </div>
  </div>
       
      </div>


      
    </>
  )
}

export default Ugc
