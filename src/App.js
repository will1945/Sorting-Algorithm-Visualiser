import React from 'react';
import './App.css';
import Visualiser from './Visualiser/Visualiser.js'
import Toolbar from './Toolbar/Toolbar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Visualiser></Visualiser>
      </header>
    </div>
  );
}

export default App;
