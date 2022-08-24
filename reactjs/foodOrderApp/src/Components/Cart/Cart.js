import React, { useContext } from 'react'
import CartContext from '../../store/cart-context.js'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
const Cart = (props) => {
    const { onHideCart } = props

    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    console.log(totalAmount)
    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => <li>{item.name}</li>)}</ul>
    return (
        <Modal onClose={onHideCart}>{cartItems}
            <div className={classes.total}>
                <span>Total Amounts</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={onHideCart} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>

    )
}

export default Cart