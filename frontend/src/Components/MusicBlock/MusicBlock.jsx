/* eslint-disable no-unused-vars */
import React, {useState, useRef, useContext } from "react";
import "./style/MusicBlock.scss";
import Music from "./Blocks/Music";
import { musics } from "../../Music/musics";

musics.reverse()

const MusicBlock = () => {
    const generateMusic = musics.map((elem, index) => {
        return <Music key={musics[index].id} musicName={musics[index].name} author={musics[index].author} isPlay={false} id={index}/>
    })

    return (
        <div className="musicBlock">
            <div className="musicBlock__block">
                <div className="music" >
                    {generateMusic}
                </div>
            </div>
        </div>
    );
}
 
export default MusicBlock;