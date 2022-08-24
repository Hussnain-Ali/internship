import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartBtn.module.css'
import CartIcon from '../../Cart/CartIcon.js'
import CartContext from '../../../Store/CartContext';
const HeaderCartBtn = (props) => {

    const [btnHighlighted, setBtnHighlighted] = useState(false)

    const { onClick } = props;
    const cartCtx = useContext(CartContext)

    const { items } = cartCtx;

    const numberOFCartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnHighlighted(true)

        const timer = setTimeout(() => {
            setBtnHighlighted(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart </span>
            <span className={classes.badge}>{numberOFCartItem}</span>
        </button>
    )
}

export default HeaderCartBtn;