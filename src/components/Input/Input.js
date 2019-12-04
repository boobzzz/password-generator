import React from 'react';

const Input = (props) => (
    <label>
        Password: <input type="text" value={props.content} readOnly />
    </label>
)

export default Input;
