import './App.css';
import Kakashi_Purple_Lightning from './images/Kakashi_Purple_Lightning.jpg'

function App() {
  return (
    <div className='App'>
      {/* <h1 className='title'>Clicks Counter</h1> */}
      <div className='background_container'>
        <img className='background' src={Kakashi_Purple_Lightning} alt='background' />
      </div>
      <div className='main_container'></div>
    </div>
  );
}

export default App;
