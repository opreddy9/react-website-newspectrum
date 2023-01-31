import React, { Fragment } from "react";
import Nav1 from "./Nav1";
import { Link } from "react-router-dom";
function Studentdhome() {
  return (
    <Fragment>
      <div>
        <Nav1 />
      </div>
      <p className="h3 text-center my-3">Top Projects</p>
      <div className="container px-1 mt-5">
        <div className="row">
          <div className="col-6">
            <div className="card rounded">
              <img
                className="card-img-top"
                src="https://media.istockphoto.com/id/1204583853/photo/ai-artificial-intelligence-concept-circuit-board.jpg?s=612x612&w=0&k=20&c=kXeajQlZMz_maVt8NIC5RNM8bxXy_tjfJRfcYhZw0Ss="
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  <strong>Project Statement</strong>
                </h5>
                <p className="card-text text-center">
                  AI can solve many problems by intelligently searching through
                  many possible solutions. Reasoning can be reduced to
                  performing a search. For example, logical proof can be viewed
                  as searching for a path that leads from premises to
                  conclusions.
                </p>
                <div className="d-flex flex-row">
                  <div className="p-1">
                    <p className="card-text">
                      <strong>Due date : </strong>12 Jan 2022
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <strong>Contributor : </strong>Elon Musk
                      </small>
                    </p>
                  </div>
                  <div className="ml-auto my-auto">
                    <Link to="/viewmore" className="btn btn-dark" role="button">
                      VIEW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card rounded">
              <img
                className="card-img-top"
                alt=""
                src="https://media.istockphoto.com/id/1352825159/photo/aerial-car-factory-3d-concept-automated-robot-arm-assembly-line-manufacturing-advanced-high.jpg?s=612x612&w=0&k=20&c=_5S7WhJ1p0rbNDYLeB11iRxI9EZ8FArBSpYr7sB2eKI="
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  <strong>Project Statement</strong>
                </h5>
                <p className="card-text text-center">
                  The outstanding contribution of the automotive industry to
                  technological advance was the introduction of full-scale mass
                  production, a process combining precision, standardization
                  synchrization .Mass production was an American innovation.
                </p>
                <div className="d-flex flex-row">
                  <div className="p-1">
                    <p className="card-text">
                      <strong>Due date : </strong>12 Jan 2022
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <strong>Contributor : </strong>Elon Musk
                      </small>
                    </p>
                  </div>
                  <div className="ml-auto my-auto">
                    <Link to="/viewmore" className="btn btn-dark" role="button">
                      VIEW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-1 mt-5">
          <div className="row">
            <div className="col-6">
              <div className="card rounded">
                <img
                  className="card-img-top"
                  alt=""
                  src="https://media.istockphoto.com/id/1220591821/photo/robot-and-human-hand-with-gears.jpg?s=612x612&w=0&k=20&c=pq02J6tiAVLKD6jjkMI1AJgIAJqcZV2Y2ZCEeINYvdU="
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <strong>Project Statement</strong>
                  </h5>
                  <p className="card-text text-center">
                    ROBO can solve many problems by intelligently searching
                    through many possible solutions. Reasoning can be reduced to
                    performing a search. For example, logical proof can be
                    viewed as searching for a path that leads from premises to
                    conclusions.
                  </p>
                  <div className="d-flex flex-row">
                    <div className="p-1">
                      <p className="card-text">
                        <strong>Due date : </strong>12 Jan 2022
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <strong>Contributor : </strong>Elon Musk
                        </small>
                      </p>
                    </div>
                    <div className="ml-auto my-auto">
                      <Link
                        to="/viewmore"
                        className="btn btn-dark"
                        role="button"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card rounded">
                <img
                  className="card-img-top"
                  alt=""
                  src="https://media.istockphoto.com/id/1254825733/photo/abstract-data-background.jpg?s=612x612&w=0&k=20&c=8ym1X5sCMTshCSENRW_U8J-Yh8p_y90O-QJDb82lkwM="
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <strong>Project Statement</strong>
                  </h5>
                  <p className="card-text text-center">
                    BLOCK CHAIN can solve many problems by intelligently
                    searching through many possible solutions. Reasoning can be
                    reduced to performing a search. For example, logical proof
                    can be viewed as searching for a path that leads from
                    premises to conclusions.
                  </p>
                  <div className="d-flex flex-row">
                    <div className="p-1">
                      <p className="card-text">
                        <strong>Due date : </strong>12 Jan 2022
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <strong>Contributor : </strong>Elon Musk
                        </small>
                      </p>
                    </div>
                    <div className="ml-auto my-auto">
                      <Link
                        to="/viewmore"
                        className="btn btn-dark"
                        role="button"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-1 mt-5">
          <div className="row">
            <div className="col-6">
              <div className="card rounded">
                <img
                  className="card-img-top"
                  alt=""
                  src="https://media.istockphoto.com/id/1147229526/vector/man-wearing-virtual-reality-headset-abstract-vr-world-with-neon-lines.jpg?s=612x612&w=0&k=20&c=rbVxQO-qtiQ324bNSZjdBe4VfwGdtU9gzGvXUQXT-xs="
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <strong>Project Statement</strong>
                  </h5>
                  <p className="card-text text-center">
                    AR can solve many problems by intelligently searching
                    through many possible solutions. Reasoning can be reduced to
                    performing a search. For example, logical proof can be
                    viewed as searching for a path that leads from premises to
                    conclusions.
                  </p>
                  <div className="d-flex flex-row">
                    <div className="p-1">
                      <p className="card-text">
                        <strong>Due date : </strong>12 Jan 2022
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <strong>Contributor : </strong>Elon Musk
                        </small>
                      </p>
                    </div>
                    <div className="ml-auto my-auto">
                      <Link
                        to="/viewmore"
                        className="btn btn-dark"
                        role="button"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card rounded">
                <img
                  className="card-img-top"
                  alt=""
                  src="https://media.istockphoto.com/id/169999232/photo/biotechnology.jpg?s=612x612&w=0&k=20&c=UuyWeb0PXiMK5CNwwQpEfesS19DxzDsuqLDVm-QTxeM="
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <strong>Project Statement</strong>
                  </h5>
                  <p className="card-text text-center">
                    BIO TECHNOLOGY contribution of the automotive industry to
                    technological advance was the introduction of full-scale
                    mass production, a process combining precision,
                    standardization synchrization .Mass production was an
                    American innovation.
                  </p>
                  <div className="d-flex flex-row">
                    <div className="p-1">
                      <p className="card-text">
                        <strong>Due date : </strong>12 Jan 2022
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <strong>Contributor : </strong>Elon Musk
                        </small>
                      </p>
                    </div>
                    <div className="ml-auto my-auto">
                      <Link
                        to="/viewmore"
                        className="btn btn-dark"
                        role="button"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Studentdhome;
