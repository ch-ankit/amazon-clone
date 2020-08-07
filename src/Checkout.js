import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
function Checkout(props) {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__ad"
                src="https://www.advertisemint.com/wp-content/uploads/2018/10/20-amazon-ads-that-rock-and-why-15-768x154.jpg"
                alt="ad"
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one go to home and click "Add to Basket" next to the item
                    </p>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List out all checkout Product */}
                        {basket.map(item => (
                            <CheckoutProduct
                                item={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                        )}
                    </div>
                )}
        </div>
    );
}

export default Checkout;