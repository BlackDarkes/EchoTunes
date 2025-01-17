import React, { useState } from "react";
import "./style/style.scss";
import Close from "../Profile/AsetsProfile/Close";
import Registration from "./Registration";
import Singin from "./Singin";

const PopUp = ({ popUpOpen, setPopUpOpen }) => {
    const [registration, setRegistration] = useState(true);

    const button = () => {
        return (
            <button className="button" onClick={() => setRegistration(!registration)}>
                {registration ? "войти." : "зарегистрируйтесь."}
            </button>
        );
    }

    return (
        <div className={popUpOpen ? "pop-up active" : "pop-up"}>
            <button type="button" className="pop-up__close" onClick={() => setPopUpOpen(!popUpOpen)}><Close/></button>
            <div className="block">
                <header className="block-header">
                    <h1 className="block-header__title">
                        {registration ? "Зарегистрироваться" : "Войти"}
                    </h1>
                    <p className="block-header__text">
                        {registration 
                            ? "Если уже есть аккаунт, то вы можете " 
                            : "Если нет учетной записи, "} 
                        {button()}
                    </p>
                </header>
                <main className="block-body">
                    {registration ? <Registration/> : <Singin/>}
                </main>
            </div>
        </div>
    );
}

export default PopUp;
