import React from "react";
import "./css/products.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Products() {
    let [products, setproducts] = useState([
        {
            PID: "1",
            ImageURL: "https://picsum.photos/200/300",
            Name: "Abcd",
            Price: "0.456",
            Details:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    ]);
    return (
        <section className="products">
            <h1 className="products__main-title">
                <b>Products 🛍️ </b>
            </h1>
            <div className="products__products-container">
                {products.map((eachproduct) => {
                    console.log(eachproduct);
                    return (
                        <Link
                            key={eachproduct.PID}
                            to={"/product/" + eachproduct.PID}
                        >
                            <div className="products__products-container__card card">
                                <img
                                    src={eachproduct.ImageURL}
                                    className="card-img-top"
                                    alt={eachproduct.Name}
                                />
                                <div className="products__products-container__card__card-body card-body">
                                    <h5>{eachproduct.Name}</h5>
                                    <h6>
                                        <b>Price:</b> {eachproduct.Price} MATIC{" "}
                                    </h6>
                                    <p className="products__products-container__card__card-text card-text">
                                        {eachproduct.Details}
                                    </p>
                                    <button className="btn btn-primary">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default Products;
