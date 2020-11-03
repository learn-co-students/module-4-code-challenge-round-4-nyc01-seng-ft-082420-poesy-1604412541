import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
state={
  api:[],
  hasNew:false
}
  baseURL ="http://localhost:6001/poems/"

componentDidMount(){
  fetch(this.baseURL)
  .then(resp=>resp.json())
  .then(poems=>this.setState({api:poems}))
}
renderPoems=()=>{
  console.log("in poems ")
  return this.state.api.map(poem=><Poem key={poem.id} poem={poem}/>)
}
addnewPoem=()=>{
  console.log(this.props.hasNew)
  fetch(this.baseURL, {
    method:"POST",
    headers:{
      "content-type":"application/json",
      accpets:"application/json"
    },
    body:JSON.stringify(this.props.newPoem)
  })
  .then(resp => resp.json())
  .then(poem=>this.setState(prevState=>({api:[...prevState.api,poem]})))
  .catch(console.log)
  
}





  render() {
    return (
      <div className="poems-container">
        {this.state.hasNew ? this.addnewPoem() : this.renderPoems() }
      </div>
    );
  }
}

export default PoemsContainer;
