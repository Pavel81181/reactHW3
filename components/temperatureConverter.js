import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function TemperatureConverter() {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [celsiusValue, setCelsiusValue] = useState(true)
    const updateCelsius = (e) => {
        setCelsius(e.target.value);
        setCelsiusValue(true)
    }
    const updateFahrenheit = (e) => {
        setFahrenheit(e.target.value);
        setCelsiusValue(false)
    }

    const temperatureConverter = () => {
        if (celsiusValue) {
            setFahrenheit((Number.parseFloat(celsius) * 9 / 5 + 32 ).toFixed(1));
        } else {
            setCelsius(((Number.parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(1));
        }
    }

    
    return (
        <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="standard-select-currency"
              label="°C"
              helperText="Select the unit of measurement"
              value={celsius}
              onChange={updateCelsius}
            >

            </TextField>
            <TextField
              id="standard-select-currency-native"
              label="°F"
              helperText="Select the unit of measurement"
              value={fahrenheit}
              onChange={updateFahrenheit}
            >
            </TextField>
          </div>
          <Button variant="outlined" onClick={temperatureConverter} size="small" color="secondary">Преобразовать</Button>
        </Box>
        
      );


}