/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style/SerchPanel.css";

const SerchBar = () => {
    const [value, setValue] = useState("");

    return (
        <section className="serchBar">
            <div className="serchBar__block">
                <div className="serch">
                    <div className="serch-block">
                        <input type="text" className="serch-block__input" placeholder="Название трека" onChange={(event) => setValue(event.target.value)}/>
                        <button type="button" className="serch-block__button">
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2375 21.875L17.7969 17.3437M20.1959 11.4583C20.1959 16.0607 16.5395 19.7917 12.0292 19.7917C7.51889 19.7917 3.86255 16.0607 3.86255 11.4583C3.86255 6.85596 7.51889 3.125 12.0292 3.125C16.5395 3.125 20.1959 6.85596 20.1959 11.4583Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default SerchBar;