import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

function ToDoApp() {
  const initial = [
    { id: 1, task: "task 1", completed: false },
    { id: 2, task: "task 2", completed: true },
    { id: 3, task: "task 3", completed: false }
  ];
  const [todos, setTodos] = useState(initial); //The value of todos is set to the array in initial

  const addTodo = (newText) => {
    setTodos([...todos, { id: uuidv4(), task: newText, completed: false }]) //This function will overwrite and replace existing todos. 
  }

  const removeTodo = (todoId) => { //todoId is the .id value from the todo component you are activating this function from. 
    //Filter out the removed todo. 
    const updatedTodos = todos.filter((todo) => todo.id !== todoId) //create an array of todos where the id of the todo does not match the id that was passed in. This will filter out the one todo with the id that was passed in. 
    setTodos(updatedTodos) //Call set setTodos with new updatedTodos array created above that has everything but the todo with the id . 
  }

  const toggleComplete = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo//Map over current todos, check if the todo.id of the todo the map is looking at is equal to the id that was passed in, if they match, set that todo to be the same with all the same data but its completed value to be the opposite of what it was, like a toggle. If the ids dont match, return the regular todo as it is. 
    );
    setTodos(updatedTodos); //Set todos to be the updated modified array created above. 
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
      <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>{/*These numbers are the sizing like bootstraps responsive sizes.*/}
          <ToDoForm addTodoFunc={addTodo} />
          <ToDoList
            toDoData={todos}
            removeTodoFunc={removeTodo}
            toggleCompleteFunc={toggleComplete}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ToDoApp;