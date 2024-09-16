/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const Catogeri = () => {
  return (
    <Container fluid>
      <div className='' style={{backgroundColor:'#FFFDD0', margin:'2rem'}}>
        <div className="d-flex justify-content-between mt-5">
          <h1 className="Rise">Categories</h1>
          <button className="btn btn-primary rounded-pill">View All</button>
        </div>

        <Row className='d-flex justify-content-center gap-4 mt-5'>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="card bg-warning text-white rounded-md" style={{ height:'10rem' }}>
              <div className="card-body d-flex flex-column align-items-center">
                <div className="card-title text-center">
                  <h5>The<br/>Foodie</h5>
                </div>
                <div>
                  <svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="card text-white" style={{color:'#006400', backgroundColor:'#006400', height:'10rem'}}>
              <div className="card-body d-flex flex-column align-items-center">
                <div className="card-title text-center">
                  <h5>The <br/>Techies</h5>
                </div>
                <div>
                  <svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="card bg-primary text-white" style={{ height:'10rem' }}>
              <div className="card-body d-flex flex-column align-items-center">
                <div className="card-title text-center">
                  <h5>The<br/>Fashionistas</h5>
                </div>
                <div>
                  <svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="card bg-danger text-white" style={{ height:'10rem' }}>
              <div className="card-body d-flex flex-column align-items-center">
                <div className="card-title text-center">
                  <h5>The<br/>Podcasters</h5>
                </div>
                <div>
                  <svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="card bg-info text-white" style={{ height:'10rem' }}>
              <div className="card-body d-flex flex-column align-items-center">
                <div className="card-title text-center">
                  <h5>The<br/>Travellers</h5>
                </div>
                <div>
                  <svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Catogeri;
