import React, { Component } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light text-uppercase" id='myNav'>
          <div className="container-fluid">
            <NavLink to="start_react" className="navbar-brand text-uppercase myLink"  style={({ isActive }) => {
                    return {
                      color: isActive ? "#1abc9c !important" : "",
                      
                    };
                  }}  >START REACT</NavLink>
            <button className="navbar-toggler my-toggle text-uppercase rounded text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> Menu
              {/* <span className="navbar-toggler-icon navbar-dark"></span> */}
              {/* <svg className="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg> */}
              <i className="fa-solid fa-align-justify myIcon "></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a className="nav-link text-white" href="#">PORTFOLIO</a> */}
                  <NavLink className="nav-link   myLink" style={({ isActive }) => {
                    return {
                      color: isActive ? "#1abc9c !important " : "",
                      
                    };
                  }} to="portfolio" >PORTFOLIO</NavLink>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link text-white" href="#">ABOUT</a> */}
                  <NavLink className="nav-link   myLink" style={({ isActive }) => {
                    return {
                      color: isActive ? "#1abc9c !important " : "",
                      
                    };
                  }} to="about" >ABOUT</NavLink>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link text-white" href="#">CONTACT</a> */}
                  <NavLink className="nav-link   myLink" style={({ isActive }) => {
                    return {
                      color: isActive ? "#1abc9c !important   " : "",
                      
                    };
                  }} to="contact" >CONTACT</NavLink>
                </li>


              </ul>

            </div>
          </div>
        </nav>
      </>
    )
  }
}
