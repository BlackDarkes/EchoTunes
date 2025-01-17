import React from "react";

const PassPassword = () => {
    return (
        <form action="" method="post">
            <label htmlFor="emailUser">Почта:</label><br />
            <input type="email" name="emailUser" id="emailUser" placeholder="Введите почту..."/>
            <input type="submit" value="отправить ссылку" />
        </form>
    );
}
 
export default PassPassword;