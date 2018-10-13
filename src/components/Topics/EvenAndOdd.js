import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateInput(e){
        this.setState({
                userInput: e.target.value
        })
    }

    split(e){
        let userInput = this.state.userInput.split(',');
        // let newInput = parseInt(userInput);
        let evenArray = this.state.evenArray;
        let oddArray = this.state.oddArray;
        for(var i = 0; i < userInput.length; i++){
            if(userInput[i] % 2 === 0){
                evenArray.push(parseInt(userInput[i]))
            } else if(userInput[i] % 2 !== 0){
                oddArray.push(parseInt(userInput[i]))
            }
        }
        this.setState({
            evenArray: evenArray,
            oddArray: oddArray
        })

    }
    render() {
        console.log(this.state.evenArray)
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Even and Odds</h4>
                <input className="inputLine" onChange={(e) =>this.updateInput(e)}/>
                <button className="confirmationButton" onClick={(e) => this.split(e)} value={this.state.userInput}>Split</button>
                <span className="resultBox">Even{JSON.stringify(this.state.evenArray)}</span>
                <span className="resultBox">Odd{JSON.stringify(this.state.oddArray)}</span>
            </div>
        )

    }
}

export default EvenAndOdd;