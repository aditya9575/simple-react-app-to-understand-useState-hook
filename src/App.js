import './App.css';

import React, { useState } from 'react';
import Color from './components/color';

function App() {

  const [click, setClick] = useState(0);

  return (
    <div className="app">
  
  <h1>useState Hook Demo</h1>
  <p>You clicked {click} times</p>
  
            <button onClick={() => setClick(click + 1)}>
                Click me
            </button>
<br /><br />
            <Color/>

    </div>
  );
}

export default App;
