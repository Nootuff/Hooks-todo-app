import React from "react";
import useInputState from "../hooks/useInputState"
import TextField from '@mui/material/TextField';

function EditTodoForm({ id, task, editTodoFunc, toggleEdit }) {
    const [value, handleChange, reset] = useInputState(task); //The 3 functions from useInputState all defined in that file, note the order is the same as in that file. value is set to "task" which is the text of the todo which is passed in in the first brackets. 
    return (
        <form onSubmit={(event) => {
        event.preventDefault(); //Prvents from from reloading the page as is normal on form submission.
        editTodoFunc(id, value);
        reset(); //Imported from useInputState.
        toggleEdit(); //Activates the function imported from ToDo that is defined in useToggleState. On submit it is activated setting isEditing to false again. 
        }}>
            <TextField
                value={value} /**/
                onChange={handleChange}
                label="Edit ToDo"
                variant="standard"
                margin="normal"
                fullWidth /*fullwidth, variant and margin are all mui attributes. */
            />
        </form>
    )
}

export default EditTodoForm;