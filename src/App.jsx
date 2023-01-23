import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Boutique from "./Pages/Boutique";
import Product from "./Pages/Product";
import products from "./products";
import Navbar from './Components/Navbar.js';
import ShoppingCart from "./Components/ShoppingCart";

const App = () => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);


  const changeTotal = (ammount) => {
    setTotal((previousState) => {
      return previousState + ammount;
    })
  }

  const AddToCart = (e) => {
    const {value} = e.target;
    const product = products.find((product) => product.id === value);
    if(cart.find((item) => item.id === value) === undefined){
      product.quantity = 1;
      setCart((previousState) => {
        return (previousState.concat([product]))
      })
    } else {
      setCart((previousState) => {
        const newState = previousState.map((object) => {
          if (object.id === value){
            // kinda sus (its is adding the double of this value CHECK LATER)
            object.quantity += 0.5;
          }
          return object;
        })
        return newState;
      })
    }
    setShowCart(true);
    changeTotal(product.price);
  }

  const removeFromCart = (e) => {
    const {value} = e.target;
    const product = products.find((product) => product.id === value);
    setCart((previousState) => {
      const unfilteredState =  previousState.map((object) => {
        if (object.id === value){
          object.quantity -= 0.5;
        }
        return object;
      })
      const newState = unfilteredState.filter((item) => item.quantity > 0);
      return newState
    })
    changeTotal(product.price * -1)
  }

  const toggleShowCart = (e) => {
    e.preventDefault();
    if (showCart === true){
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }



  return (
    <div>
      <Routes>
        <Route path="/" element={
        <><Navbar 
          showCart={toggleShowCart}
        />
        <ShoppingCart 
          total={total}
          data={cart}
          appear={showCart}
          closeCart={toggleShowCart}
          onAdd={AddToCart}
          onRemove={removeFromCart}
        />
        <Home /> 
        </>} />
        <Route path="/boutique" element={
        <><Navbar 
          showCart={toggleShowCart}
        />
        <ShoppingCart 
          total={total}
          data={cart}
          appear={showCart}
          closeCart={toggleShowCart}
          onAdd={AddToCart}
          onRemove={removeFromCart}
        />
        <Boutique/> 
        </>}/>
        <Route path="/boutique/:id" element={
        <><Navbar 
          showCart={toggleShowCart}
        />
        <ShoppingCart 
          total={total}
          data={cart}
          appear={showCart}
          closeCart={toggleShowCart}
          onAdd={AddToCart}
          onRemove={removeFromCart}
        />
        <Product 
          onAdd={AddToCart}
        />
        </>} />
      </Routes>
    </div>
  );
};

export default App;