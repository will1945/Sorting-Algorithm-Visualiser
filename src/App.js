import React from 'react';
import './App.css';
import Visualiser from './Visualiser/Visualiser.js'
import Toolbar from './Toolbar/Toolbar.js'
import MainBackground from './Assets/Images/Main.jpg'

function App() {
  return (
    <div className="App">
      <img src={MainBackground} alt="Background Img"></img>
        <header className="App-header">
            <Visualiser></Visualiser>
        </header>
    </div>
  );
}

export default App;
