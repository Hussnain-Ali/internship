import React from 'react'
import HeaderCartBtn from '../CartButtons/HeaderCartBtn'
import classes from './Header.module.css'
import mealsImage from '../../../assets/meals.jpg'
const Header = (props) => {
    const { onShowCartHandler } = props
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartBtn onClick={onShowCartHandler} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt=' A table full of ddelicious foods' />
            </div>
        </React.Fragment>
    )
}

export default Header