import React, { useState } from "react";
export default initialValue => {

const [value, setValue] = useState(initialValue);

const handleChange = event => {
setValue(event.target.value);
};

const reset = () =>{
setValue("");
};

return [value, handleChange, reset]; //Remember the order is important here, placeholders will symbolize these 3 functions in the components this is used in. 
};




