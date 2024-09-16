/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Meet = () => {
  return (
    <div className="meet-section">
      <Container fluid>
        <Row className="mt-5">
          {/* Left Section */}
          <Col xs={12} md={6} className="left-section d-flex flex-column align-items-start" style={{ backgroundColor: '#FFFDD0', padding: '2rem' }}>
            <h1 className="text-start">Meet<br />The Design<br />Creator</h1>
            <div className="d-flex align-items-center mt-4">
              <p className="fw-bold mb-0" style={{ textDecoration: 'underline' }}>Read more.</p>
              <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
              </svg>
            </div>
          </Col>

          {/* Right Section */}
          <Col xs={12} md={6} className="right-section d-flex flex-column align-items-start" style={{ padding: '2rem' }}>
            <p className='mt-5 fs-1 fw-bold'>Aman K.</p>
            <div className='d-flex align-items-center gap-4'>
              <img
                className='rounded-circle'
                style={{ width: '4rem' }}
                src='https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=740'
                alt='Design Creator'
              />
              <h1>Design Creator</h1>
            </div>
            <span className='mt-3 font-monospace text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
              sed do eiusmod tempor incididunt ut labore et dolore<br />
              magna aliqua. Ut enim ad mini
            </span>
            <div className='d-flex align-items-center gap-3 mt-4'>
              {/* Small Circular Images */}
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  className='rounded-circle'
                  style={{ width: '3rem' }}
                  src='https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=740'
                  alt='Design Image'
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Meet;
