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

    symbolsToggleHandler = () => {
        this.setState({
            withSymbols: !this.state.withSymbols
        })
    }

    upperCaseToggleHandler = () => {
        this.setState({
            withUpper: !this.state.withUpper
        })
    }

    lowerCaseToggleHandler = () => {
        this.setState({
            withLower: !this.state.withLower
        })
    }

    rangeChangeHandler = (event) => {
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
                    <input type="text" defaultValue={password} />
                </label>
                <br/>
                <br/>
                <label>
                    Length:
                    {' '}
                    <input
                        type="range"
                        min="6" max="14"
                        defaultValue={length}
                        onChange={this.rangeChangeHandler} />
                    {' '}
                    <span>{length}</span>
                </label>
                <br/>
                <br/>
                <Checkbox
                    id="1-1"
                    title="Numbers"
                    defaultChecked={true} />
                <br/>
                <Checkbox
                    id="1-2"
                    title="Symbols"
                    defaultChecked={withSymbols}
                    onChange={this.symbolsToggleHandler} />
                <br/>
                <Checkbox
                    id="1-3"
                    title="To Uppercase"
                    defaultChecked={withUpper}
                    onChange={this.upperCaseToggleHandler} />
                <br/>
                <Checkbox
                    id="1-4"
                    title="To Lowercase"
                    defaultChecked={withLower}
                    onChange={this.lowerCaseToggleHandler} />
                <br/>
                <br/>

                <button type="button" onClick={this.generate}>Generate</button>
            </div>
        )
    }
}
