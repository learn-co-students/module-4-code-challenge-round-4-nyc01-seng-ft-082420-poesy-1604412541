import React, { Component } from 'react'

export class Favorites extends Component {

    renderPoems = () => {
        let favPoems = this.props.poems
        return favPoems.map(poem => <li key={poem.id}><h5>{poem.title} - {poem.author}</h5></li> )
    }

    render() {
        return (
            <div>
                <div className="favs">Favorite Poems</div>
                <div className="fav-container"><ul>{this.renderPoems()}</ul></div>
            </div>
        )
    }
}

export default Favorites
