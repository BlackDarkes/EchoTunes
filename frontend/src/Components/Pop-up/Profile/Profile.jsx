import Button from "../../Blocks/Button/Button";
import Close from "./AsetsProfile/Close";
import Download from "./AsetsProfile/Download";
import Exit from "./AsetsProfile/Exit";
import Login from "./AsetsProfile/Login";
import History from "./AsetsProfile/History";
import "./style/Profile.css";
import Settings from "./AsetsProfile/Settings";
import Termofuse from "./AsetsProfile/Termsofuse";
import Referents from "./AsetsProfile/Referens";
import Feedback from "./AsetsProfile/Feedback";

const Profile = ({active, setActive}) => {
    return (
        <div className={active ? "active popup" : "popup"}>
            <button type="button" className="popup__close" onClick={() => setActive(!active)}><Close/></button>
            <div className="popup-block"> 
                <Button image={<Login/>} text={"Войти/Регистрация"} classBlock="button popup-block__button"/>
                <Button image={<Exit/>} text={"Выход"} classBlock="button popup-block__button"/>
                <Button image={<Download/>} text={"Загрузка музыки"} classBlock="button popup-block__button"/>
                <Button image={<History/>} text={"История"} classBlock="button popup-block__button"/>
                <Button image={<Settings/>} text={"Настройки"} classBlock="button popup-block__button"/>
                <Button image={<Termofuse/>} text={"Условия пользования"} classBlock="button popup-block__button"/>
                <Button image={<Referents/>} text={"Справка"} classBlock="button popup-block__button"/>
                <Button image={<Feedback/>} text={"Оставить отзыв"} classBlock="button popup-block__button"/>
            </div>
        </div>
    );
}
 
export default Profile;