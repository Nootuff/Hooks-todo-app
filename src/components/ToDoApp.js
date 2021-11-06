import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import ToDoForm from "./ToDoForm";  
import ToDoList from "./ToDoList"; 

function ToDoApp() {
  const initial = [
    { id: 1, task: "task 1", completed: false },
    { id: 2, task: "task 2", completed: true },
    { id: 3, task: "task 3", completed: false }
  ];
  const [todos, setTodos] = useState(initial); //The value of todos is set to the array in initial

  const addTodo = (newText) => {
    setTodos([...todos, { id: 4, task: newText, completed: false }]) //This function will overwrite and replace existing todos. 
  }

  return (
    <Paper style={{ /*Paper is a component from material ui imported above.*/
      padding: 0,
      margin: 0,
      height: "100vh"
    }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todo App With with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{marginTop: "1rem"}}>
        <Grid item xs={11} md={8} lg={4}>{/*These numbers are the sizing like bootstraps responsive sizes.*/}
        <ToDoForm addTodoFunc={addTodo} />
        <ToDoList toDoData={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ToDoApp;