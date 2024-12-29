import { useState } from "react";
import * as React from 'react';

import Button from '@mui/material/Button';




function ParentCounter() {
    console.log("parent")
    const [count, setCount] = useState(0);

    const upCount = () => {
      setCount(count+1);
    }
    
    return ( 
        <div>
            <h2>Родитель</h2>
            <ChildCount count = {count}/>
            <Button variant="contained"  onClick={upCount} >Плюс1</Button>
            
        </div>        

     );
}

function ChildCount({count}) {
    console.log("click")
    return ( 
        <div>
            <p>
                Счетчик внутри
            </p>
            <p>
                Значение счетчика {count} 
            </p>
        </div>
     );
}



export default ParentCounter;