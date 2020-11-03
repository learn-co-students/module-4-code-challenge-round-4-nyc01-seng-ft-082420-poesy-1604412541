import React from 'react'
import Poem from "./Poem";

const Favorites = (props) => {

    const renderFavorites = () => {
        return props.favoritePoems.map( poem =>
            <Poem 
                key={poem.id}
                poemObj={poem}
                addFavorite={props.addFavorite}
                favorite
            />
            )
    }

    return(
        <div>
            <h2>Favorites</h2>
            {renderFavorites()}
        </div>
    )
}

export default Favorites