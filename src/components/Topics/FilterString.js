import React, { Component } from 'react';

class FilterString extends Component {
    constructor (){
        super();
        this.state = {
            unfilteredArray: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
            userInput: '',
            filteredArray: []
        }
    }
    filterstring(val){

    }
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className='inputLine' onChange={(e)=>this.userInput(e.target.value)}/>
                <button className='confirmationButton' onClick={()=>this.filterstring(this.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered String: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;