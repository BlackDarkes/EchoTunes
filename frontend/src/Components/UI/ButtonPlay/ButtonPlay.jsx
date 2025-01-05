import React, { useState } from "react";

const ButtonPlay = ({image1, image2, classe}) => {
    const [play, setPlay] = useState(false)

    return ( 
        <button type="button" className={classe} onClick={() => setPlay(!play)}>
            {play ? image1 : image2}
        </button>
    );
}
 
export default ButtonPlay;