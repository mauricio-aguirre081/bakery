import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { FakeApi} from "../../mocks/FakeApi";

export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true)

    const { productId } = useParams();

    useEffect(() => {
        fetch(`FakeApi`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch(err=>console.log(err))
            .finally(()=>setLoaded(false))
    }, [productId]);

    return (
        <>
            {loaded ? <CircularProgress color="success" /> : <ItemDetail product={product} />}
        </>
    )
}

