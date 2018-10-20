import logo from "../logo.svg";
import React from "react";

export function Header() {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    </div>;
}
