import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import {ProductList} from "./products/ProductList";
import Cart from "./cart/cart";
import { useState } from 'react';

function App() {

  /// main app should have access to cart items their add and subtractions
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Leather Tote Bag',
      description: 'This is a stylish and spacious leather tote bag perfect for everyday use.',
      image: 'https://cdn.pixabay.com/photo/2012/04/14/14/19/handbag-34091__340.png',
      price: 129.99,
      amount: 5,
      category: 'Bags',
      brand: 'Michael Kors',
      sku: 'SKU001',
    },
    {
      id: 2,
      name: 'Crossbody Bag',
      description: 'This is a chic and compact crossbody bag perfect for a night out.',
      image: 'https://cdn.pixabay.com/photo/2015/08/10/20/14/purse-883112__340.jpg',
      price: 49.99,
      amount: 10,
      category: 'Bags',
      brand: 'Coach',
      sku: 'SKU002',
    },
  ]);

  const addToCart = (product) => {
    console.log("Add to cart called");
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If item already exists in cart, increase its amount
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If item doesn't exist in cart, add it with amount of 1
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
    console.log("lenght is"+ cartItems.length);
    console.log("Cart data is" + cartItems);
  };
  const removeOneFromCart = (product) => {
    console.log("remove 1 called");
    const existingProduct = cartItems.find((p) => p.id === product.id);
  
    if (existingProduct) {
      const updatedCart = cartItems.map((p) => {
        if (p.id === product.id) {
          const updatedQuantity = p.amount - 1;
          if (updatedQuantity <= 0) {
            return null; // Return null to remove product from cart
          } else {
            return { ...p, amount: updatedQuantity }; // Update 'quantity' to 'amount' in the returned object
          }
        } else {
          return p;
        }
      }).filter(p => p !== null); // Filter out null values to remove products from cart
  
      setCartItems(updatedCart);
    }
    console.log("length is " + cartItems.length);
    console.log("Cart data is " + cartItems);
  };
  
  const removeProductFromCart = (product) => {
    console.log("remove all called");
    const updatedCart = cartItems.filter((p) => p.id !== product.id);
    setCartItems(updatedCart);
  };

  const totalCount = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);  
  
  return (
    <Template count = {totalCount}>
      <Switch>
        <Route path="/products" exact>
          <ProductList  addToCart = {addToCart}/>
        </Route>
        <Route path="/products/:id">
          <ProductDetail  addToCart = {addToCart} />
        </Route>
        <Route path="/cart" exact>
          <Cart  cartItems = {cartItems} onAdd = {addToCart} onRemove = {removeProductFromCart} onReduce = {removeOneFromCart}/>
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
