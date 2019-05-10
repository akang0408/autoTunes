import React from 'react';
import Artist from './Artist';
import Tracks from './Tracks'
import Search from './Search'
import { AppHeader } from './styles'

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com/artist'
class App extends React.Component {
  state = {
    artistDetails: null,
    tracks: [],
  }
  componentDidMount() {
    this.searchArtist('rend collective')
  }
  searchArtist = (artist) => {
    fetch(`${API_ADDRESS}/${artist}`)
    .then(response => response.json())
    .then(json => {
      if (json.artists.total > 0) {
        const artistDetails = json.artists.items[0]
        this.setState({ artistDetails })
        console.log('artistsdeets', artistDetails)

        fetch(`${API_ADDRESS}/${artistDetails.id}/top-tracks`)
        .then(response => response.json())
        .then(json => this.setState({ tracks: json.tracks }))
        .catch(error => alert(error.message))
        console.log('tracks', this.state.tracks)
      }
    })
    .catch(error => alert(error.message))
  }

  render() {
    return (
      <div>
        <AppHeader>Music Artist Search</AppHeader>
        <Search searchArtist={this.searchArtist} />
        <Artist 
        artistDetails={this.state.artistDetails}
        tracks={this.state.tracks}
        />
        <Tracks tracks={this.state.tracks} />
      </div>
      );
    }
  }

export default App;
