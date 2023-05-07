import React from 'react';

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-name">{item.name}</div>
          </div>
          <div className="cart-item-actions">
            <div className="cart-item-price">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
            <button className="cart-item-button remove-button" onClick={() => onRemove(item)}>-</button>
            <button className="cart-item-button add-button" onClick={() => onAdd(item)}>+</button>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="cart-summary">
            <div className="cart-summary-row">
              <div className="cart-summary-label">Items Price</div>
              <div className="cart-summary-value">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="cart-summary-row">
              <div className="cart-summary-label">Shipping Price</div>
              <div className="cart-summary-value">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="cart-summary-row">
              <div className="cart-summary-label">Total Price</div>
              <div className="cart-summary-value">${totalPrice.toFixed(2)}</div>
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
