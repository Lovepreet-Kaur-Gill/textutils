import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const handleModeChange = () => {
    props.toggleMode(); 
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand`} to="/">{props.title}</Link>
        {/* <a className={`navbar-brand`} href="#">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active`} to="/">Home</Link>
              {/* <a className={`nav-link active`} href="#">Home</a>  */}
            </li>
            <li className="nav-item">
               <Link className={`nav-link`} to="/about">About</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              onClick={handleModeChange} 
              role="switch" 
              id="flexSwitchCheckDefault" 
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === 'light' ? 'dark' : 'light'} mode
            </label>
          </div>
        </div>
      </div>
    </nav> 
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "Set about here"
};
