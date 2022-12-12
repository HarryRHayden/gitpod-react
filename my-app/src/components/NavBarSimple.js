import React from "react";
import styles from "./css.NavBarSimple.modules.css";

class NavBarSimple extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            name: "log in",
        };
    }
    
    render() {
        return (
            <div class={css.NavBar}>
                <h1>
                    My Gallery
                </h1>
                <span>
                    {this.state.message}
                </span>
                <button onClick={() => this.handleClick()}>
                    {this.state.name}
                </button>
            </div>
        )
    }
}

export default NavBarSimple;