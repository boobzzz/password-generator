import React from 'react';
import nanoid from 'nanoid/generate';

import Checkbox from './components/Checkbox/Checkbox';

const numbers = '0123456789';
const symbols = '!@#$%&*-_';
const abc = 'abcdefghijklmnopqrstuvwxyz';

export default class Passgen extends React.Component {

    state = {
        password: '',
        length: 10,
        withSymbols: false,
        withUpper: false,
        withLower: false,
    }

    generate = () => {
        let {length, withSymbols, withUpper, withLower} = this.state;
        let password = numbers +
            (withSymbols ? symbols : '') +
            (withUpper ? abc.toUpperCase() : '') +
            (withLower ? abc.toLowerCase() : '');

        this.setState({
            password: nanoid(password, length)
        })
    }

    toggleSymbolsHandler = () => {
        this.setState({
            withSymbols: !this.state.withSymbols
        })
    }

    toggleUpperCaseHandler = () => {
        this.setState({
            withUpper: !this.state.withUpper
        })
    }

    toggleLowerCaseHandler = () => {
        this.setState({
            withLower: !this.state.withLower
        })
    }

    changeRangeHandler = (event) => {
        this.setState({
            length: event.target.value
        })
    }

    render() {
        let {password, length, withSymbols, withUpper, withLower} = this.state;

        return (
            <div>
                <label>
                    Password:
                    {' '}
                    <input
                        type="text"
                        value={password}
                        readOnly />
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
                        onChange={this.changeRangeHandler}
                        readOnly />
                    {' '}
                    <span>{length}</span>
                </label>
                <br/>
                <br/>
                <Checkbox
                    id="1-1"
                    title="Numbers"
                    checked={true}
                    readOnly />
                <br/>
                <Checkbox
                    id="1-2"
                    title="Symbols"
                    checked={withSymbols}
                    onChange={this.toggleSymbolsHandler} />
                <br/>
                <Checkbox
                    id="1-3"
                    title="To Uppercase"
                    checked={withUpper}
                    onChange={this.toggleUpperCaseHandler} />
                <br/>
                <Checkbox
                    id="1-4"
                    title="To Lowercase"
                    checked={withLower}
                    onChange={this.toggleLowerCaseHandler} />
                <br/>
                <br/>
                <button type="button" onClick={this.generate}>Generate</button>
            </div>
        )
    }
}
