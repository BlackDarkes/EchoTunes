import React from "react";
import "./style/form.scss";

const Singin = () => {
    return (
        <div className="block-form">
            <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
                <div className="form-name">
                    <label htmlFor="emailUser">Почта:</label><br />
                    <input type="email" className="inputPole" name="emailUser" id="emailUser" placeholder="Введите почту..." autoComplete="useremail"/>
                </div>
                <div className="form-password">
                    <label htmlFor="passUser">Пароль:</label><br />
                    <input type="password" className="inputPole" name="passUser" id="passUser" placeholder="Введите пароль..." autoComplete="new-password"/><br />
                    <div className="forgo-password">
                        <button type="button" className="forgo-password__button">Забыли пароль</button>
                    </div>
                </div>
                <div className="buttons">
                    <div className="form-box">
                        <input type="checkbox" name="getEmail" id="getEmail" />
                        <label htmlFor="getEmail">Запомнить данные.</label>
                    </div>
                    <input type="submit" value="войти" />
                </div>
        </form>
        </div>
    );
}
 
export default Singin;