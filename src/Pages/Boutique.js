import ProductItem from "../Components/ProductItem";
import products from "../products";

const Boutique = () => {
    return ( 
        <>
            <main className="boutique">
                <div className="products">
                    {products.map((product) => {
                        return (
                            <ProductItem 
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                                key={product.name}
                            />
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Boutique;