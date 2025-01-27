import React from 'react';

function Cart(props) {
  const { cartItems, onAdd, onRemove ,onReduce} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <>
        <div className="d-none d-lg-block">
          <h2 className="text-center mb-5">Cart</h2>
          {cartItems.length === 0 ? (
            <div className="text-center">Your cart is empty</div>
          ) : (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button className="btn btn-secondary btn-sm" onClick={() => onReduce(item)}>
                        -
                      </button>
                      <span className="mx-2">{item.amount}</span>
                      <button className="btn btn-secondary btn-sm" onClick={() => onAdd(item)}>
                        +
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => onRemove(item)} >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-right">
                    Total: ${cartItems.reduce((acc, item) => acc + item.price * item.amount, 0)}
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
        <center>
        <div className="d-inline-block d-lg-none">
          <h2 className="text-center mb-5">Cart</h2>
          {cartItems.length === 0 ? (
            <div className="text-center">Your cart is empty</div>
          ) : (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                        <button className="btn btn-secondary btn-sm" onClick={() => onReduce(item)}>
                        -
                      </button>
                      </tr>
                      <tr>
                      <span className="mx-2">{item.amount}</span>
                      </tr>
                      <tr>
                      <button className="btn btn-secondary btn-sm" onClick={() => onAdd(item)}>
                        +
                      </button>
                      </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => onRemove(item)} >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-right">
                    Total: ${cartItems.reduce((acc, item) => acc + item.price * item.amount, 0)}
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
        </center>
        </>
      );
    };
    
    export default Cart;