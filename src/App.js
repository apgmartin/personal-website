import React, { Component } from 'react';
import "./App.css";
import NavBar from './components/nav-bar/NavBar';
import FullPageContent from './components/full-page-content/FullPageContent';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NavBar/>
        <FullPageContent pageClass='page-1' displayArrow={true}/>
        <FullPageContent pageClass='page-2' displayArrow={true}/>
        <FullPageContent pageClass='page-3' displayArrow={true}/>
        <FullPageContent pageClass='page-4' displayArrow={false}/>
      </div>
    );
  }
}

export default App;
