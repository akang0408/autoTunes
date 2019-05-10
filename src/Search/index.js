import React from 'react';

class Search extends React.Component {
  state = { artistQuery: ''}
  
  updateArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value });
  }
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist(); }
  }
  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  }
  render() {
    return (
      <div>
        <input 
          onChange={this.updateArtistQuery}
          placeholder='Search for an Artist' 
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    )
  }
}

export default Search