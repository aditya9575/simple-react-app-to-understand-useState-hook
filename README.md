set up a react app 

Then in our app.js -> we firstly imported useState hook  and react from react - i.e ->import React, { useState } from 'react';

Then we made the use of this hook to show an onClick functionality of the user number of clicks 
for it ----> we 1stly set the initial value of the clicks as 0 by passing a setClick function to the hook ->
 i.e-> const [click, setClick] = useState(0);

 This is to be done inside the app function and above the return statement 

 After that in the return statement we added a paragraph text that "you clicked "And passed in {click} to it so that it can show the 
 current value of clicks which was initially set to 0 but will update by -> the set click method 
 i.e->      <p>You clicked {click} times</p>
  
            <button onClick={() => setClick(click + 1)}>
                Click me
            </button> 

     HERE WE HAVE A BUTTON WITH AN onClick EVENTLISTENER THAT TRIGGERS THE setClick METHOD WHICH IN TURN ADDS 1 TO THE ORIGNAL VALUE 
     OF CLICK AND UPDATES IT AS A NEW VALUE 


     ------HENCE THE TOTAL NUMBER OF CLICKS START GETTING TO APPEAR IN THE VALUES PART



============================***********************************===================================**********************************

NOW  to show a more complicated option we make use of this hook in one of the other component -> color and then render it here after 
importing to the app.js so it shows the useState demo more properly 

1)import useState and react in the component -> import React, { useState } from 'react';

2) inside the color function apply the useState hook and set its initial value as white ->  i.e
const [backgroundColor, setBackgroundColor] = useState('white');


3) After setting the initial value as white we now define the toggleColor function to change the value of the div when clicked on a BUTTON
i.e-->
const toggleColor = () => {
    // If the background color is currently red, set it to white; otherwise, set it to red
    setBackgroundColor(backgroundColor === 'red' ? 'white' : 'red');
  };


4) Now inside the return statement we create a div -> pass in the background color we set before to it set the div's height & width 

then after inside this div we create a button named change color which triggers the toggleColor function as of the onClick EVENTLISTENER

i.e->  <div style={{ backgroundColor, width: '100vw', height: '100vh' }}>
            <button onClick={toggleColor}>Change Color</button>
       </div>


Now when run the app will also have a button that will turn the div of backgroundColor white and of height and width to -> red/white 
when the button is pressed and the toggleColor function ultimately gets triggered
