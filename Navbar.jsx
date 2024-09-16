/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg bg-white">
  <div className="container-fluid mx-4"> {/* Added 'mx-4' to create margin on the left and right */}
    <a className="navbar-brand" href="#">BookMyCollab</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>  
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto gap-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">What We Do</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">How it Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Join Us As Brand</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Join As a Creator</a>
        </li>
        
      <button className="custom-btn btn-2">Login</button>
      </ul>
    </div>
  </div>
</nav>

    
      
    </>
  )
}

export default Navbar
