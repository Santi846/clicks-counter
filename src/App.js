import './App.css';
import { button_click_object, button_restart_object } from './components/props.js';
import { Button } from './components/button.jsx';
import { Counter } from './components/counter.jsx';

// export const manageClick = () => {
//    console.table('Click');
// }

// export const restartCounter = () => {
//   console.table('From cero');
// }

function App() {

  
  return (
    <div className='App'>
      <h1 className='title'>Clicks Counter</h1>
      <div className='main_container'>
        <Counter numberClick='5' 
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
