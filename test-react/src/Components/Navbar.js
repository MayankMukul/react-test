

import React, { useState } from 'react'

export default function Navbar(props) {

  const[greenmode, setgreenmode]=useState(false);


  function toggleGreen(){
    if(greenmode==false){
      document.body.style.backgroundColor="green";
      setgreenmode(true);
    }else {
      document.body.style.backgroundColor="white"
      setgreenmode(false);
    }
  }
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${
        props.mode === false ? "dark" : "light"
      }`}
      data-bs-theme={`${props.mode === false ? "dark" : "light"}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TextUtils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
          <div className="form-check form-switch mx-3">
           <li className="navbar-nav me-auto mb-2 mb-lg-0">
            <ul className="nav-item">
            <input
                className="form-check-input m-4 "
                type="checkbox"
                role="switch"
                id="toggleGreen"
                onClick={() => {
                  toggleGreen();
                }}
              />
              <label
                className={`form-check-label m-4 text-${
                  props.mode === false ? "white" : "black"
                }`}
                htmlFor="toggleGreen"
              >
                Enable GreenMode
              </label>
            </ul>
            <ul className="nav-item">
            <input
              className="form-check-input m-4 "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className={`form-check-label m-4 text-${
                props.mode === false ? "white" : "black"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
            </ul>
           </li>
              
      
            
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
