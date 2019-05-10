import React from 'react';
import { ProfileImg, ArtistWrapper } from './styles';

const Artist = ({ artistDetails }) => {
  if (!artistDetails) {
     return null;
  }
  const { name, followers, genres, images } = artistDetails
  return (
    <ArtistWrapper>
      <h2>{name}</h2>
      <p>{followers.total} followers</p>
      <p>{genres.join(", ")}</p>
      <ProfileImg src={images[0] && images[0].url} alt='artist pic'/>
    </ArtistWrapper>
  )
}

export default Artist;