import './App.css';
import { button_click_object, button_restart_object } from './components/props.js';
import { Button } from './components/button.jsx';
import { Counter } from './components/counter.jsx';
import React from 'react';
// import { useState } from "react";

//CLASS COMPONENT
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numberClick: 0
    };
    
    //bind methonds with component constructor
    this.manageClick = this.manageClick.bind(this);
    this.restartCounter = this.restartCounter.bind(this);
  }

  manageClick(){
    this.setState(({numberClick}) => ({numberClick: numberClick + 1}));
  }

  restartCounter(){
    this.setState(({numberClick:0}));
  }

  render(){

  return (
    <div className='App'>
      <h1 className='title'>Clicks Counter</h1>
      <div className='main_container'>
        <Counter 
        numberClick={this.state.numberClick}
        />
        <Button
          {...button_click_object}  
          manageClick={this.manageClick}
          
        />
        <Button 
          {...button_restart_object}
          restartCounter={this.restartCounter}
        />
      </div>
    </div>
  );
  }
}

//FUNCTION COMPONENT
// function App() {

  //Hooks//

//   const [numberClick, setNumClicks ] = useState(0);

//   const manageClick = () => {
//    setNumClicks(numberClick + 1);
//    console.log('Counting...');
//  };

//  const restartCounter = () => {
//   setNumClicks(0);
//   console.log('Start again...');
//  };
    
  
//   return (
//     <div className='App'>
//       <h1 className='title'>Clicks Counter</h1>
//       <div className='main_container'>
//         <Counter 
//         numberClick={numberClick}
//         />
//         <Button
//           {...button_click_object}  
//           manageClick={manageClick}
          
//         />
//         <Button 
//           {...button_restart_object}
//           restartCounter={restartCounter}
//         />
//       </div>
//     </div>
//   );
// }

export default App;
