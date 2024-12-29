import { useState } from "react";

function Counter() {
    
    
    const [count, setCount] = useState(0)
    const upCount = () => {
      setCount(count +1);
    }
    const downCount = () => {
      setCount(count -1);
    }
    

    return ( 
        <div>
            <span>
            {count}
            </span>
            
            <button onClick={upCount}>click +1 </button>
            <button onClick={downCount}>click -1 </button>
        </div>
     );
}

export default Counter;