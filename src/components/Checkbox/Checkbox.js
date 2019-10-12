import React from 'react';

const Checkbox = (props) => (
    <label>
        <input type="checkbox" defaultChecked={props.checked} />
        {props.name}
    </label>
)

export default Checkbox;
