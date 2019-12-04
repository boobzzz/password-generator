import React, { Component } from "react";
import nanoid from "nanoid/generate";

import Checkbox from "./components/Checkbox/Checkbox";
import Input from "./components/Input/Input";
import Range from "./components/Range/Range";
import Button from "./components/Button/Button";

const numbers = "0123456789";
const symbols = "!@#$%&*-_";
const abc = "abcdefghijklmnopqrstuvwxyz";

function str(s, uc, lc) {
    return (
        numbers +
        (s ? symbols : "") +
        (uc ? abc.toUpperCase() : "") +
        (lc ? abc.toLowerCase() : "")
    )
}

export default class Passgen extends Component {
    state = {
      password: "",
      length: 10,
      withSymbols: false,
      withUpper: false,
      withLower: false
    }

    toggleOptionsChecked = event => {
        let { name, checked } = event.target;

        this.setState({
          [name]: checked
        })
    }

    generate = () => {
        let { length, withSymbols, withUpper, withLower } = this.state;
        let string = str(withSymbols, withUpper, withLower);

        this.setState({
            password: nanoid(string, length)
        })
    };

    changeLengthHandler = event => {
        this.setState({
            length: event.target.value
        })
    }

    render() {
        let { password, length } = this.state;

        return (
            <div>
                <Input content={password} />
                <br />
                <br />
                <Range length={length} changed={this.changeLengthHandler} />
                <br />
                <br />
                <Checkbox title="Numbers" checked={true} readOnly />
                <br />
                <Checkbox
                    name="withSymbols"
                    title="Symbols"
                    onChange={this.toggleOptionsChecked} />
                <br />
                <Checkbox
                    name="withUpper"
                    title="To Uppercase"
                    onChange={this.toggleOptionsChecked} />
                <br />
                <Checkbox
                    name="withLower"
                    title="To Lowercase"
                    onChange={this.toggleOptionsChecked} />
                <br />
                <br />
                <Button clicked={this.generate} />
            </div>
        )
    }
}
