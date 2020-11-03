import React from "react";

class NewPoemForm extends React.Component {

  state={
    title: "",
    author: "",
    content: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  /* submit handler to grab this information and pass up to parent */
  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState(()=> ({
      title: "",
      author: "",
      content: ""
    }))
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.localSubmitHandler}>
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/>
        <input name="author" placeholder="Author" value={this.state.author} onChange={this.changeHandler} />
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
