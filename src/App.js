import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: []
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(r => r.json())
    .then((poemArr) => (this.setState({
      poems: poemArr
    })))
   
  }


  returnAnArray = () => {
    let arrayReturn = this.state.poems
    return arrayReturn
  }
  render() {
   
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer returnAnArray={this.returnAnArray()}/>
      </div>
    );
  }
}

export default App;
