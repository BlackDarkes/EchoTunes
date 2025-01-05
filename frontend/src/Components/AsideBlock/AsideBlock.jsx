/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/AsudeBlock.scss";
import Button from "../Blocks/Button/Button";
import Home from "../AssetsBlocks/AsideBlock/Home";
import Labrary from "../AssetsBlocks/AsideBlock/Labrary";
import New from "../AssetsBlocks/AsideBlock/New";
import AddPlaylist from "../Pop-up/AddPlaylist/AddPlaylist";
import { PlaylistContext } from "../../Contents/AddPlaylistContext";
import { playlists } from "../../Playlists/playlists";
import GeneratPlaylist from "./block/GeneratPlaylist";

const AsideBlock = ({home, library}) => {
    const { open, setOpen } = useContext(PlaylistContext)

    useEffect(() => {
        document.addEventListener("click", (event) => {
            const newPlaylist = event.target.closest(".aside-playlist__new");

            if (newPlaylist) {
                setOpen(!open);
            };
        });



        return () => {
            document.removeEventListener("click", (event) => {
                const newPlaylist = event.target.closest(".aside-playlist__new");
    
                if (newPlaylist) {
                    setOpen(!open);
                };
            });
        }
    }, [])

    const generatePlaylist = playlists.map((elem, index) => {
        return <GeneratPlaylist key={playlists[index].id} name={playlists[index].name} index={playlists[index].id}/>
    })

    return ( 
        <>
        <aside className="asideBlock">
            <div className="asideBlock__block">
                <div className="aside">
                    <div className="aside-navigation">
                        <h1 className="aside-navigation__title">EchoTunes</h1>
                        <Link className={[home].join(" ")} to="/">
                            <Button image={<Home/>} text={"Главная"} />
                        </Link>
                        <Link className={[library].join(" ")} to="/playlists">
                            <Button image={<Labrary/>} text={"Библиотека"}/>
                        </Link>
                    </div>

                    <div className="aside-playlist">
                        <Button image={<New/>} text={"Новый"} classBlock={"aside-playlist__new"} />

                        <section className="playlist-block">
                            {generatePlaylist}
                        </section>
                    </div>
                </div>
            </div>
        </aside>
        <AddPlaylist open={open} setOpen={setOpen}/>
        </>
    );
}
 
export default AsideBlock;