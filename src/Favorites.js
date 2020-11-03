import React, { Component } from 'react'

export class Favorites extends Component {

    renderPoems = () => {
        let favPoems = this.props.poems
        return favPoems.map(poem => <li><h5>{poem.title} - {poem.author}</h5></li> )
    }

    render() {
        return (
            <div>
                <div className="favs">Favorite Poems</div>
                <p className="fav-container">
                    <ul>
                        {this.renderPoems()}
                    </ul>
                </p>
            </div>
        )
    }
}

export default Favorites
