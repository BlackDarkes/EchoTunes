/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { playlists } from "../../Playlists/playlists"
import Playlist from "./Block/Playlist";
import "./style/PlaylistBlock.scss";
import AddPlaylistImage from "./Assets/AddPlaylistImage";
import { PlaylistContext } from "../../Contents/AddPlaylistContext";

const PlaylistBlock = () => {
    const generatePlaylist = playlists.map((elem, index) => {
        return <Playlist key={playlists[index].id} image={playlists[index].img} name={playlists[index].name} index={playlists[index].id}/>
    })

    const { open, setOpen } = useContext(PlaylistContext);

    useEffect(() => {
        document.addEventListener("click", (event) => {
            const newPlaylist = event.target.closest(".playlist__add");

            if (newPlaylist) {
                setOpen(!open);
            };
        });

        return () => {
            document.removeEventListener("click", (event) => {
                const newPlaylist = event.target.closest(".playlist__add");
    
                if (newPlaylist) {
                    setOpen(!open);
                };
            });
        }
    }, [])
    
    return (
        <div className="playlistBlock">
            <div className="playlistBlock__block">
                <div className="playlist">
                    <button type="button" className="playlist__add"><AddPlaylistImage/></button>
                    {generatePlaylist}
                </div>
            </div>
        </div>
    );
}
 
export default PlaylistBlock;