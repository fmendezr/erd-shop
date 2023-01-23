import { Link } from "react-router-dom";
import closeIcon from "../Images/closeIcon.svg";
import CartItem from "./ShoppingCartItem.js";

const ShoppingCart = (props) => {
    if (props.appear === false ) return null; 
    return (
        <div className="cartBackground">
            <div className="cart">
                <button onClick={props.closeCart}><img src={closeIcon} alt="close"/></button>
                <h1>Your Shopping Cart</h1>
                {props.data.map((product) => {
                  return (
                    <CartItem 
                    img={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    key={product.id}
                    id={product.id}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                   /> 
                  )
                })}
                <p className="subtotal">Subtotal: <span>{props.total}</span> runes</p>
                <Link onClick={() => {
                    window.alert("Thank you for visiting! Sadly this website does not sell anything. it's a  practice exercise with react.");
                    props.closeCart();
                }} to="/" style={{textDecoration: "inherit", color: "inherit", alignSelf: "center"}}>  <button id="checkout">Checkout</button></Link>
            </div>
        </div>
    )
}

export default ShoppingCart; 