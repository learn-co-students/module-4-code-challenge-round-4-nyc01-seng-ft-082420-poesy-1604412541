import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {


  state = {
    poemsList: [],
    showForm: false
  }

  fetchPoems = () => {
    fetch('http://localhost:6001/poems').then(resp => resp.json()).then(data => this.setState({
        poemsList: data
    }))
  }

  onFormButtonClick = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm
    }))
  }

  

  getPoems = () => {
    let poems = this.state.poemsList
    return poems
  }

  postPoemSubmit = (poemObj) => {
    let newPoemsList = [...this.state.poemsList, poemObj]
    this.setState({
      poemsList: newPoemsList
    })
  }


  componentDidMount() {
    this.fetchPoems()
  }

  


  render() {
    const poemsArray = this.getPoems()
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.onFormButtonClick}>Show/hide new poem form</button>
          
          {this.state.showForm ? <NewPoemForm submitter={this.postPoemSubmit}/> : console.log("something wrong")}
        </div>
        <PoemsContainer poems={poemsArray}/>
      </div>
    );
  }
}

export default App;


//{false && <NewPoemForm />}