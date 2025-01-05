/* eslint-disable no-unused-vars */
import Button from "../../Blocks/Button/Button";
import Close from "./AsetsProfile/Close";
import Download from "./AsetsProfile/Download";
// import Exit from "./AsetsProfile/Exit";
import Login from "./AsetsProfile/Login";
import History from "./AsetsProfile/History";
import "./style/Profile.css";
import Settings from "./AsetsProfile/Settings";
import { useEffect, useState } from "react";
import AddMusic from "../AddMusic/AddMusic";

const Profile = ({active, setActive}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.addEventListener("click", (event) => {
            const newMusic = event.target.closest(".downloadMusic");

            if (newMusic) {
                setOpen(!open);
            };
        });

        return () => {
            document.removeEventListener("click", (event) => {
                const newMusic = event.target.closest(".downloadMusic");
    
                if (newMusic) {
                    setOpen(!open);
                };
            });
        }
    }, [open])

    return (
        <>
        <div className={active ? "active popup" : "popup"}>
            <button type="button" className="popup__close" onClick={() => setActive(!active)}><Close/></button>
            <div className="popup-block"> 
                <Button image={<Login/>} text={"Войти/Регистрация"} classBlock="button popup-block__button"/>
                <Button image={<Download/>} text={"Загрузка музыки"} classBlock="button popup-block__button downloadMusic"/>
                <Button image={<History/>} text={"История"} classBlock="button popup-block__button"/>
                <Button image={<Settings/>} text={"Настройки"} classBlock="button popup-block__button"/>
            </div>
        </div>
        <AddMusic open={open} setOpen={setOpen}/>
        </>
    );
}
 
export default Profile;