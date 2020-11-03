import React from "react";

class NewPoemForm extends React.Component {
  state={
    title:'',
    content:'',
    author:''
  }

  submitHandler = e =>{
    e.preventDefault()

    const options={
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        author: this.state.author
      })
    }

    fetch('http://localhost:3000/poems', options)
    .then(resp=>resp.json())
    .then(poem=>{
      this.props.addNewPoem(poem)
    })
    this.setState({title:'', content:'', author:''})
  }

  changeHandler = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/>
        <input name="author" placeholder="Author" value={this.state.author} onChange={this.changeHandler}/>
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10}  value={this.state.content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
