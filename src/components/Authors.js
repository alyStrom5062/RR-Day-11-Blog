import React from "react";
import author1 from "../img/author1.png";
import author2 from "../img/author2.png";

export default function Authors() {
    return (
    <main>
        <div className="authors-container">
            <div className="Author">
                <h2 className="green">John Smith</h2>
                <h3>Date joined: 2017</h3>
                <img src={author1} alt="John Smith, a website journalist."></img>
                <p>John Smith is an intrepid journalist with a passion for uncovering hidden truths. With a decade of experience in investigative reporting, he fearlessly delves into complex societal issues, shedding light on corruption and injustices. His compelling storytelling and dedication to factual accuracy have earned him numerous accolades and a loyal readership.</p>
            </div>

            <div className="Author">
            <h2 className="green">Jane Doe</h2>
            <h3>Date joined: 2013</h3>
            <img src={author2} alt="Jane Doe, a website journalist."></img>
            <p>Jane Doe is a versatile journalist known for her insightful and thought-provoking articles. With a background in international relations, she brings a unique perspective to her reporting on global affairs and geopolitical conflicts. Her exceptional writing skills and empathetic approach to human-interest stories have touched the hearts of readers worldwide, making her a respected voice in the industry.</p>
            </div>

        </div>
        </main>
    )
}