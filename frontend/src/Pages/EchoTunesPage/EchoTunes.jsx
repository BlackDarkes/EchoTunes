import React from 'react';
import AsideBlock from "../../Components/AsideBlock/AsideBlock";
import AsideBlockMobile from "../../Components/Mobile-blocks/AsideBlockMobile/AsideBlockMobile";
import HeaderMobile from "../../Components/Mobile-blocks/HeaderMobile/HeaderMobile";
import MusicBlock from "../../Components/MusicBlock/MusicBlock";
import ProfilUser from "../../Components/ProfilUser/ProfilUser";
import SerchBar from "../../Components/SerchPanel/SearchBar";
import "./style/EchoTunes.scss";

const EchoTunes = () => {
    return (
        <div className="echoTunes">
            <AsideBlock home="aside-navigation__button active" library="aside-navigation__button"/>
            <AsideBlockMobile home="mobile__home active mobile__button" library="mobile__library mobile__button"/>
            <section className="echoTunes__blocks">
                <header className="header-block">
                    <SerchBar/>
                    <ProfilUser/>
                </header>
                <HeaderMobile home="aside-navigation__button active" library="aside-navigation__button"/>
                <main className="musics">
                    <MusicBlock/>
                </main>
            </section>
        </div>
    );
}
 
export default EchoTunes;