import { Link } from "react-router-dom";
import React from 'react';

const GeneratPlaylist = ({name, index}) => {
    return ( 
         <Link className="playlist-block__playlists" to={`/playlists/music/${index}`}><p className="playlist-block__text">{name}</p></Link>
    );
}
 
export default GeneratPlaylist;