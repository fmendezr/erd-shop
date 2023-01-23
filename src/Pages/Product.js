import { useParams } from "react-router-dom";
import products from "../products";

const Product = (props) => {

    const { id } = useParams();
    const product = products.find((product) => product.id === id);

    return (
        <>
            <main className="product">
                <div className="item">
                    <h1>{product.name}</h1>''
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="info">
                    <p><span>{product.price}</span> runes</p>
                    <div className="btnContainer">
                        <button value={product.id} className="add" onClick={props.onAdd}>Add to Bag</button>
                        <button value={product.id} className="buy" onClick={props.onAdd}>Buy Now</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Product;