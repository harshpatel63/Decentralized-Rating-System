import React from "react";
import "./css/footer.css";
import buy_with_meta_mask from "../assets/Metamask-logo.jpg";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__row row">
                    <div className="col-sm-3 about-div">
                        <h4 className="title">Meta Health</h4>
                        <p>
                            Meta Health is an online Decentralized, Blockchain
                            Based, Secured and Trusted Rating System.
                        </p>
                    </div>

                    <div className="col-sm-3 payment-div">
                        <h4 className="title">Integrated with</h4>
                        <ul className="payment">
                            <li>
                                <a href="https://metamask.io/" target="_blank">
                                    <div className="footer__buy_with_meta_mask">
                                        <img src={buy_with_meta_mask} alt="" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />

                <div className="row text-center"> © 2022. Meta Health</div>
            </div>
        </footer>
    );
}

export default Footer;
