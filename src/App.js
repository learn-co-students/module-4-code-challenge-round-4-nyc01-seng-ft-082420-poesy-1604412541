import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  renderPoems = () => {
    return this.state.poems
  }

  render() {
    let arrayOfPoems = this.renderPoems()
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems = {arrayOfPoems}/>
      </div>
    );
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(r=> r.json())
    .then((poemArray)=> {
      this.setState({
        poems: poemArray
      })
    })
  }
}

export default App;
