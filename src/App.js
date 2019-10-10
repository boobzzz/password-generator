import React from 'react';
import nanoid from 'nanoid';

export default class Passgen extends React.Component {
    state = {
        password: '',
    }

    generator = () => {
        this.setState({
            password: nanoid(),
        })
    }

    render() {
        let {password} = this.state;
        return (
            <div>
                <label>Password:</label>
                {' '}
                <input type="text" value={password} />
                {' '}
                <button onClick={this.generator}>Generate</button>
            </div>
        )
    }
}
