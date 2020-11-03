import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    author: "",
    content: ""
}
  
inputOnChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  
  
  let config = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(this.state)
  }

  fetch('http://localhost:6001/poems', config).then(resp => resp.json()).then(data => 
  
  
  this.props.submitter(data))
  this.setState({
    title: "",
    author: "",
    content: "" })
}
  

render() {
  console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit} className="new-poem-form">
        <input name="title" value={this.state.title} placeholder="Title" onChange={this.inputOnChange}/>
        <input name="author" value={this.state.author} placeholder="Author" onChange={this.inputOnChange} />
        <textarea name="content" value={this.state.content} placeholder="Write your masterpiece here..." rows={10} onChange={this.inputOnChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
