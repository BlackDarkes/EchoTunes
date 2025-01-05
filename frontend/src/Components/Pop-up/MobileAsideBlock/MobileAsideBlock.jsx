import React, { useEffect, useState } from "react";
import "./style/MobileAsideBlock.scss";
import { Link } from "react-router-dom";
import Button from "../../Blocks/Button/Button";
import Labrary from "../../AssetsBlocks/AsideBlock/Labrary";
import Home from "../../AssetsBlocks/AsideBlock/Home";
import New from "../../AssetsBlocks/AsideBlock/New";
import AddPlaylist from "../AddPlaylist/AddPlaylist";
import { playlists } from "../../../Playlists/playlists";
import GeneratMobilePlaylist from "./block/GeneratMobilePlaylist";

const MobileAsideBlock = ({home, library, active}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.addEventListener("click", (event) => {
            const newPlaylist = event.target.closest(".mobileAside-playlist__new");

            if (newPlaylist) {
                setOpen(!open);
            };
        });

        return () => {
            document.removeEventListener("click", (event) => {
                const newPlaylist = event.target.closest(".mobileAside-playlist__new");
    
                if (newPlaylist) {
                    setOpen(!open);
                };
            });
        }
    }, [open])

    const generatePlaylist = playlists.map((elem, index) => {
        return <GeneratMobilePlaylist key={playlists[index].id} name={playlists[index].name} index={playlists[index].id}/>
    })

    return (
        <>
        <aside className={active ? "mobileAsideBlock active" : "mobileAsideBlock"}>
            <div className="mobileAsideBlock__block">
                <div className="mobileAside">
                    <div className="mobileAside-navigation">
                        <Link className={[home].join(" ")} to="/">
                            <Button image={<Home/>} text={"Главная"} />
                        </Link>
                        <Link className={[library].join(" ")} to="/playlists">
                            <Button image={<Labrary/>} text={"Библиотека"}/>
                        </Link>
                    </div>

                    <div className="mobileAside-playlist">
                        <Button image={<New/>} text={"Новый"} classBlock={"mobileAside-playlist__new"} />

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
 
export default MobileAsideBlock;