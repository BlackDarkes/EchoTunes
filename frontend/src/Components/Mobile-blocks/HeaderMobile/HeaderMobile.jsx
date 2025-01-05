import React, { useState } from "react";
import "./style/HeaderMobile.scss";
import BurgerClose from "../../AssetsBlocks/AsideBlock/Mobile/BurgerClose";
import BurgerOpen from "../../AssetsBlocks/AsideBlock/Mobile/BurgerOpen";
import ProfilUser from "../../ProfilUser/ProfilUser";
import SerchMobile from "./Blocks/SerchMobile/SerchMobile";
import MobileAsideBlock from "../../Pop-up/MobileAsideBlock/MobileAsideBlock";

const HeaderMobile = ({home, library}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="headerMobile">
            <button type="button" className="headerMobile__burger" onClick={() => setOpen(!open)}>
                {open ? <BurgerClose/> : <BurgerOpen/>}
            </button>
            <MobileAsideBlock home={home} library={library} active={open}/>
            <h1 className="headerMobile__title">EchoTunes</h1>
            <div className="headerMobile-blocks">
                <SerchMobile/>
                <ProfilUser/>
            </div>
        </div>
    );
}
 
export default HeaderMobile;