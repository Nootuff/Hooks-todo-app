import React from "react";
import ToDo from "./ToDo";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';


function ToDoList(props) {
    if (props.toDoData.length){ //if toDoData has length meaning length of more than 0 meaning there are todos present in the array, render the paper with the list inside. Else if not render null down below. 
    return (
        <Paper>
            <List>
                {props.toDoData.map((todo, index) => (
                    <React.Fragment> {/*This is something called called a React fragment, it ends with </> below, it groups elements together but doesn't result in extra markup on the page. You apparently need to use if here for the Divider below to work for some reason. */}
                        <ToDo
                            id={todo.id}
                            task={todo.task}
                            key={todo.id}
                            completed={todo.completed}
                            removeTodoFunc={props.removeTodoFunc} //Passes the removeTodo function received as a prop from to ToDoApp down once more to the ToDo component, this function is being passed down twice basically. 
                            toggleCompleteFunc={props.toggleCompleteFunc} //Juyst like above, passes toggleCompleteFunc from ToDoApp.
                            editTodoFunc={props.editTodoFunc} 
                        />
                        {index < props.toDoData.length-1 ? <Divider /> : null /*Ternary operator, if index is less than props.toDoData.length-1, render a divider, else render nothing. This prevents the last todo having a deivider under it to make this look neater. Index is a new number generated with each todo? Not sure. */}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
    } else {
    return null; //Return nothing at all if no todos present. 
    }
}

export default ToDoList;