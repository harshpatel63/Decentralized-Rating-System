import React from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
    if (this.state.currentproduct === undefined)
        return (
            <div className="productdetail__loader">
                <h1>Loading...</h1>{" "}
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
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
                        <img src={this.state.currentproduct.ImageURL} alt="" />
                    </div>
                    <div className="productdetail__product-detail-area__container__products-text">
                        <div className="productdetail__product-detail-area__container__products-text__text">
                            <h3>{this.state.currentproduct.Name}</h3>
                            <h2>{this.state.currentproduct.Price} MATIC</h2>
                            <p>{this.state.currentproduct.Details}</p>
                        </div>
                        <div className="productdetail__product-detail-area__container__products-text__buy-btn">
                            <button
                                className="btn btn-warning buy-button"
                                onClick={() =>
                                    this.handleBuy(
                                        this.state.currentproduct.Price
                                    )
                                }
                            >
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
                        <div className="productdetail__product-review-area__container__content__reviews">
                            <div className="productdetail__product-review-area__container__content__reviews__overallreview">
                                <div className="overallreview-container">
                                    <h5>Overall</h5>
                                    <h4>
                                        {this.state.isreviewFetched === true
                                            ? this.state.count == 0
                                                ? 0
                                                : (
                                                      this.state.points /
                                                      this.state.count
                                                  ).toFixed(2)
                                            : this.setLoading(false)}
                                    </h4>
                                    <h6>({this.state.count} Reviews)</h6>
                                </div>
                            </div>
                            <div className="productdetail__product-review-area__container__content__reviews__all-reviews">
                                {this.state.isreviewFetched === false
                                    ? this.setLoading()
                                    : this.state.temptestReviewList.map(
                                          (eachreview) => {
                                              return (
                                                  <div
                                                      key={this.state.temptestReviewList.findIndex(
                                                          (x) => x == eachreview
                                                      )}
                                                      className="productdetail__product-review-area__container__content__reviews__all-reviews__review-card"
                                                  >
                                                      <div className="review-card__name_details">
                                                          <div className="review-card__name_details__image">
                                                              <img
                                                                  src={`https://avatars.dicebear.com/api/human/${eachreview.time}.svg`}
                                                              />
                                                          </div>
                                                          <div className="review-card__name_details__name">
                                                              <h2>
                                                                  {
                                                                      eachreview.name
                                                                  }
                                                              </h2>
                                                              <span>
                                                                  {this.setStars(
                                                                      eachreview.star
                                                                  )}
                                                                  <span className="review-card__name_details__name__date">
                                                                      {new Date(
                                                                          parseInt(
                                                                              eachreview.time
                                                                          ) *
                                                                              1000
                                                                      )
                                                                          .toString()
                                                                          .substr(
                                                                              0,
                                                                              16
                                                                          )}
                                                                  </span>
                                                              </span>
                                                          </div>
                                                      </div>
                                                      <div className="review-card__review-text">
                                                          <p>
                                                              {
                                                                  eachreview.review
                                                              }
                                                          </p>
                                                      </div>
                                                  </div>
                                              );
                                          }
                                      )}
                            </div>
                        </div>
                        <div className="productdetail__product-review-area__container__content__create-review-box">
                            <h4>Add a Review</h4>
                            <span>
                                <h5>
                                    Your Rating:
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            if (
                                                parseFloat(e.target.value) > 5
                                            ) {
                                                e.target.value = 5;
                                            }
                                            this.handleInput(
                                                e.target.value,
                                                "stars"
                                            );
                                        }}
                                        style={{ width: "50px" }}
                                    />
                                    {this.setStars(
                                        this.state.createrating.star,
                                        "yellow set-stars"
                                    )}
                                </h5>
                            </span>
                            <form
                                action="#/"
                                className="form-contact form-review mt-3"
                            >
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        required=""
                                        onChange={(e) =>
                                            this.handleInput(
                                                e.target.value,
                                                "name"
                                            )
                                        }
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
                                            this.handleInput(
                                                e.target.value,
                                                "review-text"
                                            )
                                        }
                                    ></textarea>
                                </div>
                                <div className="form-group text-center text-md-right mt-3">
                                    <button
                                        className={
                                            this.state.isreviewWritten
                                                ? "btn btn-primary disabled"
                                                : "btn btn-primary"
                                        }
                                        onClick={(e) =>
                                            this.handleWriteReview(e)
                                        }
                                    >
                                        {this.state.isreviewWritten == true ? (
                                            this.state.reviewWrittenText
                                        ) : (
                                            <>
                                                <i className="fa-solid fa-pen-nib"></i>
                                                <span> | Write my Review</span>{" "}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductsPage;
