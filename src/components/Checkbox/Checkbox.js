import React from 'react';

const Checkbox = (props) => (
    <label>
        <input type="checkbox" name="" {...props}/>
        {props.title}
    </label>
)

export default Checkbox;
