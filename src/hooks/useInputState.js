import React, { useState } from "react";
export default initialValue => {

const [value, setValue] = useState(initialValue);

//Both of these functions use the const defined above. 
const handleChange = event => {
setValue(event.target.value);
};

const reset = () =>{ //Sets the value to "", empty. 
setValue("");
};

return [value, handleChange, reset]; //Remember the order is important here, placeholders will symbolize these 3 functions in the components this is used in. 
};




