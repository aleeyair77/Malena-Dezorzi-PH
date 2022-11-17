import { useEffect, useState } from "react"
import { itemsMock } from "../mocks/item.mocks"
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        new Promise((resolve) => 
        setTimeout(() => {
        resolve(itemsMock);
    }, 2000)
        ).then((data) => setProducts(data));
    }, []);

    if (products.length === 0){
        return <p>loading...</p>
    }
    return <div><ItemList products={products}/></div>
}

