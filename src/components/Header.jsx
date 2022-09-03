import React from "react";
import "./css/header.css";
import meta_basket_logo from "../assets/meta-basket-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    let [isvisible, setisvisible] = useState(false);
    let navlist = ["Home", "Products", "About"];
    return (
        <>
            <div className="header-wrapper">
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img
                                src={meta_basket_logo}
                                alt="Meta Basket Logo"
                                className="header__brand__img"
                            />
                            Meta Basket
                        </Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setisvisible(!isvisible)}
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className={
                                (isvisible ? "" : "collapse") +
                                " navbar-collapse"
                            }
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul class="navbar-nav nav_links">
                                {navlist.map((ele) => (
                                    <li
                                        class="nav-item"
                                        onClick={auto_closenavbar_on_mobile}
                                    >
                                        <Link
                                            class="nav-link"
                                            to={"/" + ele.toLocaleLowerCase()}
                                        >
                                            {ele}
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
