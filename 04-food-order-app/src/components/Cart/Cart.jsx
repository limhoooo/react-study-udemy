import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>
        {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
    return (
        <Modal toggleCartHandler={props.toggleCartHandler}>
            <div>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.62</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.toggleCartHandler}>Close</button>
                    <button className={classes.button}>order</button>
                </div>
            </div>
        </Modal>)
};

export default Cart;