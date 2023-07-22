import React from "react";

export default function Header() {
    return (
        <header>
        <h1><a href="/">Home Page</a></h1>
        <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/authors">Authors</a></li>
            <li><a href="/about">About</a></li>
        </ul>
        </nav>
        </header>
    )
}

