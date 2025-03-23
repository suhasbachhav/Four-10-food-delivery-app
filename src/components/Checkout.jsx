import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleCloseCheckout() { 
        userProgressCtx.hideCheckout();
    }

    return(
        <Modal className="checkout" open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" id="full-name" type="text" />
                <Input label="E-Mail Address" id="email" type="email" />
                <Input label="Contact Number" id="phone-number" type="tel" />
                <Input label="Street" id="street" type="text" />
                <div className="control-row">
                    <Input label="City" id="city" type="text" />
                    <Input label="Postal Code" id="postal-code" type="text" />
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleCloseCheckout}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}