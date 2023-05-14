import React from "react"

function Player({spotifyId}) {
   return (
      <iframe
         style={{ borderRadius: "12px" }}
         title="title"
         src={`https://open.spotify.com/embed/album/${spotifyId}?utm_source=generator`}
         width="75%"
         height="152"
         frameBorder="0"
         allowfullscreen=""
         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
         loading="lazy"
      ></iframe>
   )
}

export default Player
