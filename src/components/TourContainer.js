import CartItem from "./CartItem";
import TourItem from "./TourItem";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const TourContainer = () => {
  const dispatch = useDispatch();
  const { tourItems, total, isLoading } = useSelector((store) => store.tour);

  // if (amount < 1) {
  //   return (
  //     <section className="cart">
  //       <header>
  //         <h2>your bag</h2>
  //         <h4 className="empty-cart">is currently empty</h4>
  //       </header>
  //     </section>
  //   );
  // }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {tourItems.map((item) => {
          return <TourItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default TourContainer;
