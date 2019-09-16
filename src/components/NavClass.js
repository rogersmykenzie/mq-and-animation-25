import React from "react";
import "../styles/Nav.css";

class NavClass extends React.Component {
    constructor() {
        super();
        this.state = {
            menuOpenStatus: "side-menu"
        }
    }
    toggle = () => {
        console.log("toggle");
        if(this.state.menuOpenStatus === "side-menu-close" || this.state.menuOpenStatus === "side-menu") {
            this.setState({menuOpenStatus: "side-menu-open"});
        } else if(this.state.menuOpenStatus === "side-menu-open") {
            this.setState({menuOpenStatus: "side-menu-close"});
        }
    }
    render() {
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
                                <img 
                                onClick={this.toggle}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" 
                                alt="hamburger_button" />
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={`${this.state.menuOpenStatus} hidden-by-default`}>
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Services</h1>
                    <h1>Contact</h1>
                </div>
            </>
        )
    }
}

export default NavClass;