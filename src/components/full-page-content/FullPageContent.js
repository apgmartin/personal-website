import React, { Component } from 'react';
import "./FullPageContent.css";

let FullPageContent = props => {
  return (
    <div id={props.pageClass} className={`FullPageContent ${props.pageClass}`}>
      
      <div className='full-page--arrow'></div>
    </div>
  )
}

export default FullPageContent;
