import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  baseURL = "http://localhost:6001/poems/"
state={
  api:[]
}
showForm=()=>{
  this.setState(prevstate=>({formHide:!prevstate.formHide}))
}
  componentDidMount() {
    fetch(this.baseURL)
      .then(resp => resp.json())
      .then(poems => this.setState({ api: poems }))
  }
  addnewPoem = () => {
    console.log(this.props.hasNew)
 

  }

submitHandler=(newPoem)=>{
  console.log(newPoem)
  fetch(this.baseURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accpets: "application/json"
    },
    body: JSON.stringify(newPoem)
  })
    .then(resp => resp.json())
    .then(poem => this.setState(prevState => ({ api: [...prevState.api, poem] })))
    .catch(console.log)
} 


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>Show/hide new poem form</button>
          {this.state.formHide? <NewPoemForm submitHandler={this.submitHandler}/> : null}
          {console.log(this.state.hasNew)}
        </div>
        <PoemsContainer poems={this.state.api}/>
      </div>
    );
  }
}

export default App;
