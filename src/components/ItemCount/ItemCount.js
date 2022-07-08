import React, { useState } from 'react';

const ItemCount = ({ initial, stock }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        stock !== count && setCount(count + 1);
    };

    const substract = () => {
        initial !== count && setCount(count - 1);
    };
    return (
        <div className="count">
            <div className="buttons">
                <button onClick={add}>+</button>
                <p>{count}</p>
                <button onClick={substract}>-</button>
            </div>
            <div className="add-cart">
                <button>Add to Cart!</button>
            </div>
        </div>
    );
};

export default ItemCount;














/* import React, { useEffect, useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));

    }, [initial])

    return (
        <div className='counter'>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount; */