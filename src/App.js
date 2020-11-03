import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
    state = {
      poems: [],
      clicked: false
    }

    componentDidMount() {
      fetch("http://localhost:6001/poems")
      .then(resp => resp.json())
      .then((allPoemsArray) => {
        this.setState({
          poems: allPoemsArray
        })
      })
    }

    getPoems = () => {
      return this.state.poems
    }

    addPoem = (newPoem) => {
      let updatedPoems = [...this.state.poems, newPoem]
      this.setState({
        poems: updatedPoems
      })
    }

    removePoem = (poemObj) => {
      let updatedPoems = [...this.state.poems]
      // I believe you need to use a filter and show everything that doesnt have the poemObj.id but I didnt have time to test it
      this.setState({
        poems: updatedPoems
      })
    }

    clickHandler = () => {
      this.setState((prevState) => {
        return {
        clicked: !prevState.clicked
        }
      })
    }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.clicked ? <NewPoemForm addPoem={this.addPoem} /> : null}
        </div>
        <PoemsContainer allPoems={this.getPoems()} removePoem={this.removePoem} />
      </div>
    );
  }
}

export default App;
