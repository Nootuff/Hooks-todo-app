import React from "react";
import useToggleState from "../hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

function ToDo({ task, completed, id, removeTodoFunc, toggleCompleteFunc }) { //You can do this instead of having props in these brackets and then putting props.task or whatever down below.
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem>
            {isEditing ? (
                <EditTodoForm />
            ) : (//Ternary operator, if isEditing is true then show the editing options, if not, show the toDo details.
                <React.Fragment>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => toggleCompleteFunc(id)}
                    />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" /*Ternary operator*/ }}>
                        {task} {/*Notice you don't need the props.task because this prop is imported directly from above in the function activation brackets.*/}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodoFunc(id)} > {/*To use these icons you must install them with npm i @mui/icons-material*/}
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle} > {/*These labels are for users using a screen reader who can't see the little image*/}
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </React.Fragment>
            )}
        </ListItem>
    );
}

export default ToDo;