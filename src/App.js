import React, { Component } from 'react';
import WordCard from "./WordCard";
import Timer from "./Timer"
<<<<<<< HEAD
import AddName  from './AddName';
=======
>>>>>>> 3f09f80b3856577607dcac9317669ae2dcf2cc40
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