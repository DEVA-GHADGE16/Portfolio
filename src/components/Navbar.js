import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">HOME</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link active" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link active" href="#certificates">Certificates</a></li>
            <li className="nav-item"><a className="nav-link active" href="#hobbies">Hobbies</a></li>
            <li className="nav-item"><a className="nav-link active" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
