import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    // totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {
    if(action.type === 'ADD_ITEM') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const updatedItems = [...state.items];

        if(existingItemIndex !== -1) {
            const existingItem = state.items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingItemIndex] = updatedItem;
        }else{
            updatedItems.push({...action.item, quantity: 1});
        }

        return {
            ...state,
            items: updatedItems
        };

    }

    if(action.type === 'REMOVE_ITEM') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);

        const existingItem = state.items[existingItemIndex];
        const updatedItems = [...state.items];
        if(existingItem.quantity === 1) {
            updatedItems.splice(existingItemIndex, 1);
        }else{  
            const updatedItem = {...existingItem, quantity: existingItem.quantity - 1};
            updatedItems[existingItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems
        };
    }

    return state;
}

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});
    
    function addItemHandler(item) {
        dispatchCartAction({type: 'ADD_ITEM', item: item});
    }

    function removeItemHandler(id) {
        dispatchCartAction({type: 'REMOVE_ITEM', item: {id: id}});
    }

    const context = {
        items: cart.items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    console.log(context);

    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;