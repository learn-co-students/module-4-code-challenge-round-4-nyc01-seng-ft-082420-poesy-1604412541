import React from "react";

class NewPoemForm extends React.Component {

  state={
    title: "",
    author: "",
    content: ""
  }

  initialState = this.state

  changeHandler = e => {
    const {name, value} = e.target
    this.setState(() => ({
      [name]: value
    }))
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.createPoem(this.state)
    this.setState(this.initialState)
  }
  
  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.changeHandler}/>
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.changeHandler}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
