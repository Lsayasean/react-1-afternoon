import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'john',
                    location: 'tampa'
                },
                {
                    name: 'steven',
                    last: 'davis'
                }
            ],
            userInput: '',
            filteredArray: []

        }
    }

    updateInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }


    filterUpdate(prop){
        let unFilteredArray = this.state.unFilteredArray;
        let filteredArray = this.state.filteredArray;

        for(var i = 0; i < unFilteredArray.length; i++){
            if(unFilteredArray[i].hasOwnProperty(prop)){
                filteredArray.push(unFilteredArray[i])
            }
        }
        this.setState({
            filteredArray: filteredArray
        })
    }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>FilterObject</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.updateInput(e)} />
                <button className="confirmationButton" onClick={() => this.filterUpdate(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterObject;