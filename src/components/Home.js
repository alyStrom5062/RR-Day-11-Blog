import React from "react";

export default function Home() {
    return (
    <main>
        <div className="post">
        <h2><a href="/post/1">Unraveling the Mysteries of Artificial Intelligence</a></h2>
        <h3><a className="green" href="/authors">John Smith</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
        <p className="readmore green"><a className="green" href="/post/2">Read more...</a></p>
        </div>
        <div className="post">
        <h2><a href="/post/2">10 Essential Tips for Mastering Web Development and Design</a></h2>
        <h3><a className="green" href="/authors">Jane Doe</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
        <p className="readmore"><a className="green" href="/post/2">Read more...</a></p>
        </div>
    </main>
    )
}