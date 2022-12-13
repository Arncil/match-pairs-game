import './App.css';
import React from 'react';
import Menu from '../Menu/Menu';

// mobile vh fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
// for css: height: calc(var(--vh, 1vh) * 100);

function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
