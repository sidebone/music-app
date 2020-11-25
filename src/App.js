import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TrackList from './components/TrackList'
import Tracks from './components/Tracks'
import './App.css';

function App () {
  const [ tracks, setTracks ] = useState( [] )
   const [trackLists, setLists] = useState([])

  const fetchData = () => {
    const API_TRACK = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=6&country=us&f_has_lyrics=1&apikey=a8a6a79c21867434cd0257570266d46f'
    const API_LYRICS = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=wap&q_artist=Cardi B feat. Megan Thee Stallion&apikey=a8a6a79c21867434cd0257570266d46f'
    
    const getTracks = axios.get( API_TRACK )
    const getLyrics = axios.get( API_LYRICS )
    
    axios.all( [getTracks, getLyrics] ).then(  
      axios.spread( (...allData ) =>  {
       const allDataTrack = allData[0].data.message.body.track_list
        const getAllList = allData[ 1 ].data.message.body.lyrics
        
        // console.log( allDataTrack )
        // console.log(getAllList)
       
        setTracks( allDataTrack )
         setLists(getAllList)
      })
    )
    
}

useEffect( () => {
  fetchData()
}, [])
   
  // useEffect( function () {
    
  //      axios.get( API_URL ).then( ( res ) => {
  //     // console.log( res )
  //     setTracks(res.data.message.body.track_list)
  //   } )
    
  // }, [] )

  // useEffect( function () {
  //  
    
  //    axios.get( API_URL ).then( ( res ) => {
  //      console.log( res )
  //     setTracks(res.data.message.body.track)
  //   } )
    
  // }, [] )
  



  

  return (
    <div className="App container">
      <h1 className="center blue-text">Track List</h1>
      {tracks ? tracks.map( ( track ) => 
        <Tracks title={ track.track.track_name } name={ track.track.artist_name } rating={ track.track.track_rating } />
        ) : <p>Loading...</p>
      }
      
      {/* {trackLists ? trackLIsts.map( ( trackList ) => 
        <TrackLIst trackList={trackList.track.lyrics_body}/>) : <p>Loading...</p>
      } */}
      <TrackList trackList={ trackLists.lyrics_body } key={ trackLists.lyrics_id }/>
     
    </div>
  )
}

export default App;
