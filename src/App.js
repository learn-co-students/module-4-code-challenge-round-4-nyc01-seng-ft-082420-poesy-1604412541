import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const BASE_URL = 'http://localhost:6001/poems/'
class App extends React.Component {

  componentDidMount(){
    // got base_url from Readme / above 
  fetch(BASE_URL)
  .then(response => response.json())
  .then(data => this.setState({poems: data}))
  }

  state = {
    poems: [],
    toggleForm :false 
  }

  poemFormHandler = () => {
    let tempToggle = this.state.toggleForm
    this.setState({toggleForm: !tempToggle })
  }

  submitHandler = (object) => {
    console.log(object)
    let newPoems = [...this.state.poems,object]
    this.setState({poems: newPoems})
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
  },
      body: JSON.stringify(object),
})
      .then(response => response.json())
      .then(data => {
      console.log('Success:', data);
})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.poemFormHandler}>Show/hide new poem form </button>
          {this.state.toggleForm && <NewPoemForm submitHandler={this.submitHandler}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
