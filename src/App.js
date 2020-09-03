import React from 'react';
import './App.css';

import Todos from './Components/Todos'

function App() {
  let style = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#0f0c29',
    background: '-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)',
    background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)'
  
  }

  return (
    <div style={style}>
      <Todos />
    </div>
  );
}

export default App;
