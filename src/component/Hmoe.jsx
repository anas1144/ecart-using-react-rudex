import React from "react";
import Products from "./Products";


const Home = () => {
    return (
        <>
            <div>
                <div className="card bg-dark text-white border-0">
                <div className="card-img-overlay display-flex flex-column justify-content-start">
                        <div className="container  ">
                            <h5 className="card-title display-3 fw-bolder mb-0">Card title</h5>
                            <p className="card-text fs-2">Supporting text  natural </p>

                        </div>
                    </div>
                    <img src="bg1.jpg" class="card-img" alt="Bockground" height="550px" />

                    

                </div>
            </div>
        <Products />
        </>
    )

}
export default Home;