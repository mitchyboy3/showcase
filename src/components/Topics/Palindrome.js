import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    isPalindrome(val){
        if(this.state.userInput.split('').reverse().join("") === this.state.userInput){
            this.setState.palindrome = true;
        } this.setState.palindrome = false
}
    

    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e)=>this.userInput(e.target.value)}/>
                <button className='confirmationButton' onClick={()=>this.isPalindrome(this.state.userInput)}>Test</button>
                <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
            
        )
    }

}
export default Palindrome;