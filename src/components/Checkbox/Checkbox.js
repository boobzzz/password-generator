import React from 'react';

const Checkbox = (props) => (
    <label>
        <input type="checkbox" {...props}/>
        {props.title}
    </label>
)

export default Checkbox;
