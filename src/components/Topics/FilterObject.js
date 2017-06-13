import React, { Component } from 'react';

class FilterObject extends Component {
    constructor () {
        super();
        this.state = {
            unFilteredArray:  [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ],
            userInput: '',
            filteredArray: []
        }
    }
    filterObject(val){
        
    }
    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={(e)=>this.userInput(e.target.value)}/>
                <button className='confirmationButton' onClick={()=>this.filterObject(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}


export default FilterObject;