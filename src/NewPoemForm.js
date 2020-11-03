import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: "",
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})

  }

  submitHandler = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(
        this.state
      )
    })
    .then(r => r.json())
    .then(poem => this.props.addPoem(poem))
    .catch(error => console.error(error))

    this.setState({
      title: "",
      author: "",
      content: "",
    })
  }


  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input type= "text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/>
        <input type= "text" name="author" placeholder="Author" value={this.state.author} onChange={this.changeHandler}/>
        <textarea name= "content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
