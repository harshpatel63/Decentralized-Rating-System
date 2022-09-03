import React from "react";
import { useState } from "react";

function CreateRating() {
    let [stars, setStars] = useState(0);
    let [isreviewWritten, setisreviewWritten] = useState(false);
    let [reviewWrittenText, setreviewWrittenText] = useState("");
    let [createRating, setcreateRating] = useState({
        name: "",
        review_text: "",
    });
    return (
        <div className="productdetail__product-review-area__container__content__create-review-box">
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
                {!isreviewWritten ? (
                    <div className="form-group text-center text-md-right mt-3">
                        <button
                            className={"btn btn-primary"}
                            onClick={(e) => handleWriteReview(e)}
                        >
                            <>
                                <i className="fa-solid fa-pen-nib"></i>
                                <span> | Write my Review</span>{" "}
                            </>
                        </button>
                    </div>
                ) : (
                    "Review Posted"
                )}
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
                setcreateRating({
                    ...createRating,
                    name: value,
                });
                break;
            case "review-text":
                setcreateRating({
                    ...createRating,
                    review_text: value,
                });
                break;
        }
    }

    async function handleWriteReview(e) {
        e.preventDefault();
        try {
            await this.state.ratingContract.methods
                .createRating(
                    this.state.productid,
                    this.state.createrating.name,
                    this.state.createrating.star,
                    this.state.createrating.review_text
                )
                .send({
                    from: this.state.account,
                });
        } catch (e) {
            this.setState({ reviewWrittenText: "Some Error, Try Again" });
        }
        this.setState({ isreviewWritten: true });
    }
}

export default CreateRating;
