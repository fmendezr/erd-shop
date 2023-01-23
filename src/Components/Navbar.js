import { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../Images/searchIcon.svg";
import shoppingIcon from "../Images/shoppingIcon.svg";
import armorIcon from "../Images/armorIcon.png";
import Search from "./Search";

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const openSearch = () => {
        setSearch(true);
    }

    const closeSearch = (e) => {
        e.preventDefault();
        setSearch(false);
    }

    return (
        <nav>
            <ul>
                <li><Link to="/" style={{textDecoration: "inherit", color: "inherit"}}>Erd's</Link></li>
                <li><Link to="/boutique" style={{textDecoration: "inherit", color: "inherit"}}><img src={armorIcon} alt="Armor's"></img></Link></li>
                <li onClick={openSearch}><img src={searchIcon} alt="Search"></img></li>
                <li onClick={props.showCart}><img src={shoppingIcon} alt="Bag"></img></li>
            </ul>
            <Search appear={search} close={closeSearch}/>
        </nav>
    )
}

export default Navbar;