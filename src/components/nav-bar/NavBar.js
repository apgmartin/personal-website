import React, { Component } from 'react';
import "./NavBar.css";

let NavBar = () => {
  return (
    <div className="NavBar">
      <div className="row">
        <div className="nav-bar--link-outer col">
          <a href="#page-1" className="nav-bar--link-inner">Home</a>
        </div>
        <div className="nav-bar--link-outer col">
          <a href="#page-2" className="nav-bar--link-inner">About Me</a>
        </div>
        <div className="nav-bar--link-outer col">
          <a href="#page-3" className="nav-bar--link-inner">Contact</a>
        </div>
        <div className="nav-bar--link-outer col">
          <a href="#page-4" className="nav-bar--link-inner">Links</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
