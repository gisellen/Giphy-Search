import React from 'react'

export default function gifCard(props) {

        return (
            <div className="gif-container">
                <img key={props.id} src={props.url} alt="gif" width="100%" height="200px"/>
            </div>
        )
}