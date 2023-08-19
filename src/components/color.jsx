import React, { useState } from 'react';

const Color = () => {
  // Initialize a state variable to hold the color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to toggle the color
  const toggleColor = () => {
    // If the background color is currently red, set it to white; otherwise, set it to red
    setBackgroundColor(backgroundColor === 'red' ? 'white' : 'red');
  };

  return (
     <div style={{ backgroundColor, width: '100vw', height: '100vh' }}>
      <button onClick={toggleColor}>Change Color</button>
     </div>
    
   
  );
};

export default Color;

