import React, { Component } from 'react';
import WordCard from "./WordCard";
import Timer from "./Timer"
import AddName  from './AddName';
import './App.css';
const word = "Hello"
class App extends Component { 
  render() { 
    return ( 
    <div className="App">
      <AddName/>
      <WordCard value = {word}/>
      <Timer/>
    </div> 
    ); 
  } 
} 
export default App;