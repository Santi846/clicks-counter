import './App.css';
import { button_click_object, button_restart_object } from './components/props.js';
import { Button } from './components/button.jsx';
import { Counter } from './components/counter.jsx';
import React from 'react';
 import { useState } from "react";

function App() {

  const [numberClick, setNumClicks ] = useState(0);

  const manageClick = () => {
   setNumClicks(numberClick + 1);
   console.log('Counting...');
 };

 const restartCounter = () => {
  setNumClicks(0);
  console.log('Start again...');
 };
    
  
  return (
    <div className='App'>
      <h1 className='title'>Clicks Counter</h1>
      <div className='main_container'>
        <Counter 
        numberClick={numberClick}
        />
        <Button
          {...button_click_object}  
          manageClick={manageClick}
          
        />
        <Button 
          {...button_restart_object}
          restartCounter={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
