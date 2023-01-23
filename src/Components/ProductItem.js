import { Link } from "react-router-dom";

const ProductItem = (props) => {
    return (
        <Link to={`/boutique/${props.id}`} style={{textDecoration: "inherit", color: "inherit"}}>
        <div className="product">
            <img src={props.image} alt={`${props.name}`}/>
            <div className="namePrice">
                <p className="productName">{props.name}</p>
                <p className="price">{props.price} Runes</p>
            </div>
        </div>
        </Link>
    )
}

export default ProductItem;