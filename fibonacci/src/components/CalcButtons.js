import React from 'react';
import Button from 'react-bootstrap/Button'; 
//import FiboLoop from "./FiboLoop";


const CalcButtons = function() {
   return (
      <div className="buttoncard">
         <div>
            <Button variant="success">Loop Way</Button>
            <Button variant="success">Recursion Way</Button>
            <Button variant="success">Reduce Way</Button>
            <Button variant="warning">Reset</Button>
         </div>
      </div>
   );
};

export default CalcButtons;