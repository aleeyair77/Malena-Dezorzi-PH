import CartWidget from "./CartWidget";
import { IoHomeOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";

const NavBar = () => {
    return <header className="main-header">
        <div className="div-nav">
        <ul className="nav-links">
            <li className="nav-link"><a href="#">LOGO</a></li>
            <li className="nav-link"><a href="#"><IoHomeOutline /></a></li>
            <li className="nav-link"><a href="#"><IoMailOutline /></a></li>
            <li className="nav-link"><a href="#"><IoWomanOutline /></a></li>
            <li className="nav-link"><a href="#"><CartWidget /></a></li>
        </ul>
        </div>
    </header>
};

export default NavBar; 