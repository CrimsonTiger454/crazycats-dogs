import React, { Component } from 'react';
import './App.css';
import DogList from './components/DogList/DogList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogList />
      </div>
    );
  }
}

export default App;
