import React, { useContext } from 'react'
import CartContext from '../../store/cart-context.js'
import CartIcon from '../Cart/CartIcon.js'
import classes from './CartButton.module.css'
const HeaderCartButton = (props) => {
    const { onClick } = props

    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)
    console.log(numberOfCartItems)
    return (
        <button onClick={onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton