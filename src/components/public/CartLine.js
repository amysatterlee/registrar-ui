import React from 'react';

const CartLine = ({ itemCount, onPress, cartOpen }) => {
    const handlePress = (e) => {
        e.preventDefault();
        onPress();
    }
    return (
        <div className='cartline'>
            <div className='cartlinetext'>
                Buy Tickets - Reserve Your Spot
            </div>
            <button className='iconbutton' onClick={handlePress}>
                {cartOpen ? (
                    <i className="far fa-times-circle fa-2x"></i>
                ) : (
                    <>
                        <i>{itemCount}</i>
                        <i className="fas fa-shopping-cart fa-2x"></i>
                    </>
                )}
            </button>
        </div>
    )
}

export default CartLine;