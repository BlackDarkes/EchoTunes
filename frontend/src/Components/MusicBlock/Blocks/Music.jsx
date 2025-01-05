import React, { useContext } from "react";
import musicImage from "../../../Assets/Secondary/MusicBlock/КартинкаМузыки.svg";
import RenameMusic from "../../AssetsBlocks/MusicBlock/RenameMusic";
import DeleteMusic from "../../AssetsBlocks/MusicBlock/DeleteMusic";
import PlayMusic from "../../AssetsBlocks/MusicBar/NavigationMusic/MusicPlay";
import StopMusic from "../../AssetsBlocks/MusicBar/NavigationMusic/StopMusic";
import ThreePoints from "../../AssetsBlocks/MusicBlock/ThreePoints";
import { MusicsContents } from "../../../Contents/MusicsContents";

const Music = ({ musicName, author, id }) => {
    const { index, setIndex, play, setPlay } = useContext(MusicsContents);
    const isPlaying = index === id && play;

    const togglePlay = () => {
        if (isPlaying) {

            setPlay(false);
        } else {

            if (index !== id) {
                setPlay(false);
                setIndex(id);

                setTimeout(() => {
                    setPlay(true);
                    console.log(`Playing: ${musicName}`);
                }, 100);
            } else {
                setPlay(true);
                console.log(`Playing: ${musicName}`);
            }
        }
    };

    const stopMusic = () => {
        setPlay(false);
        setIndex(undefined);
    };

    const stratPlayDesctop = () => {
        if (window.innerWidth > 834) {
            togglePlay();
        } 
    }

    const startPlayMobile = () => {
        if (window.innerWidth <= 834) {
            togglePlay();
        }
    }

    return (
        <section className="music-block" onClick={startPlayMobile}>
            <div className="block-info">
                <button type="button" className="block-info__playPause" onClick={togglePlay}>
                    {isPlaying ? <StopMusic onClick={stopMusic} /> : <PlayMusic />}
                </button>
                <img src={musicImage} alt="картинка музыки" className="block-info__image" width={40} height={40} />
                <button type="button" className="block-info__playPause-tabs" onClick={stratPlayDesctop}>
                    {isPlaying ? <StopMusic onClick={stopMusic}/> : <img src={musicImage} alt="картинка музыки" className="image" width={40} height={40} />}
                </button>
                <p className="block-text">
                    <span className="block-text__name">{musicName}</span>
                    <span className="block-text__author">{author}</span>
                </p>
            </div>
            <div className="block-button">
                <div className="buttons">
                    <button type="button" className="block-button__rename block-button__button"><RenameMusic /></button>
                    <button type="button" className="block-button__delete block-button__button"><DeleteMusic /></button>
                </div>
                <p className="block-time">0:00/3:30</p>
                <button type="button" className="block-button__3points" onClick={(e) => {
                    e.stopPropagation()
                }}><ThreePoints /></button>
            </div>
        </section>
    );
};

export default Music;
