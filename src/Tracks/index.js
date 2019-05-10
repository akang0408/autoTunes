import React from 'react';
import { TrackDiv, TrackImg, TrackText, TrackIcon } from './styles'

class Tracks extends React.Component {
  state = { playing: false, audio: null, playingUrl: null };

  playAudio = url => {
    const audio = new Audio(url);

    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingUrl: url});
    } else {
      this.state.audio.pause();

      if ( this.state.playingUrl === url ) {
      this.setState({ playing: false })
      } else {
        audio.play();
        this.setState({ playing: true, audio, playingUrl: url})
      }
    }
  }
  trackIcon = track => {
      if (!track.preview_url) {
        return <span>n/a</span>
      }
      if (this.state.playing && this.state.playingUrl === track.preview_url) {
        return <span>||</span>
      } else {
        return <span>&#9654;</span>
      }
  }
  render() {
    const { tracks } = this.props
    return (
      <div>
        {
          tracks.map(track => {
            const { id, name, album, preview_url } = track;
            return (
              <TrackDiv key={id} onClick={() => this.playAudio(preview_url)}>
                <TrackImg src={album.images[0].url} alt='track pic' />
                <TrackText>{name}</TrackText>
                <TrackIcon>{this.trackIcon(track)}</TrackIcon>
              </TrackDiv>
            )
          })
        }
      </div>
    )
  }
}

export default Tracks;