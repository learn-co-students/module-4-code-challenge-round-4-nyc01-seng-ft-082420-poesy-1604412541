import React from "react";

class NewPoemForm extends React.Component {
  state={
    title: '',
    author: '',
    content: ''
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addNewPoem({id:null, title: this.state.title, author: this.state.author, content: this.state.content})
    this.setState({title: '', author: '', content: ''})
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input placeholder="Title" name="title"  onChange={this.changeHandler} value={this.state.title}/>
        <input placeholder="Author" name="author"onChange={this.changeHandler} value={this.state.author}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" onChange={this.changeHandler} value={this.state.content}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
