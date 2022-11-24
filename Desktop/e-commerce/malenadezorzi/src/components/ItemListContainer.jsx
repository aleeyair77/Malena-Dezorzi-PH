import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { itemsMock } from "../mocks/item.mocks"
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts([]);

        new Promise((resolve) => 
        setTimeout(() => {
        resolve(itemsMock);
    }, 2000)
        ).then((data) => { 
            if (category) {
            const categories = data.filter(
              (product) => product.category === category
            );
            setProducts(categories);
          } else {
            setProducts(data);
          }
        });
      }, [category]);

    if (products.length === 0){
        return <p>loading...</p>
    }
    return <div className="div-items-inicio">
      <div className="contenedor-items-inicio">
      <ItemList products={products}/>
      </div>
      </div>
}

