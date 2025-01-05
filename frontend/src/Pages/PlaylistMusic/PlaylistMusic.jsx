import React from 'react';
import { Link, useParams } from "react-router-dom";
import MusicBlock from "../../Components/MusicBlock/MusicBlock"
import Back from "../../Components/AssetsBlocks/PlaylistPage/back";
import ThreePoints from "../../Components/AssetsBlocks/MusicBlock/ThreePoints";
import { playlists } from "../../Playlists/playlists";
import "./style/PlaylistMusic.scss";

const PlaylistMusic = () => {
    const { index } = useParams()

    return (
        <>
            <section className="playlistMusic">
                <div className="playlistMusic__block">
                    <div className="playlist">
                        <Link to="/" className="back"><Back/></Link>
                        <button className="threePoints"><ThreePoints/></button>
                        <div className="musics">
                            <MusicBlock/>
                        </div>
                        <div className="playlist-information">
                            <img src={playlists[index].img} alt="" className="playlist-information__image" width={100} height={100}/>
                            <p className="text-block">
                                <span className="text-block__name">{playlists[index].name}</span>
                                <span className="text-block__about">{playlists[index].about}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default PlaylistMusic;