import React, { Fragment } from "react";
import Nav2 from "./Nav2";
import { Link } from "react-router-dom";
function ED() {
  return (
    <Fragment>
      <Nav2 />
      <div className="container-fluid EDmain">
        <h3 className="text-center">
          <small className="text-muted">MY</small>
          PROBLEMS
        </h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-between p-4">
              <div className="mb-5">
                <h3 className="mt-3">PROBLEM STATEMENT 1</h3>
                <p className="mt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam molestias fugit esse libero nam mollitia! Maiores porro
                  dolorem beatae sit. Quis, dolore consequatur repellendus
                  ducimus illum ratione delectus eveniet numquam......
                </p>
                {/* <a href="respones.html">
                  <button className="btn btn-primary active mt-4">
                    VIEW RESPONSES
                  </button>
                </a> */}
                <Link to="/responses">
                  <button className="btn btn-primary active mt-4">
                    VIEW RESPONSES
                  </button>
                </Link>
              </div>
              <div className="my-x op1">
                <h3 className="mt-3">PROBLEM STATEMENT 2</h3>
                <p className="mt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam molestias fugit esse libero nam mollitia! Maiores porro
                  dolorem beatae sit. Quis, dolore consequatur repellendus
                  ducimus illum ratione delectus eveniet numquam......
                </p>
                <Link to="/respones">
                  <button className="btn btn-primary active mt-4">
                    VIEW RESPONSES
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-sm-block op">
            <div className="img-fluid d-flex justify-content-end">
              <img
                src="assets/Screenshot (54).png"
                alt="PROBLEM"
                className="Edimg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid EDmain">
        <div className="row">
          <div className="col-lg-6 d-none d-sm-block op">
            <div className="img-fluid d-flex justify-content-end">
              <img
                src="assets/Screenshot (56).png"
                alt="PROBLEM"
                className="Edimg"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-between p-4">
              <div className="mb-5">
                <h3 className="mt-3">
                  PROBLEM STATEMENT 3
                  <span className="badge badge-success">Approved</span>
                </h3>
                <p className="mt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam molestias fugit esse libero nam mollitia! Maiores porro
                  dolorem beatae sit. Quis, dolore consequatur repellendus
                  ducimus illum ratione delectus eveniet numquam......
                </p>
                <button className="btn btn-primary disabled mt-4">
                  VIEW RESPONSES
                </button>
              </div>
              <div className="my-x op1">
                <h3 className="mt-3">PROBLEM STATEMENT 4</h3>
                <p className="mt-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam molestias fugit esse libero nam mollitia! Maiores porro
                  dolorem beatae sit. Quis, dolore consequatur repellendus
                  ducimus illum ratione delectus eveniet numquam......
                </p>
                <Link to="/responses">
                  <button className="btn btn-primary active mt-4">
                    VIEW RESPONSES
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ED;
