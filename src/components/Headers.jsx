import logoImg from '../assets/logo.jpg';

export default function Headers() {
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="4Ten Foods"/>
                <h1>4Ten Foods</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}