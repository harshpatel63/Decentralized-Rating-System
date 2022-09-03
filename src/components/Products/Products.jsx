import React, { useEffect } from "react";
import "./css/products.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoadingSpinner } from "./ProductPage";

function Products() {
    let [hospitals, sethospitals] = useState([]);

    /* ------------------------------- Just blockchain things ------------------------------- */
    useEffect(() => {
        setTimeout(() => {
            halwa();
        }, 2000);
    }, []);
    async function halwa() {
        const count = await window.ratingContract.methods
            .getHospitalList()
            .call();
        let hospitallist = [];
        for (let i = 1; i < count.length; i++) {
            console.log("iiii===>", i);
            let name = count[i][0];
            let place = count[i][1];
            let state = count[i][2];
            let specialization = count[i][3];
            // let imageHash = count[i][4];
            let imageHash = "https://picsum.photos/200/200";
            let points = count[i][5];
            let counts = count[i][6];
            let reviewList = count[i][7];
            let hospital_id = count[i][8];
            hospitallist.push({
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
        }
        sethospitals(hospitallist);
        console.log(hospitallist);
    }
    /*---------------------------------------------------------------------------------------*/

    return (
        <div className="products-wrapper">
            <section className="products">
                <h1 className="products__main-title">
                    <b>Products 🛍️ </b>
                </h1>
                <div className="products__products-container">
                    {hospitals.length === 0
                        ? LoadingSpinner()
                        : hospitals.map((eachproduct) => {
                              console.log(eachproduct);
                              return (
                                  <Link
                                      key={eachproduct.PID}
                                      to={"/product/" + eachproduct.id}
                                  >
                                      <div className="products__products-container__card card">
                                          <img
                                              src={eachproduct.imageHash}
                                              className="card-img-top"
                                              alt={eachproduct.Name}
                                          />
                                          <div className="products__products-container__card__card-body card-body">
                                              <h5>{eachproduct.Name}</h5>
                                              <h6>
                                                  {eachproduct.name},{" "}
                                                  {eachproduct.place},{" "}
                                                  {eachproduct.state}
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
        </div>
    );
}

export default Products;
