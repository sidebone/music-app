import React from 'react'

function TrackList(props) {
  return (
    <div>
      <div className="trackList collection">
        <h4> { props.trackList }</h4>
        <h1 className="center">{ props.key }</h1>
      </div>
    </div>
  )
}

export default TrackList
