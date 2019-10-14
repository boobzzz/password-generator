import React from 'react';

const Checkbox = (props) => (
    <label>
        <input type="checkbox"/>
        {props.name}
    </label>
)

export default Checkbox;
