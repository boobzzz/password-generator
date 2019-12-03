import React, { Component } from 'react';
import nanoid from 'nanoid/generate';

import Checkbox from './components/Checkbox/Checkbox';

const numbers = '0123456789';
const symbols = '!@#$%&*-_';
const abc = 'abcdefghijklmnopqrstuvwxyz';

export default class Passgen extends Component {
    state = {
        password: '',
        length: 10,
        withSymbols: false,
        withUpper: false,
        withLower: false,
    }

    toggleOptionsChecked = (event) => {
        let name = event.target.name;
        let checked = event.target.checked;

        this.setState({
            [name]: checked
        })
    }

    generate = () => {
        let { length, withSymbols, withUpper, withLower } = this.state;
        let password = numbers +
            (withSymbols ? symbols : '') +
            (withUpper ? abc.toUpperCase() : '') +
            (withLower ? abc.toLowerCase() : '');

        this.setState({
            password: nanoid(password, length)
        })
    }

    changeLengthHandler = (event) => {
        this.setState({
            length: event.target.value
        })
    }

    render() {
        let { password, length } = this.state;

        return (
            <div>
                <label>
                    Password:
                    {' '}
                    <input type="text" value={password} readOnly />
                </label>
                <br/>
                <br/>
                <label>
                    Length:
                    {' '}
                    <input
                        type="range"
                        min="6" max="14"
                        value={length}
                        onChange={this.changeLengthHandler}
                        readOnly />
                    {' '}
                    <span>{length}</span>
                </label>
                <br/>
                <br/>
                <Checkbox
                    title="Numbers"
                    checked={true}
                    readOnly />
                <br/>
                <Checkbox
                    name="withSymbols"
                    title="Symbols"
                    onChange={this.toggleOptionsChecked}/>
                <br/>
                <Checkbox
                    name="withUpper"
                    title="To Uppercase"
                    onChange={this.toggleOptionsChecked}/>
                <br/>
                <Checkbox
                    name="withLower"
                    title="To Lowercase"
                    onChange={this.toggleOptionsChecked}/>
                <br/>
                <br/>
                <button type="button" onClick={this.generate}>Generate</button>
            </div>
        )
    }
}
