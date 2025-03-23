import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);


    const cartTotal = cartCtx.items.reduce((acc, item) => { return acc + item.quantity * item.price}, 0);

    return  (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>
            <p className="cart-total">
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className="modal-actions">
                <Button textonly="true">Close Cart</Button>
                <Button>Go to checkout</Button>
            </p>
        </Modal>
    );
}