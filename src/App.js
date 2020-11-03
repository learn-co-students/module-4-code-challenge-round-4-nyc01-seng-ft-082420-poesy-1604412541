import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state={
    isClicked: false,
    poems: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(poems => this.setState({poems: poems}))
  }

  clickHandler = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  addNewPoem = (obj) => {
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        accepts:'application/json'
      },
      body: JSON.stringify(obj)
    }).then(resp => resp.json())
    .then(poem => {
      this.setState(prevState => {
        return {poems: [...prevState.poems, poem]}
      })
    })
  }

  showForm = () => {
    return this.state.isClicked? <NewPoemForm addNewPoem={this.addNewPoem}/> : null
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.showForm()}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
