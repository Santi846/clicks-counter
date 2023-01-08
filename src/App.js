import './App.css';
import { button_click_object, button_restart_object } from './components/props.js';
import { Button } from './components/button.jsx';
import { Counter } from './components/counter.jsx';
import React from 'react';
import { useState } from "react";

function App() {

  // const [numberClick, setNumClicks] = useState(0);

 const [numberClick, setNumClicks] = useState(0);

 const manageClick = () => {
  setNumClicks(numberClick + 1);
}
    
  
  return (
    <div className='App'>
      <h1 className='title'>Clicks Counter</h1>
      <div className='main_container'>
        <Counter 
        clicks={manageClick.numberClick}
        />
        <Button
          {...button_click_object}
        />
        <Button 
          {...button_restart_object}
        />
      </div>
    </div>
  );
}

export default App;
