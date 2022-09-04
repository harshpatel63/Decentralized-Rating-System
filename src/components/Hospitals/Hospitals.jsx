import React, { useEffect } from "react";
import "./css/hospitals.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoadingSpinner } from "./HospitalPage";

function Hospitals() {
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
        <div className="hospitals-wrapper">
            <section className="hospitals">
                <h1 className="hospitals__main-title">
                    <b style={{ color: "red" }}>
                        <i class="fa-solid fa-laptop-medical"></i> Hospitals{" "}
                        <i class="fa-solid fa-laptop-medical"></i>
                    </b>
                </h1>
                <div className="hospitals__hospitals-container">
                    {hospitals.length === 0
                        ? LoadingSpinner()
                        : hospitals.map((eachHospital) => {
                              console.log(eachHospital);
                              return (
                                  <Link
                                      key={eachHospital.PID}
                                      to={"/hospital/" + eachHospital.id}
                                  >
                                      <div className="hospitals__hospitals-container__card card">
                                          <img
                                              src={eachHospital.imageHash}
                                              className="card-img-top"
                                              alt={eachHospital.Name}
                                          />
                                          <div className="hospitals__hospitals-container__card__card-body card-body">
                                              <h5>{eachHospital.Name}</h5>
                                              <h6>
                                                  {eachHospital.name},{" "}
                                                  {eachHospital.place},{" "}
                                                  {eachHospital.state}
                                              </h6>
                                              <p className="hospitals__hospitals-container__card__card-text card-text">
                                                  {eachHospital.Details}
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

export default Hospitals;
