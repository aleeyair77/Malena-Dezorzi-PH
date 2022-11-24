import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <ul className="ul-items">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};
