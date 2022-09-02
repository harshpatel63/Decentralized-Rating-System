import React from "react";
import "./css/header.css";
import meta_basket_logo from "../assets/meta-basket-icon.png";
import { Link } from "react-router-dom";

function Header() {
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
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarNavDropdown"
                        >
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a
                                        class="nav-link"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Products
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="dummy-head"></div>
        </>
    );
}

export default Header;
