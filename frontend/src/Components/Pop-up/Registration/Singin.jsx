import React from "react";

const Singin = () => {
    return (
        <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="emailUser">Почта:</label><br />
            <input type="email" name="emailUser" id="emailUser" placeholder="Введите почту..."/>
            <label htmlFor="passUser">Пароль:</label><br />
            <input type="password" name="passUser" id="passUser" /><br />
            <button type="button">Забыли пароль</button>
            <input type="checkbox" name="getEmail" id="getEmail" />
            <label htmlFor="getEmail">Запомнить данные.</label>
            <input type="submit" value="войти" />
        </form>
    );
}
 
export default Singin;