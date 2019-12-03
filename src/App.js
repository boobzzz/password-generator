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

    // generate = () => {
    //     let { length, withSymbols, withUpper, withLower } = this.state;
    //     let password = numbers +
    //         (withSymbols ? symbols : '') +
    //         (withUpper ? abc.toUpperCase() : '') +
    //         (withLower ? abc.toLowerCase() : '');
    //
    //     this.setState({
    //         password: nanoid(password, length)
    //     })
    // }

    generate = (event) => {
        // let name = event.target.name;
        let checked = event.target.checked
        let { length } = this.state;

        // this.setState({
        //     [name]: !this.state.name
        // })

        let options = numbers +
            (checked ? symbols : '') +
            (checked ? abc.toUpperCase() : '') +
            (checked ? abc.toLowerCase() : '')


        console.log(password);
    }
    // nanoid(password, length)

    // toggleUpperCaseHandler = () => {
    //     this.setState({
    //         withUpper: !this.state.withUpper
    //     })
    // }
    //
    // toggleLowerCaseHandler = () => {
    //     this.setState({
    //         withLower: !this.state.withLower
    //     })
    // }

    changeRangeHandler = (event) => {
        this.setState({
            length: event.target.value
        })
    }

    render() {
        let { password, length, withSymbols, withUpper, withLower } = this.state;

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
                    name="withSymbols"
                    title="Symbols"
                    // checked={withSymbols}
                    // onChange={this.toggleOptions}
                />
                <br/>
                <Checkbox
                    id="1-3"
                    name="withUpper"
                    title="To Uppercase"
                    // checked={withUpper}
                    // onChange={this.toggleOptions}
                />
                <br/>
                <Checkbox
                    id="1-4"
                    name="withLower"
                    title="To Lowercase"
                    // checked={withLower}
                    // onChange={this.toggleOptions}
                />
                <br/>
                <br/>
                <button type="button" onClick={this.generate}>Generate</button>
            </div>
        )
    }
}
