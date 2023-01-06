import './App.css';
import logo from './images/logo_FCC.jpg';
import { button_click_object, button_restart_object } from './components/props.js';
import { Button } from './components/button.jsx';


function App() {
  // function manageClick() {

  // }
  return (
    <div className='App'>
      {/* <h1 className='title'>Clicks Counter</h1> */}
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className='main_container'>
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
