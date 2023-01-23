const CartItem = (props) => {
    return (
        <div className="cartItem">
            <img src={props.img} alt={props.name} />
            <div className="details">
                <p>{props.name} </p>
                <p><span>{props.price}</span> Runes</p>
                <div className="quantity">
                    <button value={props.id} onClick={props.onRemove}>-</button>
                    <p>{props.quantity}</p>
                    <button value={props.id} onClick={props.onAdd}>+</button>
                </div>
            </div>
           
        </div>  
    )
}

export default CartItem;