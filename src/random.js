searchArtist = () => {
  const name = this.state.artistQuery
  fetch(`${API_ADDRESS}/${name}`)
  .then(response => response.json())
  .then(json => {
    if (json.artists.total > 0) {
      const artistDetails = json.artists.items[0]
      this.setState({ artistDetails })
      console.log('artistsdeets', artistDetails)

      fetch(`${API_ADDRESS}/${artistDetails.id}/top-tracks`)
      .then(response => response.json())
      .then(json => this.setState({ tracks: json }))
      console.log('tracks', this.state.tracks)
    }
  })
  .catch(error => console.log(error.message))
}

async searchArtist = () => {
  const name = this.state.artistQuery
  let response = await fetch(`${API_ADDRESS}/${name}`);
  let data = await response.json
  return data;
}

searchArtist()
  .then(data => {
    if (data.artists.total > 0) {
      const artistDetails = data.artists.items[0]
      this.setState({ artistDetails })
    }
  })