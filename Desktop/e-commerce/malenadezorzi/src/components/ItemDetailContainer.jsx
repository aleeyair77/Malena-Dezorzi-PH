import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { itemsMock } from "../mocks/item.mocks"
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => 
        setTimeout(() => 
        resolve(itemsMock.find((item) => item.id === id)), 1000)
        ).then((data) => setItem(data));
    }, [id]);

    if (!item){
        return <p>loading...</p>
    }
    return <ItemDetail item={item}/>
}