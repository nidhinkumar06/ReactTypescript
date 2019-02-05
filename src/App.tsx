import * as React from 'react';
import './App.css';

import MyClass from './components/MyClass';
import MyComp from './components/MyComp';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React with TypeScript</h1>
        </header>
        <MyClass name={"nidhin"} isAvailable={true}/>
        <MyComp name={"nidhin"}/>
      </div>
    );
  }
}

export default App;
