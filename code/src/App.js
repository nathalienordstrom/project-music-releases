import React from 'react'
import data from './data.json'
import { Album } from './Album.js'

console.log(data)

const albumsArray = data.albums.items;
console.log(albumsArray)

export const App = () => {
    return (
      <div>
        {albumsArray.map((album) => {
          return <Album
          image={album.images[1].url} 
          song={album.name}
          artist={album.artists}
          albumUrl={album.external_urls.spotify}
        
           />;
        })}
      </div>
      
    );
}
