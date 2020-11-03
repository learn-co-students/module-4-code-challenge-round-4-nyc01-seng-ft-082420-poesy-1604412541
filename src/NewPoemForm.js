import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: '',
    author: '',
    content: ''
  }

  handleFormChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      title: '',
      author: '',
      content: ''
    })
  }

  render() {
    
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input name="title" value={this.state.title} placeholder="Title" onChange={this.handleFormChange}/>
        <input name="author" value={this.state.author} placeholder="Author" onChange={this.handleFormChange}/>
        <textarea name="content" value={this.state.content} placeholder="Write your masterpiece here..." onChange={this.handleFormChange} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
