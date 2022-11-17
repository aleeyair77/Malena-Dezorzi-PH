import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { IoHomeOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";


export const NavBar = () => {
    return <header className="main-header">
        <div className="div-nav">
        <ul className="nav-links">
            <li className="nav-link"><Link className="a"><IoHomeOutline /></Link></li>
            <li className="nav-link"><Link to="/category/servicios" className="a"><IoStorefrontOutline /></Link></li>
            <li className="nav-link"><Link className="a"><IoImageOutline /></Link></li>
            <li className="nav-link"><Link className="a"><IoWomanOutline /></Link></li>
            <li className="nav-link"><Link className="a"><IoMailOutline /></Link></li>
        </ul>
        </div>
        <div className="div-sombra-uno">
        <ul className="nav-links">
            <li className="nav-link"><Link className="a"><IoHomeOutline /></Link></li>
            <li className="nav-link"><Link className="a"><IoImageOutline /></Link></li>
            <li className="nav-link"><Link className="a"><IoWomanOutline /></Link></li>
            <li className="nav-link"><Link className="a"><IoMailOutline /></Link></li>
            <li className="nav-link"><Link className="a"><IoStorefrontOutline /></Link></li>
        </ul>
        </div>
        <CartWidget />
    </header>
};

