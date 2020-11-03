import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    clicked: false
  }
  


  componentDidMount(){
    fetch("http://localhost:6001/poems/")
    .then(resp => resp.json())
    .then(poems => this.setState({ poems: poems}))
  }

  clickHandler = (e) =>{
    this.setState(previousState => ({
      clicked: !previousState.clicked
    }))
  }

  addPoem = (poemObj) =>{
    this.setState({ poems: [poemObj, ...this.state.poems] })
  }



  render() {

    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler} >Show/hide new poem form</button>
          {this.state.clicked ?  <NewPoemForm addPoem={this.addPoem} /> : null }
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
