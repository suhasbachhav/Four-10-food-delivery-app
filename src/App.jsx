import Cart from "./components/Cart";
import Headers from "./components/Headers";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Headers />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>

  );
}

export default App;
