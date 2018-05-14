import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const fs = window.require('fs');
const path = window.require('path')
import { log } from 'ruucm-util'


log('fs', fs)
log('path', path)
let pathName = path.join(window.__dirname, 'Files')
log('pathName', pathName)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  create(data) {
    let file = './test.txt'
    log('file', file)
    let contents = data
    fs.writeFile(file, contents, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.value);
    this.create(this.state.value);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">
          Hello Electron!
        </p>


        {/* <form onSubmit={this.handleSubmit}>

          <input type='text' />
          <button onClick={() => this.create()}>create</button>
        </form> */}

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
