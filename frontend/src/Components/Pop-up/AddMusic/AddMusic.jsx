import React from "react";
import DownloadMusic from "./Assets/DownloadMusic";
import BurgerClose from "../../AssetsBlocks/AsideBlock/Mobile/BurgerClose";
import "./style/AddMusic.scss";

const AddMusic = ({open, setOpen}) => {
    return (
        <div className={open ? "addMusic active" : "addMusic"}>
            <div className="addMusic__block">
                <div className="add">
                    <button type="button" className="add__close" onClick={() => setOpen(false)}><BurgerClose/></button>
                    <form action="" className="add-form">
                        <div className="add-textblock">
                            <input type="text" id="name-tarack" name="name-tarack" className="add-textblock__track" placeholder="Название трека" maxLength={50} required/>
                            <input type="text" id="name-author" name="name-author" className="add-textblock__author" placeholder="Имя автора" maxLength={50} required/>
                            <input type="submit" id="save" name="save" className="add-textblock__enter" value="Сохранить" />
                        </div>
                        <div className="add-downloadMusic">
                            <label htmlFor="downloadMusic" className="downloadMusic-block">
                                <DownloadMusic/>
                                <p className="downloadMusic-block__text">Загрузить музыку</p>
                            </label>
                            <input type="file" name="downloadMusic" id="downloadMusic" className="add-downloadMusic__music" accept=".mp3" required/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default AddMusic;