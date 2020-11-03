import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state={
    poemApi: [],
    formShowed: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then((poemArray) => {
        this.setState({
          poemApi: poemArray
        })
      })
  }

  changeFormStatus = () => {
    let newStatus = !this.state.formShowed
    this.setState({
      formShowed: newStatus
    })
  }

  addPoem = (newPoem) => {
    let copyOfPoems = [...this.state.poemApi, newPoem]
    this.setState({
      poemApi: copyOfPoems
    })
  }

  deletePoem = (id) => {
    let newPoemAfterDelete = this.state.poemApi.filter((poem) => {
      return poem.id !== id
    })
    this.setState({
      poemApi: newPoemAfterDelete
  })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.changeFormStatus}>Show/hide new poem form</button>
          {this.state.formShowed ? null : <NewPoemForm addPoem={this.addPoem} />}
        </div>
        <PoemsContainer poemApi={this.state.poemApi} deletePoem={this.deletePoem}/>
      </div>
    );
  }
}

export default App;
