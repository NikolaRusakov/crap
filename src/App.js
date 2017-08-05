import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import 'whatwg-fetch';
/*import '../driveAPI/loginToDrive.js';*/
import FormComp from './components/form';
class App extends Component {
/*
  state = {
    vocab: [],
  };
  componentDidMount() {
    fetch('/slovicka')
      .then(res => {
        console.log(res);
        if (res.ok) {
          console.log('done');
          return res.json();
        }
      })
      .then(data => this.setState({ vocab: data.vocab }));
  }
*/

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Welcome to React</h2>
        </div>
        <div>
          {/*{this.state.vocab.map(vocItem =>
            <p>
              {vocItem.name}
            </p>,
          )}*/}
          <FormComp/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
