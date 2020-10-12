import React from "react";

 export const Album = (props) => {
  return (
      <section className="musicList">
    <div className="card">

      <div className="images">
        <img src={props.image}/>
      </div>

      <div className="song">
      {props.song} 
      </div>

      <div className="artist">  
      {props.artist} 
      </div>
      
      </div>
      </section>
      
  )
};