import React from "react";
import "../styles/Nav.css";

function Nav(props) {
    return (
        <>
            <nav>
                <div>
                    <h1>Start Bootstrap</h1>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                        <li className="hamburger hidden-by-default">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="hamburger_button" />
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="side-menu hidden-by-default">
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Services</h1>
                <h1>Contact</h1>
            </div>
        </>
    )
}

export default Nav;