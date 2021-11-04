import React from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useInputState from "../hooks/useInputState"; //make sure this is right. 


function ToDoForm(props) {
    const [value, handleChange, reset] = useInputState(""); //The empty string is "value" in useInputState. 
    return (
        <Paper>
            <TextField value={value} onChange={handleChange} />
        </Paper>
    );
}

export default ToDoForm;