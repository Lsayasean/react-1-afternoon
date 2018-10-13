import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['the', 'totoro', 'is', 'evil'],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    filtered(input) {
        const { filteredArray, userInput, unfilteredArray } = this.state;
        for(var i = 0; i < unfilteredArray.length; i++){
            if(unfilteredArray[i].includes(input)){
                filteredArray.push(unfilteredArray[i])
            }
        }
        this.setState({
            filteredArray: filteredArray
        })

    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filtered String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.updateInput(e)} />
                <button className="confirmationButton" onClick={() => this.filtered(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names:{JSON.stringify(this.state.filteredArray)}</span>
            </div>

        )
    }
}

export default FilterString;