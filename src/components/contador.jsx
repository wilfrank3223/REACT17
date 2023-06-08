import React, { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
            setCount(count - 1);
    };
    
    return (
        <div>
            <h1>contador</h1>
            <p>el valor actual es: {count}</p>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
        </div>
    );
};

export default Counter;