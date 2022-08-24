import React, { useReducer } from 'react'
import CartContext from './cart-context'
const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADDITEM') {
        const updatedItems = state.items.concat(action.item);
        console.log(updatedItems)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        console.log(updatedTotalAmount)
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCarthandler = (item) => {
        dispatchCartAction({ type: 'ADDITEM', item: item })
    }
    const removeItemToCarthandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCarthandler,
        removeItem: removeItemToCarthandler
    }
    console.log(cartContext.totalAmount)
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider