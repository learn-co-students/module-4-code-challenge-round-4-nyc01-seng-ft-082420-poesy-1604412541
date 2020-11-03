import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState( () => ({
      title: "",
      author: "",
      content: ""
    }))
  }

  editForm = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  render() {
    return (
      <form onSubmit={this.localSubmitHandler} className="new-poem-form">
        <input onChange={this.editForm} placeholder="Title" value={this.state.title} name="title"/>
        <input onChange={this.editForm} placeholder="Author" value={this.state.author} name="author"/>
        <textarea onChange={this.editForm} placeholder="Write your masterpiece here..." rows={10} value={this.state.content} name="content"/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
