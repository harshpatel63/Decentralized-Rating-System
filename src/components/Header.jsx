import React, { useEffect } from "react";
import "./css/header.css";
import meta_basket_logo from "../assets/meta-basket-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import web3 from "../web3";
import { ratingAbi, ratingAddress } from "../Rating";
function Header() {
    let [isvisible, setisvisible] = useState(false);
    let navlist = [
        { name: "Home", link: "" },
        { name: "Hospitals", link: "hospitals" },
        { name: "About", link: "about" },
    ];

    /* ------------------------------- Just blockchain things ------------------------------- */
    useEffect(() => {
        loadBlockchainData();
    }, []);

    async function loadBlockchainData() {
        let accounts;
        try {
            accounts = await web3.eth.getAccounts();
        } catch (err) {
            // this.state.ismetamaskavailable = false;
            console.log("please install metamask");
            return;
        }

        window.MetaMaskAccount = accounts[0];
        window.ratingContract = new web3.eth.Contract(ratingAbi, ratingAddress);
        console.log(window.ratingContract);
        const count = await window.ratingContract.methods.getCount(1).call();
        const points = await window.ratingContract.methods.getPoints(1).call();
        console.log(count, points);
    }
    /*---------------------------------------------------------------------------------------*/

    return (
        <>
            <div className="header header-wrapper">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img
                                src={meta_basket_logo}
                                alt="Meta Basket Logo"
                                className="header__brand__img"
                            />
                            Meta Health
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setisvisible(!isvisible)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className={
                                (isvisible ? "" : "collapse") +
                                " navbar-collapse"
                            }
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="navbar-nav nav_links">
                                {navlist.map((ele) => (
                                    <li
                                        key={ele.name}
                                        className="nav-item"
                                        onClick={auto_closenavbar_on_mobile}
                                    >
                                        <Link
                                            className="nav-link"
                                            to={"/" + ele.link}
                                        >
                                            {ele.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="dummy-head"></div>
        </>
    );
    /*
     * For auto closing navbar on click
     */
    function auto_closenavbar_on_mobile() {
        setisvisible(false);
    }
}

export default Header;
