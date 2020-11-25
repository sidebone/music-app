import React, { useState } from 'react'

function Track ( props ) {

    // const [ tracks, setTracks ] = useState( [] )
    
    
        
    return (
        <div className="track collection">
            <div className="center">
                <h3>{ props.title }</h3>
                <p>{ props.name }</p>
                <p>{ props.rating}</p>
            </div>
        </div>
    )
}

export default Track
