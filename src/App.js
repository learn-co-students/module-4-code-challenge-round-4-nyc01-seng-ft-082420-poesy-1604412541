import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

state={
  poem:[],
  showform: false
}


componentDidMount(){
  fetch('http://localhost:6001/poems')
  .then(res => res.json())
  .then(poem=> {
    this.setState({poem})
  })
}

renderPoems = () =>{
  return this.state.poem
}

showForm = () =>{
  this.setState((prevState) => ({showform: !prevState.showform}))
}

submitHandler = (obj) =>{
let newPoem = {
  title:obj.title,
  content: obj.content,
  author:obj.author
}
fetch('http://localhost:6001/poems',{
  method: "POST",
  headers: {
      "content-type": "application/json",
      accepts: "application/json"
  },
  body: JSON.stringify(newPoem)
})
.then(res => res.json())
.then(brandNewPoem => this.setState({poem: [...this.state.poem, brandNewPoem]}))
}

  render() {
   
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>Show/hide new poem form</button>
          {this.state.showform ? <NewPoemForm submitHandler={this.submitHandler}/> : null}
        </div>
        <PoemsContainer poems={this.renderPoems()}/>
      </div>
    );
  }
}

export default App;
