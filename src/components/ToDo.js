import React from "react";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

function ToDo({ task, completed }) { //You can do this instead of having props in these brackets and then putting props.task or whatever down below. 
    return (
        <Paper>
            <ListItem>
                <ListItemText>
                    {task}
                </ListItemText>
            </ListItem>
        </Paper>
    );
}

export default ToDo;