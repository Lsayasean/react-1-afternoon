import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    check(input) {
        let { palindrome } = this.state;

        console.log(input)
        if(input == input.split('').reverse().join()){
            palindrome = true;
        } else {
            palindrome = false;
        }

        this.setState({
            palindrome: palindrome
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.updateInput(e)} />
                <button className="confirmationButton" onClick={() => this.check(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome;