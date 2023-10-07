

import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${(props.mode===false)?"dark":"light"}`} data-bs-theme={`${(props.mode===false)?"dark":"light"}`}>
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
          </ul>
          <div className="form-check form-switch mx-3">

            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className={`form-check-label text-${(props.mode===false)?"white":"black"}`}
              htmlFor="flexSwitchCheckDefault" 
            >
              Enable DarkMode
            </label>
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
