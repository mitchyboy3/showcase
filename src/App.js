import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser.js'
import EvenAndOdd from './components/Topics/EvenAndOdd.js'
import FilterObject from './components/Topics/FilterObject'
import FilterString from './components/Topics/FilterString'
import Palindrome from './components/Topics/Palindrome'
import Sum from './components/Topics/Sum'

class App extends Component {
  render() {
   return (
    <TopicBrowser /> 
   )
  }
}

export default App;
