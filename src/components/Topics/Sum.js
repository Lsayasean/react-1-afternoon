import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            total: null
        }
    }

    updateNum1(e){
        this.setState({
            number1: e.target.value
        })
    }
    updateNum2(e){
        this.setState({
            number2: e.target.value
        })
    }

    sum(){
        let {number1, number2, total} = this.state;
        total = parseInt(number1) + parseInt(number2);
        this.setState({
            total: total
        })

    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.updateNum1(e)}/>
                <input className="inputLine" onChange={(e) => this.updateNum2(e)}/>
                <button className="confirmationButton" onClick={() => this.sum()}>Sum </button>
                <span className="resultsBox">Total: {JSON.stringify(this.state.total)}</span>
            </div>
        )
    }
}

export default Sum;