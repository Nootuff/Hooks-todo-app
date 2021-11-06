import React from "react";
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

function ToDo({ task, completed }) { //You can do this instead of having props in these brackets and then putting props.task or whatever down below. 
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemText style={{textDecoration: completed ? "line-through" : "none" /*Ternary operator*/ }}>
                {task} {/*Notice you don't need the props.task because this prop is imported directly from above in the function activation brackets.*/}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete"> {/*To use these icons you must install them with npm i @mui/icons-material*/}
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit"> {/*These labels are for users using a screen reader who can't see the little image*/}
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default ToDo;