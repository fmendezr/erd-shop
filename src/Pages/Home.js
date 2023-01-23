import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="home">
            <h1>Erd's Shack</h1>
            <Link to="./boutique"><button className="shopNow">Shop Now</button></Link>
        </main>
    )
}

export default Home