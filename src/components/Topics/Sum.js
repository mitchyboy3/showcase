import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    sumNumbers(val){

    }
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={(e)=>this.number1(e.target.value)}/>
                <input className='inputLine' onChange={(e)=>this.number2(e.target.value)}/>
                <button className='confirmationButton' onClick={()=>this.sumNumbers(this.state.number1,this.state.number2)}>Find Sum</button>
                <span className='resultsBox'>Sum:</span>
            </div>
        )
    }
}

export default Sum;