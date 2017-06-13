import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor (){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    assignEvenAndOdds(val){
        var x = this.state.userInput.split(',').map((v)=>parseInt(v,0));
        let evens = (value)=>{return value % 2 === 0};
        let odds = (value)=>{return value % 2 !== 0};
        this.setState({
            evenArray: x.filter(evens),
            oddArray: x.filter(odds),
        })

    }
  

    render(){
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds</h4>
                <input className='inputLine' onChange={(e)=> this.setState({userInput: e.target.value})} />
                <button className='confirmationButton' onClick={()=> {this.assignEvenAndOdds(this.state.userInput)}}>Split Evens and Odds</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }
}


export default EvenAndOdd;
