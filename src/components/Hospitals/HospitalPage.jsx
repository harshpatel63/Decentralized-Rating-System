import React, { useEffect } from "react";
import "./css/HospitalPage.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ReviewFetch from "./ReviewFetch";
import CreateRating from "./CreateRating";

function HospitalPage() {
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
        let imageHash = "https://ipfs.io/ipfs/" + count[4];
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
                <div className="hospitaldetail__back-button">
                    <i className="fa-solid fa-angles-left"></i>
                </div>
            </Link>
            <section className="hospitaldetail__hospital-detail-area">
                <div className="hospitaldetail__hospital-detail-area__container">
                    <div className="hospitaldetail__hospital-detail-area__container__image">
                        <img src={currenthospital.imageHash} alt="" />
                    </div>
                    <div className="hospitaldetail__hospital-detail-area__container__hospitals-text">
                        <div className="hospitaldetail__hospital-detail-area__container__hospitals-text__text">
                            <h2>
                                {currenthospital.name}, {currenthospital.place},{" "}
                                {currenthospital.state}
                            </h2>
                            <h3>
                                Specialization: {currenthospital.specialization}
                            </h3>
                        </div>
                        <div className="hospitaldetail__hospital-detail-area__container__hospitals-text__buy-btn">
                            <a
                                className="btn btn-warning buy-button"
                                href="#review-area"
                            >
                                <i class="fa-solid fa-eye"></i> See Reviews
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hospitaldetail__hospital-review-area">
                <div className="hospitaldetail__hospital-review-area__container">
                    <div className="hospitaldetail__hospital-review-area__container__content">
                        <div className="hospitaldetail__hospital-review-area__container__content__reviews__overallreview">
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
                    <CreateRating hospital_id={id} />
                </div>
            </section>
        </>
    );
}
export function LoadingSpinner(heading = true) {
    return (
        <div className="hospitaldetail__loader">
            {heading == true && <h1>Loading &nbsp;&nbsp;&nbsp;&nbsp;</h1>}{" "}
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
export default HospitalPage;
