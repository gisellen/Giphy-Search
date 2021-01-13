import React, { Component } from 'react'

class GifCard extends Component {

    render() {
        return (
            <div>
                <img src={this.props.url} alt="gif"/>
            </div>
        )  
    }
}

export default GifCard;