import React from 'react';
import nanoid from 'nanoid';

import Checkbox from './components/Checkbox/Checkbox';

export default class Passgen extends React.Component {
    state = {
        password: '',
        checked: false,
        // checked: {
        //     symbol: false,
        //     upper: false,
        //     lower: false,
        // },
    }

    generate = () => {
        this.setState({
            password: nanoid(),
        })
    }

    changeHandler = (event) => {
        this.setState({
            checked: event.target.checked
        })
        console.log('change');
        // this.setState({
        //     checked: {
        //         symbol: event.target.checked.symbol,
        //         upper: event.target.checked.upper,
        //         lower: event.target.checked.lower,
        //     }
        // })
    }

    render() {
        let {password, checked} = this.state;

        return (
            <div>
                <label>Password:</label>
                {' '}
                <input type="text" defaultValue={password} />
                <br/>
                <br/>
                <Checkbox
                    id="1-1"
                    name="Numbers"
                    checked={true} />
                <br/>
                <Checkbox
                    id="1-2"
                    name="Symbols"
                    checked={checked}
                    onChange={this.changeHandler} />
                <br/>
                <Checkbox
                    id="1-3"
                    name="To Upper Case"
                    checked={checked}
                    onChange={this.changeHandler} />
                <br/>
                <Checkbox
                    id="1-4"
                    name="To Lower Case"
                    checked={checked}
                    onChange={this.changeHandler} />
                <br/>
                <br/>
                <button type="button" onClick={this.generate}>Generate</button>
            </div>
        )
    }
}
