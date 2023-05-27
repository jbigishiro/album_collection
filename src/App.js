import React from "react";
import { albumCollection } from "./data";
import Album from "./components/Album";

function App() {
  return (
    <div className="App">
      <h1>My Music Album Collection</h1>
      <div className="albums">
        <Album album={albumCollection[0]} />
        <Album album={albumCollection[1]} />
        <Album album={albumCollection[2]} />
        <Album album={albumCollection[3]} />
        <Album album={albumCollection[4]} showPlayer=
        {true} />
        <Album album={albumCollection[5]} />
        <Album album={albumCollection[6]} />
        <Album album={albumCollection[7]} />
        <Album album={albumCollection[8]} />
      </div>
    </div>
  );
}

// function Album({album}) {
//   const { title, artist, year, rating, coverUrl } = album;
//   return (
//     <div className="album">
//       <h2>{title}</h2>
//       <p>{artist}</p>
//       <p>Year: {year}</p>
//       <p>Rating: {rating}</p>
//       <img src={coverUrl} />

//       {/* <p>{"Artist"}</p>
//          <p>{"Year"}</p>
//          <p>Rating: {"Rating"}</p>
//          <img src={"CoverUrl"} alt="" /> */}
//     </div>
//   );
// }

export default App;
