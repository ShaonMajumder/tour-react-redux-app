import { ChevronDown, ChevronUp } from "../icons";
// import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { clearCart } from "../features/tour/tourSlice";

import { useDispatch } from "react-redux";

const CartItem = ({ id, name, info, image, price }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{info}</p>
        <h4 className="item-price">Price : ${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          remove
        </button>
      </div>
      
    </article>
  );
};

export default CartItem;
