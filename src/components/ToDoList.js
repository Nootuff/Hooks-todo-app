import React from "react";
import ToDo from "./ToDo"; 
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

function ToDoList(props) {
return(
<Paper>
   
<List>
{props.toDoData.map(todo => (
<React.Fragment> {/*This is something called called a React fragment, it ends with </> below, it groups elements together but doesn't result in extra markup on the page. You apparently need to use if here for the Divider below to work for some reason. */}

<ToDo task={todo.task} key={todo.id} completed={todo.completed} />

<Divider />
</React.Fragment>
)) }
</List>
</Paper>
);
}

export default ToDoList;