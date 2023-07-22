import React from "react";

export default function Header() {
    return (
        <header>
        <h1><a href="/">Home Page</a></h1>
        <nav>
        <ul>
            <li><a className="green" href="/">Home</a></li>
            <li><a className="green" href="/authors">Authors</a></li>
            <li><a className="green" href="/about">About</a></li>
        </ul>
        </nav>
        </header>
    )
}

