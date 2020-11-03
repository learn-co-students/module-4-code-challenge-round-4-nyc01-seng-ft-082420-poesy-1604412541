import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }

  changeHandler = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      title: "",
      author: "",
      content: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="new-poem-form">
        <input onChange={this.changeHandler} name="title" placeholder="Title" value={this.state.title}/>
        <input onChange={this.changeHandler} name="author" placeholder="Author" value={this.state.author}/>
        <textarea onChange={this.changeHandler} name="content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content}/>
        <input onChange={this.changeHandler} type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
