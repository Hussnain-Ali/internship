import React from 'react'
import classes from './CartBtn.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const CartBtn = () => {
    return (
        <div className={classes.cartbtn}>
            <AiOutlineShoppingCart
                color="white"
                size={30}

            />
        </div>
    )
}

export default CartBtn