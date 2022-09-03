import React from "react";
import "./css/ProductPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReviewFetch from "./ReviewFetch";
import CreateRating from "./CreateRating";

function ProductPage() {
    let [reviewFetched, setreviewFetched] = useState(true);
    let state = {
        currentproduct: {
            PID: "1",
            ImageURL: "https://picsum.photos/200/300",
            Name: "Abcd",
            Price: "0.456",
            Details:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        points: 0,
        count: 1,
    };
    /*
    //Loading spinner

    if (state.currentproduct === undefined)
        return (
            <div className="productdetail__loader">
                <h1>Loading...</h1>{" "}
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    */
    return (
        <>
            <Link to="/">
                <div className="productdetail__back-button">
                    <i className="fa-solid fa-angles-left"></i>
                </div>
            </Link>
            <section className="productdetail__product-detail-area">
                <div className="productdetail__product-detail-area__container">
                    <div className="productdetail__product-detail-area__container__image">
                        <img src={state.currentproduct.ImageURL} alt="" />
                    </div>
                    <div className="productdetail__product-detail-area__container__products-text">
                        <div className="productdetail__product-detail-area__container__products-text__text">
                            <h3>{state.currentproduct.Name}</h3>
                            <h2>{state.currentproduct.Price} MATIC</h2>
                            <p>{state.currentproduct.Details}</p>
                        </div>
                        <div className="productdetail__product-detail-area__container__products-text__buy-btn">
                            <button className="btn btn-warning buy-button">
                                <i className="fa-solid fa-cart-shopping"></i>{" "}
                                Buy with Meta Mask
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="productdetail__product-review-area">
                <div className="productdetail__product-review-area__container">
                    <div className="productdetail__product-review-area__container__content">
                        <div className="productdetail__product-review-area__container__content__reviews__overallreview">
                            <div className="overallreview-container">
                                <h5>Overall</h5>
                                <h4>
                                    {reviewFetched === true
                                        ? state.count == 0
                                            ? 0
                                            : (
                                                  state.points / state.count
                                              ).toFixed(2)
                                        : LoadingSpinner(false)}
                                </h4>
                                <h6>({state.count} Reviews)</h6>
                            </div>
                        </div>
                        <ReviewFetch />
                    </div>
                    <CreateRating />
                </div>
                lol
            </section>
        </>
    );
}
export function LoadingSpinner(heading = true) {
    return (
        <div className="productdetail__loader">
            {heading == true && <h1>Loading...</h1>}{" "}
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
export default ProductPage;
