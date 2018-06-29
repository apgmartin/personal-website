import React, { Component } from 'react';
import "./App.css";
import NavBar from './components/nav-bar/NavBar';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NavBar/>
        <h1>Ali's Website is amazing!</h1>
      </div>
    );
  }
}

export default App;
