import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    showForm: false
  }

  showHideHandler = () => {
    this.setState((prevState) => ({showForm: !prevState.showForm}))
  }



  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showHideHandler}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm />}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
