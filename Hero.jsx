/* eslint-disable no-unused-vars */
import React from "react";
import wave from "../src/assets/wave.png";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-evenly">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 p-4 m-3" style={{ backgroundColor: '#FAEBD7' }}>
            <div className="text-center">
              <img src={wave} style={{ width: "4rem", margin: "1rem" }} alt="Wave" />
              <h1 className="Rise">
                Simplifying Influencer <br />
                Marketing For You!
              </h1>
              <p>
                Explore creators across YouTube, Instagram &<br />
                Facebook to curate unique content for your brand
              </p>
            </div>
            {/* Dropdowns and Button */}
            <div className="d-flex flex-column flex-md-row gap-4 align-items-center justify-content-center">
              <div className="dropdown">
                <button
                  className=" dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Facebook
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>
                    <button className="dropdown-item" type="button">
                      Instagram
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Snapchat
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      YouTube
                    </button>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="  dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                Select Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li>
                    <button className="dropdown-item" type="button">
                      Instagram
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Snapchat
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      YouTube
                    </button>
                  </li>
                </ul>
              </div>
              <button className="btn btn-primary">Search</button>
            </div>
            {/* Trusted By Section */}
            <div className="text-center mt-5">
              <h1>Trusted By</h1>
              <p className="font-weight-bold text-dark">CHANEL LOUIS VUITTON PRADA CALVIN KLEIN DENIM</p>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center mt-5">
  {/* Larger Image */}
  <img
    src="https://img.freepik.com/premium-photo/confident-portrait-24yearold-indian-college-girl-giving-thumbs-up-casual-wear_1077802-443386.jpg?w=360"
    alt="Girl Thumbs Up"
    className="img-fluid"
    style={{ width: '17rem', height: '17rem' }}
  />
  
  {/* Smaller Image */}
  <div className="mt-3">
    <img
      className='rounded-circle'
      style={{ width: '1.5rem' }}
      src='https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=740'
      alt='Child with curly hair in a lab coat'
    />
    <img
    className='rounded-circle'
    style={{ width: '1.5rem' }}
    src='https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=740'
    alt='Child with curly hair in a lab coat'
  />
  <img
  className='rounded-circle'
  style={{ width: '1.5rem' }}
  src='https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=740'
  alt='Child with curly hair in a lab coat'
/>
<img
className='rounded-circle'
style={{ width: '1.5rem' }}
src='https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=740'
alt='Child with curly hair in a lab coat'
/>
<img
className='rounded-circle'
style={{ width: '1.5rem' }}
src='https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=740'
alt='Child with curly hair in a lab coat'
/>
<img
className='rounded-circle'
style={{ width: '1.5rem' }}
src='https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=740'
alt='Child with curly hair in a lab coat'
/>
  </div>
</div>
            
            
          </div>
        </div>
     
    </>
  );
};

export default Hero;
