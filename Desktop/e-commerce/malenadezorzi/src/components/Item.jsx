import { useNavigate } from "react-router-dom";

export const Item = ({ product }) => {
  const navigate = useNavigate();

  function HandleNavigate() {
    navigate(`/item/${product.id}`)()
  };

    return (
      <div onClick={HandleNavigate} className="item-div">
        <img src={product.img}/>
        <li>{product.name}</li>
      </div>
    );
  };