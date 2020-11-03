import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state={
    poems:[],
    clicked: false,
    delete:''
  }

  componentDidMount(){
    fetch('http://localhost:3000/poems')
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({poems:data})
    })
  }

  clickHandler=()=>{
    this.setState({clicked: !this.state.clicked})
  }

  addNewPoem = poem =>{
    this.setState({poems:[...this.state.poems, poem]})
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.clicked && <NewPoemForm addNewPoem={this.addNewPoem}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
