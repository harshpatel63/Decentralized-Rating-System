import React, { useEffect } from "react";
import "./css/ProductPage.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ReviewFetch from "./ReviewFetch";
import CreateRating from "./CreateRating";

function ProductPage() {
    let { id } = useParams();
    let [reviewFetched, setreviewFetched] = useState(false);
    let [currenthospital, setcurrhospital] = useState({
        name: "",
        place: "",
        state: "",
        specialization: "",
        imageHash: "",
        points: "",
        counts: "",
        reviewList: "",
    });

    /* ------------------------------- Just blockchain things ------------------------------- */
    useEffect(() => {
        setTimeout(() => {
            halwa();
        }, 2000);
    }, []);
    async function halwa() {
        const count = await window.ratingContract.methods
            .getHospital(id)
            .call();
        let name = count[0];
        let place = count[1];
        let state = count[2];
        let specialization = count[3];
        // let imageHash = count[4];
        let imageHash = "https://picsum.photos/200/200";
        let points = count[5];
        let counts = count[6];
        let reviewList = count[7];
        let hospital_id = count[8];
        setcurrhospital({
            //data
            name,
            place,
            state,
            specialization,
            imageHash,

            // for reviews
            points,
            counts,
            reviewList,
            id: hospital_id,
        });
        setreviewFetched(true);
        console.log(count);
    }
    /*---------------------------------------------------------------------------------------*/

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
                        <img src={currenthospital.imageHash} alt="" />
                    </div>
                    <div className="productdetail__product-detail-area__container__products-text">
                        <div className="productdetail__product-detail-area__container__products-text__text">
                            <h2>
                                {currenthospital.name}, {currenthospital.place},{" "}
                                {currenthospital.state}
                            </h2>
                            <h3>
                                Specialization: {currenthospital.specialization}
                            </h3>
                        </div>
                        <div className="productdetail__product-detail-area__container__products-text__buy-btn">
                            <button className="btn btn-warning buy-button">
                                <i class="fa-solid fa-eye"></i> See Reviews
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
                                        ? currenthospital.counts == 0
                                            ? 0
                                            : (
                                                  currenthospital.points /
                                                  currenthospital.counts
                                              ).toFixed(2)
                                        : LoadingSpinner(false)}
                                </h4>
                                <h6>({currenthospital.counts} Reviews)</h6>
                            </div>
                        </div>
                        <ReviewFetch reviewList={currenthospital.reviewList} />
                    </div>
                    <CreateRating />
                </div>
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
