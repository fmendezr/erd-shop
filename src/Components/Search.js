import closeBtn from "../Images/closeIcon.svg";
import searchIcon from "../Images/searchIcon.svg";

const Search = ({appear, close}) => {
    if (appear === false){
        return null;
    };

    return (
        <div className="searchModal">
            <button onClick={close}><img src={closeBtn} alt="Close" /></button>
            <div>
                <img src={searchIcon} alt="search"/>
                <input placeholder="Search Here..."/>
            </div>
            
        </div>
    )
}

export default Search; 