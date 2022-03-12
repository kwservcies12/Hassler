import React from "react";
import {Link} from 'react-router-dom'; 
import "./NavBar.css";

function NavBar() {
    return (
        <div className="NavBarContainer">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Friday39</Link>
                </li>
                <li>
                    <Link to="/services">Mission</Link>
                </li>
                <li>
                    <Link to="/projects">Racing</Link>
                </li>
                <li>
                    <Link to="/contact">Sponser Form</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
        </div>
        
    );

}
export default NavBar;