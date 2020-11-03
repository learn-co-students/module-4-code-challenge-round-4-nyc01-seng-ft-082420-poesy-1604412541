import React from "react";

class Poem extends React.Component {
  state =  {
    markAsRead: false 
    // made it false b/c we havent read it yet 
  }

    poemRead = () => {
      let temp = this.state.markAsRead
      this.setState({markAsRead:  !temp})
      // made this as a button to toggle back forth between read and unread 
    }
  render() {
    let buttonText = (this.state.markAsRead)? "Mark as Unread" : "Mark as Read"
    let poem = this.props.poem
    // console.log(poem)


    //comments for below 
    //dont put in () for function poemRead it will not work 
    return (
      <div>
        <h3>{poem.title}</h3>
        <p>{poem.content}</p>
        <p>
          <strong>{poem.author} </strong>
        </p>
        <button onClick={this.poemRead}>{buttonText}</button>
        
      </div>
    );
  }
}

export default Poem;
