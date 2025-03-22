import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';

export default function Headers() {
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="4Ten Foods"/>
                <h1>4Ten Foods</h1>
            </div>
            <nav>
                <Button textOnly>Cart (0)</Button>
            </nav>
        </header>
    )
}