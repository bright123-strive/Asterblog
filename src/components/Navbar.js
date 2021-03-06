import React from 'react'

import logo from "../logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars}  from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">

  <a className ="navbar-brand" href="navabar.js"><img className="logo" src={logo} alt="logo.." /></a>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>

  <div className ="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className ="navbar-nav ml-auto">
      <li className ="nav-item active">
        <a className ="nav-link " href="navbar.js">Home <span className ="sr-only"></span></a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link" href="navbar.js">Services</a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link" href="navbar.js">Team</a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link" href="navbar.js">Projects</a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link" href="navbar.js">Portfolio</a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link" href="navbar.js">Contacts us</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
        
    )
}

export default navbar
