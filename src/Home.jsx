import React from "react";
import "./Home.css";

function Home() {
    return (
        <div>
            <div className="parent_home_container">
                <div class="section home" id="home">
                    <div class="home-items">
                        <h1>De-Centralized</h1>
                        <h1>Hospital Rating System</h1>
                        <h2>Find The Best Hospitals For Your Loved Ones.</h2>
                        <h2>Get Fair Ratings Here !</h2>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
            <div className="home_info">
                <p>Our system tries to solve all of this problems in hospital rating and introduces a rating system that is just based on patients' reviews and is decentralized and safe from manipulations.</p>
                <h3>Why do we require a decentralized rating system ?</h3>
                <ul>
                    <li>Current rating systems are centralized having complete control over the ratings database.</li>
                    <li>Central authorities can edit / delete negative ratings to avoid their defamation.</li>
                    <li>It can led to huge rating scams with a purpose to attract buyers.</li>
                </ul>
                <h3>How will Blockchain solve this problem ?</h3>
                <ul>
                    <li>A Blockchain network is a decentralized, distributed ledger which has rigorous Cryptographic concepts, Consensus mechanisms which makes it reliable, trustworthy and impossible to hack.</li>
                    <li>Anything written in blockchain can’t be removed unless done legally, making rating systems consumer friendly.</li>
                    <li>It will also ensure that our system doesn't have a single point of failure.</li>
                </ul>
                <h3>Feature</h3>
                <ul>
                    <li>Provides trustworthy ratings for hospitals.</li>
                    <li>Ratings can't be manipulated illegally.</li>
                    <li>User friendly and clean UI.</li>
                </ul>                
            </div>
        </div>
    );
}

export default Home;

// https://github.com/debaonline4u/NLTM_Website
