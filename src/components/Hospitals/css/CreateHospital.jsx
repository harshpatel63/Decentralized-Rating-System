import React, { useState } from "react";

// import { web3Storage, getFilesFromPath } from "web3.storage";

function CreateHospital() {
    let [hospitaldata, sethospitaldata] = useState({
        name: "",
        place: "",
        state: "",
        specialization: "",
    });
    let fields = [
        { name: "Name", placeholder: "your name here" },
        { name: "Place", placeholder: "" },
        { name: "State", placeholder: "" },
        { name: "Specialization", placeholder: "" },
    ];
    return (
        <section
            class="create-hospital"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "left",
            }}
        >
            <h1>Add a new Hospital</h1>
            <br />
            <form
                style={{
                    maxWidth: "780px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {fields.map((each) => (
                    <div
                        key={each.name}
                        class="form-group"
                        style={{ padding: "10px 20px" }}
                    >
                        <label for="exampleFormControlInput1">
                            {each.name}
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder={each.placeholder}
                            onChange={(e) => {
                                console.log(e.target.value);
                                handleInput(e.target.value, each.name);
                            }}
                        />
                    </div>
                ))}
                <div className="file-upload">
                    <label for="exampleFormControlInput1">Upload file</label>
                    <br />
                    <input type="file" id="browse-file" />
                </div>
                <div
                    className="button-wrapper"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px 20px",
                    }}
                >
                    <a className="btn btn-warning buy-button">
                        <i class="fa-solid fa-eye"></i> Create Hospital
                    </a>
                </div>
            </form>
        </section>
    );

    function handleInput(data, type) {
        console.log(type);
        switch (type) {
            case "Name":
                sethospitaldata({ ...hospitaldata, name: data });
                break;
            case "Place":
                sethospitaldata({ ...hospitaldata, place: data });
                break;
            case "State":
                sethospitaldata({ ...hospitaldata, state: data });
                break;
            case "Specialization":
                sethospitaldata({ ...hospitaldata, specialization: data });
                break;
        }
        console.log(hospitaldata);
    }
}

export default CreateHospital;
