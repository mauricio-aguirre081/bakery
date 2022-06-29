import React, { useEffect, useState } from 'react';

import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const prods = [
    { id: 1, image: "#", title: "Pan" },
    { id: 2, image: "#", title: "Pan Casero" },
    { id: 3, image: "#", title: "Pan Salvado" },
    { id: 3, image: "#", title: "Facturas" },
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(prods);
            }, 3000);
        });
        getData.then(res => setData(res));


    }, [])

    const onAdd = (quantity) => {
        console.log(`Compra ${quantity} unidades`);
    }

    return (
        <>
            <ItemCount initial={3} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;