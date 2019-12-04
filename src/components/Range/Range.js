import React from 'react';

const Range = (props) => (
    <label>
          Length:
          {" "}
          <input
              type="range"
              min="6"
              max="14"
              value={props.length}
              onChange={props.changed}
              readOnly/>
          {" "}
          <span>{props.length}</span>
    </label>
)

export default Range;
