import React, { useState } from "react";

//esto es una pruba para crear una funcion hover
const Hover = (props) => {
    const [hover, setHover] = useState(false);
    const handleHover = () => {
        setHover(!hover);
    };
    return(
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{
                backgroundColor: hover ? 'green' : ''
            }}
        >
            {props.children}
        </div>
    )
}

export default Hover;