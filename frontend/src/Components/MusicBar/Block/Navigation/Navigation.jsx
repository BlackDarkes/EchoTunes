import Close from "../Close/Close";
import musicImage from "../../../../Assets/Secondary/MusicBlock/КартинкаМузыки.svg"
import "./style/Navigation.scss";
import { musics } from "../../../../Music/musics";
import StopMusic from "../../../AssetsBlocks/MusicBar/NavigationMusic/StopMusic";
import PlayMusic from "../../../AssetsBlocks/MusicBar/NavigationMusic/MusicPlay";
import AddButton from "../AddButton/AddButton";
import RandomButton from "../RandomButton/RandomButton";
import RepeatButton from "../RepeatButton/RepeatButton";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";
import React from 'react';

const Navigation = ({vision,
        setVision,
        index,
        duration, 
        currentTime, 
        handleTimeChange, 
        formatTime, 
        lastTrack, 
        togglePlayPause,
        play,
        nextTrack,
        repeat,
        setRepeat,
        random,
        setRandom,}) => {
    return ( 
        <div className={vision ? "navigation-popup active-music" : "navigation-popup"}>
            <div className="navigation-popup__block">
                <div className="navigation">
                    <button type="button" className="navigation__close" onClick={() => setVision(!vision)}>
                        <Close /> 
                    </button> 
                    <img src={musicImage} alt="Нота"  className="navigation__image"/>
                    <div className="author">
                        <p className="author-block">
                            <span className="author-block__name">{musics[index].name}</span>
                            <span className="author-block__author">{musics[index].author}</span>
                        </p>

                        <button type="button" className="author__addPlaylist">
                            <AddButton/>
                        </button>
                    </div>
                    <div className="navigation-management">
                        <input style={{cursor: "pointer"}}
                            type="range"
                            className="navigation-management__progress"
                            min="0"
                            step="0.05"
                            max={duration}
                            value={currentTime}
                            onChange={handleTimeChange}/>
                        <p className="bar-info__time">
                            <span className="start-time" style={{fontSize: "14px"}}>{formatTime(currentTime)}</span> / <span className="full-time" style={{fontSize: "14px"}}>{formatTime(duration)}</span>
                        </p>
                    </div>
                    <div className="navigation-buttons">
                        <button className="navigation-buttons__random" onClick={() => setRandom(!random)}>
                            <RandomButton style={{width: "40px", height: "40px"}}/>
                        </button>
                        <div className="buttons">
                            <button type="button" className="buttons__previous buttons__button" onClick={lastTrack}>
                                <PreviousButton/>
                            </button>
                            <button type="button" className="buttons__play buttons__button" onClick={togglePlayPause}>
                                {play ? <StopMusic/> : <PlayMusic/>}
                            </button>
                            <button type="button" className="buttons__next buttons__button" onClick={nextTrack}>
                                <NextButton/>
                            </button>
                        </div>
                        <button
                            type="button"
                            className={`navigation-buttons__repeat ${repeat ? 'active' : ''}`}
                            onClick={() => setRepeat(!repeat)}
                        >
                            <RepeatButton/>
                        </button>
                    </div>
                    <button type="button" className="navigation__next-tracs">Следующие....</button>
                </div>
            </div>
        </div>
    );
}
 
export default Navigation;