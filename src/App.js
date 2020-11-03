import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    formBtnClicked: false,
    formShow: false,
    newPoem: []
  }

  addNewPoem = (poemObj) => {
    let poemCopy = [...this.state.newPoem, poemObj]
    this.setState({ newPoem: poemCopy})
  }

  showFormHandler = () => {
    if (this.state.formBtnClicked === false) {
      this.setState({formBtnClicked: true, formShow: <NewPoemForm addNewPoem={this.addNewPoem} submitHandler={this.submitHandler}/>}) 
    } else if (this.state.formBtnClicked === true) {
      this.setState({formBtnClicked: false, formShow: false})
    }
  }

  sendNewPoem = () => {
    return this.state.newPoem
  }

  render() {
    console.log("NEW STATE", this.state.newPoem)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showFormHandler}>Show/hide new poem form</button>
          {this.state.formShow}
        </div>
        <PoemsContainer sendNewPoem={this.sendNewPoem} newPoem={this.state.newPoem} />
      </div>
    );
  }
}

export default App;
