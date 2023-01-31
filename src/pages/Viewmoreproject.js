import React, { Fragment } from "react";
import Nav1 from "./Nav1";
import { Link } from "react-router-dom";
function Viewmoreproject() {
  return (
    <Fragment>
      <div>
        <Nav1 />
      </div>
      <div className="container">
        <h2 className="mt-3 text-center">
          Facing problem when trying to map an area via UAV aerial imagery and
          aid a UGV in navigating a complex static environment.
        </h2>
        <div className="row mt-4">
          <div className="col-8 p-2">
            <p className="p-3">
              <strong>DESCRIPTION</strong>
            </p>
            <p className="p-3 mt-3 viewtop-buffer">
              Drone surveillance is the use of unmanned aerial vehicles (UAV) to
              capture of still images and video to gather information about
              specific targets, which might be individuals, groups or
              environments. Drone surveillance enables surreptitiously gathering
              information about a target as captured from a distance or
              altitude. Drone surveillance enables the surreptitious gathering
              of information about a target as captured from a distance or
              altitude.
            </p>
            <strong>
              <p className="p-3 viewop">problem we are facing</p>
            </strong>
            <div className="mt-2 viewop1">
              <ol>
                <li className="viewopli">
                  <strong>
                    Motion detection is not accurate.Error in knowing Current
                    observing object
                  </strong>
                </li>
                <li className="viewopli">
                  <strong>
                    Camera switching has a glitch while switching between day
                    and night mode
                  </strong>
                </li>
                <li className="viewopli">
                  <strong>
                    UAV survelliance in extreme for safety has a glitch
                  </strong>
                </li>
                <li className="viewopli">
                  <strong>
                    propeller wing speed when greater than the wind it getting
                    fixed to the point not respoding to commands
                  </strong>
                </li>
              </ol>
            </div>
          </div>
          <div className="col-4 p-2 opcol d-none d-sm-block">
            <h3 className="mt-4 border text-center">VIEW MEDIA</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/watch?v=7s5TYFPP6Uw&t=2s"
                allowfullscreen
              ></iframe>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <img
                src="https://content.instructables.com/F05/Z53J/JJJ7DN03/F05Z53JJJJ7DN03.jpg?auto=webp"
                alt="drone in=mage nothing special"
                className="img-fluid viewimg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h3 className="mb-4">Upload your idea</h3>

        <form>
          <div className="form-group">
            <div className="text-right">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-between container">
        <div className="mt-4">
          <form>
            <div className="form-group">
              <label for="exampleFormControlFile1">Upload a file</label>
              <input
                type="file"
                className="form-control-file"
                href="#"
                id="exampleFormControlFile1"
              />
            </div>
          </form>
        </div>
        <div className="mt-4 ">
          <button className="btn btn-success">Submit Idea</button>
        </div>
      </div>
      <h5 className="mb-4 mt-5 container">Comment</h5>
      <form>
        <div className="form-group container">
          <div className="text-right">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
          </div>
        </div>
      </form>
      <div className="d-flex mt-3 justify-content-end container">
        <button className="btn btn-primary">Post Comment</button>
      </div>
    </Fragment>
  );
}
export default Viewmoreproject;
