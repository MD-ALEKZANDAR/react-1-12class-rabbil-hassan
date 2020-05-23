import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './myCoponents/Hello'
import Welcome from './myCoponents/Welcome'


function App() {
  return (
    <div className="App">
      <Hello age="20"name="alex"></Hello>
     <Hello age="30"name="twolex"></Hello>
     <Welcome name="threelex 1"></Welcome>
     <Welcome name="melex 2"></Welcome>
     <Welcome name="melex 3"></Welcome>
    </div>

  )
}

export default  App;


