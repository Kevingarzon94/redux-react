import * as React from 'react';
import './App.css';

import Header from './components/Header';
import Intro from './components/intro';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Intro  />
        <Intro text='texto props2' />
      </div>
    );
  }
}

export default App;
