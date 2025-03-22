import logoImg from '../assets/logo.jpeg';

export default function Headers() {
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="4Ten Foods"/>
                <h1>4Ten Foods</h1>
            </div>
            <nav>
                <button>Cart</button>
            </nav>
        </header>
    )
}