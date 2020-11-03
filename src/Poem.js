import React from "react";

class Poem extends React.Component {
  state= {
    clicked: false,
  }


  clickHandler = (e) => {  
    if (this.state.clicked === false){
      this.setState({clicked: true})
      e.target.textContent = "Mark as Unread"
    }else {
      this.setState({clicked: false})
      e.target.textContent = "Mark as read"
    }
  }
 
  

  render() {
    return (
      <div >
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}t</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
    <button onClick={this.clickHandler}> Mark as read</button>
      </div>
    );
  }
}

export default Poem;
