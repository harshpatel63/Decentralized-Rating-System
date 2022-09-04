import React from "react";
import { useState } from "react";
import { LoadingSpinner } from "./HospitalPage";

let temptestReviewList = [
    {
        time: new Date().getTime(),
        name: "Bips",
        star: "3",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        time: new Date().getTime(),
        name: "Abhi",
        star: "4",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];
function ReviewFetch(props) {
    return (
        <div className="hospitaldetail__hospital-review-area__container__content__reviews__all-reviews">
            {props.reviewList &&
                props.reviewList.map((eachreview) => {
                    return (
                        <div
                            key={temptestReviewList.findIndex(
                                (x) => x == eachreview
                            )}
                            id="review-area"
                            className="hospitaldetail__hospital-review-area__container__content__reviews__all-reviews__review-card"
                        >
                            <div className="review-card__name_details">
                                <div className="review-card__name_details__image">
                                    <img
                                        src={`https://avatars.dicebear.com/api/human/${eachreview.time}.svg`}
                                    />
                                </div>
                                <div className="review-card__name_details__name">
                                    <h2>{eachreview.name}</h2>
                                    <span>
                                        {setStars(eachreview.star)}
                                        <span className="review-card__name_details__name__date">
                                            {new Date(
                                                parseInt(eachreview.time) * 1000
                                            )
                                                .toString()
                                                .substr(0, 16)}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="review-card__review-text">
                                <p>{eachreview.review}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export function setStars(rate, extraclass = "yellow") {
    if (rate >= 5) rate = 5;
    let classes = [];
    while (rate > 0.9) {
        rate -= 1;
        classes.push("fa-solid fa-star " + extraclass);
    }
    // if (classes.length < 5 && rate * 10 > 0)
    //   classes.push("fa-solid fa-star-half-stroke " + extraclass);

    while (classes.length < 5) classes.push("fa-regular fa-star " + extraclass);
    let key = 0;
    return classes.map((eachstar) => (
        <i
            key={(key += 1)}
            className={eachstar}
            onClick={() => {
                // Buggy :'|
                // this.setState({
                //   createrating: { ...this.createrating, star: key },
                // });
            }}
        ></i>
    ));
}

export default ReviewFetch;
