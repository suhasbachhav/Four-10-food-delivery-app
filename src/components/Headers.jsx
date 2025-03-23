import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Headers() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((acc, item) => { return acc + item.quantity }, 0);


    function showCartHandler() {
        console.log(userProgressCtx)
        userProgressCtx.showCart();
    }
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="4Ten Foods"/>
                <h1>4Ten Foods</h1>
            </div>
            <nav>
                <Button textOnly onClick={showCartHandler}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}