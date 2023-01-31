import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav1 from "./Nav1";
function Studentdashboard() {
  return (
    <Fragment>
      <div>
        <Nav1 />
      </div>
      <h3 className="mt-4 ml-4 text-center">
        <small className="text-muted">MY</small>
        IDEAS
      </h3>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="container col-lg-6">
            <div className="container mb-5">
              <h3 className="mt-3">IDEA 1</h3>
              <p className="mt-4 text-center">
                Neural networks, or artificial neural networks (ANNs), are
                comprised of node layers, containing an india is input layer,
                one or more hidden layers, and an output layer. Each node, or
                artificial neuron, connects to another and has an associated
                weight and threshold.
              </p>
              <div className="progress mt-4">
                <div
                  className="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="33"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "33%" }}
                >
                  33%
                </div>
              </div>
              <Link to="/studentdetails">
                <button className="btn btn-info active mt-4">
                  SEE DETAILS
                </button>
              </Link>
            </div>
            <div className="container my-x op1">
              <h3 className="mt-3">IDEA 2</h3>
              <p className="mt-4 text-center">
                Agricultural revolution, or ok ok artificial neural networks
                india , are comprised of node layers, containing an india is
                input layer, one or more hidden layers, and an output layer.
                Each node, or artificial neuron, connects to another and has an
                associated weight and threshold.
              </p>
              <div className="progress mt-5">
                <div
                  className="progress-bar progress-bar-striped active bg-info"
                  role="progressbar"
                  aria-valuenow="77"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "77%" }}
                >
                  77%
                </div>
              </div>
              <Link to="/studentdetails">
                <button className="btn btn-info active mt-4">
                  SEE DETAILS
                </button>
              </Link>
            </div>
          </div>
          <div className="container col-lg-6 d-none d-sm-block">
            <img src="assets/idea.jpg" alt="bulb idea" className="sdop" />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="container col-lg-6 d-none d-sm-block mt-4">
            <img src="assets/idea1new.jpg" alt="idea photo" className="sdop" />
          </div>
          <div className="container col-lg-6">
            <div className="container mb-5">
              <h3 className="mt-3">IDEA 3</h3>
              <p className="mt-4 text-center">
                ROBOTICS the , or ok ok artificial neural networks india , are
                comprised of node layers, containing an india is input layer,
                one or more hidden layers, and an output ok layer.ok Each node,
                or artificial neuron, connects to another and has an associated
                weight and threshold.
              </p>
              <div className="progress mt-4">
                <div
                  className="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="33"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "33%" }}
                >
                  33%
                </div>
              </div>
              <Link to="/studentdetails">
                <button className="btn btn-info active mt-4">
                  SEE DETAILS
                </button>
              </Link>
            </div>
            <div className="container my-x op1">
              <h3 className="mt-3">IDEA 4</h3>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                molestias fugit esse libero nam mollitia! Maiores porro dolorem
                beatae sit. Quis, dolore consequatur repellendus ducimus illum
                ratione delectus eveniet numquam.
              </p>
              <div className="progress mt-5">
                <div
                  className="progress-bar progress-bar-striped active bg-success"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                >
                  Approved
                </div>
              </div>
              <Link to="/studentdetails">
                <button className="btn btn-info active mt-4">
                  SEE DETAILS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Studentdashboard;
