import React from "react";

class NewPoemForm extends React.Component {
state={
  title:'',
  author:'',
  content:''

}

  localSubmit=(e)=>{
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      title: '',
      author: '',
      content: ''})

}
changeHandler=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

  render() {
    return (
      <form className="new-poem-form" onSubmit={e=>this.localSubmit(e)}>
        <input placeholder="Title" value={this.state.title} name={"title"} onChange={e=>this.changeHandler(e)}/>
        <input placeholder="Author" value={this.state.author} name={'author'} onChange={e => this.changeHandler(e)}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name={"content"} value={this.state.content} onChange={e => this.changeHandler(e)}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
