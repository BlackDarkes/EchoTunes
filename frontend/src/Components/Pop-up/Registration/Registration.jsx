import React from "react";
import "./style/form.scss";
const Registration = () => {
    return (
        <div className="block-form">
            <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
                <div className="form-name">
                    <label htmlFor="emailUser">Почта:</label><br />
                    <input type="email" className="inputPole" name="emailUser" id="emailUser" placeholder="Введите почту..." autoComplete="useremail"/>
                </div>
                <div className="form-password">
                    <label htmlFor="passUser">Пароль:</label><br />
                    <input type="password" className="inputPole" name="passUser" id="passUser" placeholder="Введите пароль..." autoComplete="new-password"/>
                </div>
                <div className="form-repeat">
                    <label htmlFor="repeatPass">Повторите пароль:</label><br />
                    <input type="password" className="inputPole" name="repeatPass" id="repeatPass" placeholder="Повторите пароль..." autoComplete="new-password"/>
                </div>
                <div className="buttons">
                    <div className="form-box">
                        <input type="checkbox" name="getEmail" id="getEmail" />
                        <label htmlFor="getEmail">Отправлять новости на почту.</label>
                    </div>
                    <input type="submit" value="зарегистрироваться" />
                </div>
            </form>
        </div>
    );
}
 
export default Registration;