import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
state={
  formHide:false,
  newPoem:{},
  hasNew:false
}
showForm=()=>{
  this.setState(prevstate=>({formHide:!prevstate.formHide}))
}

submitHandler=(poem)=>{
  console.log(poem)
  this.setState({newPOem:poem, hasNew:true})
} 

changeNew=()=>{
  this.setState({hasNew:false})
}

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>Show/hide new poem form</button>
          {this.state.formHide? <NewPoemForm submitHandler={this.submitHandler}/> : null}
          {console.log(this.state.hasNew)}
        </div>
        <PoemsContainer newPoem={this.state.newPoem} hasNew={this.state.hasNew} changeNew={this.changeNew}/>
      </div>
    );
  }
}

export default App;
