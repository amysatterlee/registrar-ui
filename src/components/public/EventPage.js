import React, { useState } from 'react';
import './styles.css';
import EventBanner from './EventBanner';
import TicketForm from './TicketForm';
import CartLine from './CartLine';
import ShoppingCart from './ShoppingCart';

const EventPage = ({ event }) => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleAdd = (item, cb) => {
        // item = { option: , price: , count: }
        console.log(item);
        setCart([ ...cart, item ]);
        if (cb) {
            cb();
        }
    }

    const handleCartPress = () => {
        setShowCart(!showCart);
    }

    return (
        <div className='container fullpage'>
            <EventBanner title={event.title} description={event.description} />
            <CartLine itemCount={cart.length} onPress={handleCartPress} cartOpen={showCart}/>
            {showCart ? (
                <ShoppingCart cart={cart} />
            ) : (
                <TicketForm options={event.ticketOptions} handleAdd={handleAdd}/>
            )}
        </div>
    )
}

export default EventPage;