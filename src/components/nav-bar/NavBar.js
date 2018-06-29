import React, { Component } from 'react';
import "./NavBar.css";

let NavBar = () => {
  return (
    <div className="NavBar">
      <div className="">
        <div className="nav-bar--link-outer">
          <a href="#" className="nav-bar--link-inner">Home</a>
        </div>
        <div className="nav-bar--link-outer">
          <a href="#" className="nav-bar--link-inner">About Me</a>
        </div>
        <div className="nav-bar--link-outer">
          <a href="#" className="nav-bar--link-inner">Contact</a>
        </div>
        <div className="nav-bar--link-outer">
          <a href="#" className="nav-bar--link-inner">Links</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
