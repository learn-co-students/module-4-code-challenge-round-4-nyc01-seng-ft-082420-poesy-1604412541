import React from "react";
import Poem from "./Poem";

class FavoritesContainer extends React.Component {

  renderFavorites = () => {
    return this.props.favorites.map(poem => <Poem key={poem.id} poem={poem} favorite/>)
  }


  render() {
    return (
      <div className="poems-container">
        <h1> FAVORITES </h1>
          {this.renderFavorites()}
      </div>
    );
  }
}

export default FavoritesContainer;