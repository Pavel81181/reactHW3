import { useState } from "react";
import { TextField, Button } from "@mui/material";

function TextDisplayForm() {
    const [text, setText] = useState('');
    const [printedText, setPrintedText] = useState('');

    const handleText = (e) => {
        e.preventDefault();
        setPrintedText(text);
        setText('');
    };

    return ( 
        <div>
            <TextField
            label = 'Enter text'
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            margin="normal"/>

            <Button
            variant="contained"
            color="primary"
            onClick={handleText}
            style={{marginBottom: 20}}> Show text</Button>

            <h4>{printedText}</h4>
        </div>
     );
};

export default TextDisplayForm;