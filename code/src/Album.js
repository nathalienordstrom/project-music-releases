import React from "react";
export const Album = (props) => {
    return (
        <section className="musicList">
         
            <div className="card">
                <div className="images">
                    <a className="album-link" href={props.albumUrl} target="_blank"><img className="image" src={props.image} /></a>
                    <div className="middle">
                        <div className="icons">
                            <img src="icons/heart.svg" className="heart"></img>
                            <img src="icons/play.svg" className="play"></img>
                            <img src="icons/dots.svg" className="dots"></img>
                        </div>
                    </div>


                </div>


                <div className="song">
                    {props.song}
                </div>

                <div className="artist">
                    {props.artist.map((artists) => {
                        return <span key={artists.id}><a className="artist-link" href={artists.external_urls.spotify} target="_blank">{artists.name}</a><span>,&nbsp;</span></span>

                    })}
                </div>

            </div>

        </section>
    )
};