import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

function ToDoApp() {

  const [todos, setTodos] = useState([]);
    return (
      <Paper style={{ /*Paper is a component from material ui imported above.*/
        padding: 0, 
        margin: 0, 
        height: "100vh"}}>
        <AppBar color="primary" position="static" style={{height: "64px"}}>
          <Toolbar>
          <Typography color="inherit">Todo App With with hooks</Typography>
          </Toolbar>
        </AppBar>
      </Paper>
    );
  }
  
  export default ToDoApp;
  