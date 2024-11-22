import React from "react";
import { Link } from "react-router-dom";
import "./style/AsudeBlock.css";
import Button from "../Blocks/Button/Button";
import Home from "../AssetsBlocks/AsideBlock/Home";
import Labrary from "../AssetsBlocks/AsideBlock/Labrary";
import New from "../AssetsBlocks/AsideBlock/New";

const AsideBlock = ({home, library}) => {
    return ( 
        <aside className="asideBlock">
            <div className="asideBlock__block">
                <div className="aside">
                    <div className="aside-navigation">
                        <h1 className="aside-navigation__title">EchoTunes</h1>
                        <Link className={[home].join(" ")}>
                            <Button image={<Home/>} text={"Главная"} />
                        </Link>
                        <Link className={[library].join(" ")}>
                            <Button image={<Labrary/>} text={"Библиотека"}/>
                        </Link>
                    </div>

                    <div className="aside-playlist">
                        <Button image={<New/>} text={"Новый"} classBlock={"aside-playlist__new"}/>

                        <section className="playlist-block">
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                            <Link className="playlist-block__playlists" to={""}>Созданный плейлист...</Link>
                        </section>
                    </div>
                </div>
            </div>
        </aside>
    );
}
 
export default AsideBlock;