import React from "react";
import Poem from "./Poem";

const FavoritesContainer = (props) => {
    
    const renderPoems = () => {
        return props.poems.map( poem => <Poem key={poem.id} poem={poem} unfaveHandler={props.unfaveHandler}/>)
      }


    return (
        <div >
        <h1>Favorites</h1>
        {
            renderPoems()
        }
        </div>
    );

}

export default FavoritesContainer