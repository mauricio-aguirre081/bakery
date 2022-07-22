import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { getProd } from '../../mocks/FakeApi';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from "../../firebase/firebase";
import { getDoc, collection, query, connectFirestoreEmulator } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'productos');
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))
    }, [productId]);

    return (
        <>
            {loaded ? <CircularProgress color="success" /> : <ItemDetail product={product} />}
        </>
    )
}


export default ItemDetailsContainer


// para una api fake

/* setLoading(true);
        const URL = `https://fakestoreapi.com/products/${id}`;
        fetch(URL)
            .then((res) => res.json())
            .then((json) => setProduct(json))
            .finally(() => {
                setLoading(false);
            });
 */