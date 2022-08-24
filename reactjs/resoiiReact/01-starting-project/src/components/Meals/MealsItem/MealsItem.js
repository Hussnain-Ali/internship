import React, { useContext } from 'react'
import CartContext from '../../../Store/CartContext';

import MealItemForm from './MealItemForm'
import classes from './MealsItem.module.css'

const MealsItem = (props) => {
    const cartCtx = useContext(CartContext);
    const { name, description, price } = props
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: name,
            amount: amount,
            price: price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>${price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>

        </li>
    )
}

export default MealsItem