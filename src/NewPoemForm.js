import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    author: "",
    content: ""
}

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    let newPoem = this.state
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPoem)
    })
      .then(resp=>resp.json())
      .then(newPoem=>{
        this.props.submitHandler(newPoem)
      })
    this.setState({
      title: "",
      author: "",
      content: ""
    })
  }

  
  render() {
    console.log(this.state)
    return (
      <form className="new-poem-form" onSubmit={this.localSubmitHandler}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.changeHandler}/>
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.changeHandler}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content} onChange={this.changeHandler} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
