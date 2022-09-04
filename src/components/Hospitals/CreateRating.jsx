import React from "react";
import { useState } from "react";

let SUBMIT_STATUS = {
    STOPPED: 0,
    RUNNING: 1,
    FINISHED: 2,
};

function CreateReview(props) {
    let [stars, setStars] = useState(0);
    let [reviewStatus, setreviewStatus] = useState(SUBMIT_STATUS.STOPPED);
    let [createReview, setCreateReview] = useState({
        name: "",
        review_text: "",
    });
    return (
        <div className="hospitaldetail__hospital-review-area__container__content__create-review-box">
            <h4>Add a Review</h4>
            <span>
                <h5>
                    Your Rating:
                    {createStars()}
                </h5>
            </span>
            <form action="#/" className="form-contact form-review mt-3">
                <div className="form-group">
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required=""
                        onChange={(e) => handleInput(e.target.value, "name")}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control different-control w-100"
                        name="textarea"
                        id="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Enter Message"
                        onChange={(e) =>
                            handleInput(e.target.value, "review-text")
                        }
                    ></textarea>
                </div>
                {
                    <div className="form-group text-center text-md-right mt-3">
                        <button
                            className={
                                "btn btn-primary " +
                                (reviewStatus === SUBMIT_STATUS.FINISHED ||
                                reviewStatus === SUBMIT_STATUS.RUNNING
                                    ? "disabled"
                                    : "")
                            }
                            onClick={(e) => handleSubmit(e)}
                        >
                            {reviewStatus == SUBMIT_STATUS.STOPPED && (
                                <>
                                    <i className="fa-solid fa-pen-nib"></i>
                                    <span> | Write my Review</span>
                                </>
                            )}

                            {reviewStatus == SUBMIT_STATUS.RUNNING && (
                                <>
                                    <span
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        Submitting&nbsp;&nbsp;&nbsp;
                                        <div
                                            className="spinner-border"
                                            role="status"
                                            style={{
                                                height: "15px",
                                                width: "15px",
                                                fontSize: "10px",
                                            }}
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    </span>
                                </>
                            )}

                            {reviewStatus == SUBMIT_STATUS.FINISHED && (
                                <>
                                    <span>Review Submitted</span>
                                </>
                            )}
                        </button>
                    </div>
                }
            </form>
        </div>
    );
    function createStars() {
        let s = [1, 2, 3, 4, 5];
        return s.map((each) => (
            <i
                key={each}
                className={
                    each > stars
                        ? "fa-regular fa-star yellow"
                        : "fa-solid fa-star yellow"
                }
                style={{ cursor: "pointer" }}
                onClick={() => {
                    setStars(each);
                }}
            ></i>
        ));
    }
    function handleInput(value, type) {
        switch (type) {
            case "name":
                setCreateReview({
                    ...createReview,
                    name: value,
                });
                break;
            case "review-text":
                setCreateReview({
                    ...createReview,
                    review_text: value,
                });
                break;
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (checkForm() == false) return;

        setreviewStatus(SUBMIT_STATUS.RUNNING);

        try {
            await window.ratingContract.methods
                .createRating(
                    props.hospital_id,
                    createReview.name,
                    stars,
                    createReview.review_text
                )
                .send({
                    from: window.MetaMaskAccount,
                });
        } catch (e) {
            alert(e.message + " Please Try again..");
            setreviewStatus(SUBMIT_STATUS.STOPPED);
            return;
        }
        setreviewStatus(SUBMIT_STATUS.FINISHED);
    }
    function checkForm() {
        if (createReview.name === "") {
            alert("Please Enter your name");
            return false;
        } else if (createReview.review_text === "") {
            alert("No review entered");
            return false;
        } else if (stars === 0) {
            alert("Select Stars");
            return false;
        }
        return true;
    }
}

export default CreateReview;
