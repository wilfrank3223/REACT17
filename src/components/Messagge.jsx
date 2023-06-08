import React, { useState } from 'react';
import "./mensaje.css"

const Messagge = ({ text }) => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
        {showMessage && <p className="mensaje">{text}</p>}
        </div>
    );
}

export default Messagge;