import { useEffect, useState } from "react"
import { itemsMock } from "../mocks/item.mocks"
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    useEffect(() => {
        new Promise((resolve) => 
        setTimeout(() => {
        resolve(itemsMock);
    }, 2000)
        ).then((data) => setItem(data));
    }, []);

    if (!item){
        return <p>loading...</p>
    }
    return <ItemDetail item={item}/>
}