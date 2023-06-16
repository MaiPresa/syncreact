import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

import { Button } from "../button/Button";

export const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="Sync Logo"/>
            <ul className="smallBold">
                <Link to="/"> <li>DESCRIPTION</li></Link>
                <Link to="/features" > <li>FEATURES</li></Link>
                <Link to="/screens"> <li>SCREENS</li></Link>
                <Link to="/extra"> <li>EXTRA</li></Link>
                <li><a href="https://factoriaf5.org/"><Button buttonType="bttnSecondary" >DOWNLOAD</Button></a></li>
            </ul>
        </nav>
    );
};