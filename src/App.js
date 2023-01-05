import './App.css';
import Kakashi_Purple_Lightning from './images/Kakashi_Purple_Lightning.jpg';
import { button_object } from './components/props.js';
import { Button } from './components/button.jsx';


function App() {
  return (
    <div className='App'>
      {/* <h1 className='title'>Clicks Counter</h1> */}
      <div className='background_container'>
        <img className='background' src={Kakashi_Purple_Lightning} alt='background' />
      </div>
      <div className='main_container'>
        {/* <Button 
        {...button_object}
        /> */}
      </div>
    </div>
  );
}

export default App;
