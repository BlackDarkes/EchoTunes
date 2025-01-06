/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useContext } from "react";
import "./style/MusicBar.scss";
import { musics } from "../../Music/musics";
import PlayMusic from "../AssetsBlocks/MusicBar/NavigationMusic/MusicPlay"
import StopMusic from "../AssetsBlocks/MusicBar/NavigationMusic/StopMusic";
import MaxSound from "../AssetsBlocks/MusicBar/Sound/MaxSound";
import MiddleSound from "../AssetsBlocks/MusicBar/Sound/MiddleSound";
import LowSound from "../AssetsBlocks/MusicBar/Sound/LowSound";
import NotSound from "../AssetsBlocks/MusicBar/Sound/NotSound";
import BackMusic from "../AssetsBlocks/MusicBar/NavigationMusic/BackMusic";
import RandomMusic from "../AssetsBlocks/MusicBar/NavigationMusic/RandomMusic";
import NextMusic from "../AssetsBlocks/MusicBar/NavigationMusic/NextMusic";
import RepeatMusic from "../AssetsBlocks/MusicBar/NavigationMusic/ReapeatMusic";
import AddPlaylist from "../AssetsBlocks/MusicBar/Sound/AddPlaylist";
import { MusicsContents } from "../../Contents/MusicsContents";
import Navigation from "./Block/Navigation/Navigation";

const MusicBar = () => {
    const defaultVolume = 0.5;
    const count = localStorage.getItem("value");

    const { play, setPlay } = useContext(MusicsContents);
    const [valueSound, setValueSound] = useState(count ? Number(count) : defaultVolume);
    const { index, setIndex } = useContext(MusicsContents);
    const [track, setTrack] = useState(new Audio(musics[index].music));
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const [vision, setVision] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [random, setRandom] = useState(false);

    const getRandomTrackIndex = () => {
        let randomIndex = null;
        do {
            randomIndex = Math.floor(Math.random() * musics.length);
        } while (randomIndex === index);
        return randomIndex;
    };

    useEffect(() => {
        localStorage.setItem("value", valueSound);
    }, [valueSound]);

    useEffect(() => {
        console.log("Loading track:", musics[index].music);
        const newTrack = new Audio(musics[index].music);
        newTrack.volume = valueSound;

        newTrack.onerror = (e) => {
            console.error("Ошибка загрузки аудио:", e);
        };

        newTrack.onloadedmetadata = () => {
            setDuration(newTrack.duration);
        };

        const updateTime = () => {
            setCurrentTime(newTrack.currentTime);
        };

        const handleEnded = () => {
            if (random) {
                const newIndex = getRandomTrackIndex();
                setIndex(newIndex);
            } else {
                nextTrack();
            }
            setPlay(true);
        };

        newTrack.addEventListener('timeupdate', updateTime);
        newTrack.addEventListener('ended', handleEnded);

        setTrack(newTrack);

        return () => {
            newTrack.pause();
            newTrack.currentTime = 0;
            newTrack.removeEventListener('timeupdate', updateTime);
            newTrack.removeEventListener('ended', handleEnded);
        };
    }, [index, repeat, random]);

    useEffect(() => {
        if (track) {
            track.volume = valueSound;
            if (play) {
                track.play().catch(error => {
                    console.error("Error playing the track:", error);
                });
            } else {
                track.pause();
            }
        }
    }, [play, track, valueSound]);

    const nextTrack = () => {
        if (random) {
            const newIndex = getRandomTrackIndex();
            setIndex(newIndex);
        } else {
            setIndex((prevIndex) => (prevIndex + 1) % musics.length);
        }
        setCurrentTime(0);
        setPlay(true); 
    };

    const lastTrack = () => {
        setIndex((prevIndex) => (prevIndex - 1 + musics.length) % musics.length);
        setCurrentTime(0);
        setPlay(true);
    };

    const togglePlayPause = () => {
        setPlay(prevPlay => !prevPlay);
    };

    const handleVolumeChange = (event) => {
        const volume = parseFloat(event.target.value);
        setValueSound(volume);
    };

    const handleTimeChange = (event) => {
        const time = parseFloat(event.target.value);
        setCurrentTime(time);
        if (track) {
            track.currentTime = time;
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleRandomToggle = (e) => {
        e.stopPropagation();
        setRandom(prevRandom => !prevRandom);
    };

    return (
        <>
            <section className="musicBar" onClick={() => setVision(!vision)}>
                <input style={{ cursor: "pointer" }}
                    type="range"
                    className="musicBar__progress"
                    min="0"
                    step="0.05"
                    max={duration}
                    value={currentTime}
                    onChange={handleTimeChange} />
                <div className="musicBar__block">
                    <div className="bar">
                        <div className="bar-info">
                            <p className="bar-info__time">
                                <span className="start-time">{formatTime(currentTime)}</span> / <span className="full-time">{formatTime(duration)}</span>
                            </p>
                            <div ref={containerRef} className="bar-info__name" style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', width: "250px" }}>
                                <span ref={textRef}>
                                    {musics[index].name} / {musics[index].author} &nbsp; &nbsp;
                                </span>
                            </div>
                        </div>
                        <div className="bar-nav">
                            <button type="button"
                                className={`bar-nav__randomMusic ${random ? 'active' : ''}`}
                                onClick={handleRandomToggle}>
                                <RandomMusic />
                            </button>
                            <div className="navigation">
                                <button type="button" className="navigation__previous navigation__button" onClick={(e) => {
                                    e.stopPropagation();
                                    lastTrack();
                                }}>
                                    <BackMusic />
                                </button>
                                <button type="button" className="navigation__play navigation__button" onClick={(e) => {
                                    e.stopPropagation();
                                    togglePlayPause();
                                }}>
                                    {play ? <StopMusic /> : <PlayMusic />}
                                </button>
                                <button type="button" className="navigation__next navigation__button" onClick={(e) => {
                                    e.stopPropagation();
                                    nextTrack();
                                }}>
                                    <NextMusic />
                                </button>
                            </div>
                            <button
                                type="button"
                                className={`bar-nav__repeatMusic ${repeat ? 'active' : ''}`}
                                onClick={() => setRepeat(!repeat)}
                            >
                                <RepeatMusic />
                            </button>
                        </div>
                        <div className="bar-sound">
                            <button type="button" className="bar-sound__addPlaylist" onClick={(e) => {
                                e.stopPropagation();
                            }}>
                                <AddPlaylist />
                            </button>
                            <div className="sound">
                                <button type="button" className="sound__image" onClick={(e) => {
                                    e.stopPropagation();
                                    valueSound >= 0.01 ? setValueSound(0) : setValueSound(0.30);
                                }}>
                                    {valueSound === 0 ? <NotSound /> : ""}
                                    {valueSound >= "0.01" && valueSound <= 0.14 ? <LowSound /> : ""}
                                    {valueSound >= "0.15" && valueSound <= 0.99 ? <MiddleSound /> : ""}
                                    {valueSound === 1 ? <MaxSound /> : ""}
                                </button>
                                <input className="sound__progress"
                                    style={{ cursor: "pointer" }}
                                    type="range"
                                    value={valueSound}
                                    min="0"
                                    step="0.01"
                                    max="1"
                                    onChange={handleVolumeChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Navigation
                vision={vision}
                setVision={setVision}
                index={index}
                duration={duration}
                currentTime={currentTime}
                handleTimeChange={handleTimeChange}
                formatTime={formatTime}
                lastTrack={lastTrack}
                togglePlayPause={togglePlayPause}
                play={play}
                nextTrack={nextTrack}
                repeat={repeat}
                setRepeat={setRepeat}
                random={random}
                setRandom={setRandom} />
        </>
    );
}

export default MusicBar;