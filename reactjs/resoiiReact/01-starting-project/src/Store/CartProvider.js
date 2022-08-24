import React, { useReducer } from 'react';
import CartContext from './CartContext';
const defaultCartState = {
    items: [],
    totalAmount: 0
};
/////this reducer function don not need any thing from that component
//and it should be re created all the time when the component is re evaluated


const cartReducer = (state, action) => {     //here the state is last state snapshot manage by the reducer
    if (action.type === 'ADD_ITEM') {//now in here update the cart item
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        else {
            updatedItems = state.items.concat(action.item)
        }



        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)

        }
        else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }




    return defaultCartState;
};
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: "ADD_ITEM", item: item })

    };
    const removeItemCarthandler = id => {
        dispatchCartAction({ type: "REMOVE_ITEM", id: id })
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemCarthandler

    }





    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;