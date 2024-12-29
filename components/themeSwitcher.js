import { useState } from "react";

function ThemeSwitcher() {
   
    const [theme, setTheme] = useState('light');
    function SwitchTheme() {
       if (theme === 'light') {
        setTheme('dark');
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
       } else {
        setTheme('light');
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';

       }
    }
    
   
    
    return ( 
        <>
        <button onClick={SwitchTheme} >Switch</button>
        </>

     );
}

export default ThemeSwitcher;