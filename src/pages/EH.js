import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav2 from "./Nav2";
function EH() {
  return (
    <Fragment>
      <div>
        <Nav2 />
      </div>
      <div className="container-fluid EHmain px-5">
        <h1 className="text-center">My Projects</h1>

        <div className="d-flex flex-column">
          <div className="row proj-tab mt-5">
            <div className="col-sm-6">
              <div className="py-3 px-4">
                <h2 className="h2 text-center mt-2">
                  Robotic arm Controlled by AI
                </h2>
                <p className="mt-4 des">Description </p>
                <p className="prj-des">
                  The project is about a robotic arm controlled by AI.Which will
                  reduce the human effort to operate the robotic arm and saves
                  lot of time and robotic arm can perform many things in
                  industry save money....
                </p>
                <p className="des">Problem Statement</p>
                <p className="prb-sta">
                  Voice Commands are not working properly.And motion detection
                  is not working properly.
                </p>
                <p>
                  <span className="des">No.Of.Responses: </span>
                  <span style={{ "font-size": "18px" }}>25</span>
                </p>
                <div className="d-flex justify-content-between my-4">
                  <Link to="/responses" target="_blank">
                    <button className="btn btn-success">View Responses</button>
                  </Link>
                  <Link to="apple.com" target="_blank">
                    <button className="btn btn-primary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6"
              style={{
                "text-align": "right",
                "padding-right": "0",
                "padding-left": "0",
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1022237064/photo/robot-arm.jpg?s=612x612&w=0&k=20&c=q9mWdQQvjs3hQ7mkRJWCnq9bxFgdSA3uP9pucr98DWk="
                alt="drone-img"
                className="img-responsive EHimg"
              />
            </div>
          </div>
          <div className="row proj-tab mt-5">
            <div className="col-sm-6">
              <div className="px-3 py-4">
                <h2 className="h2 text-center mt-2">
                  Block chain App for farmers
                </h2>
                <p className="mt-3 des">Description</p>
                <p className="prj-des">
                  Block chain have capabilites when integrated with AI can do
                  wonders.Which will reduce the human effort to operate the
                  drones and saves lot of time and money..Gives farmers about
                  rain predictions
                </p>
                <p className="des">Problem Statement</p>
                <p className="prb-sta">
                  Voice Commands are not working properly.And motion detection
                  is not working properly.
                </p>
                <p>
                  <span className="des">No.Of.Responses: </span>
                  <span style={{ "font-size": "18px" }}>69</span>
                </p>
                <div className="d-flex justify-content-between my-4">
                  <Link to="/responses" target="_blank">
                    <button className="btn btn-success">View Responses</button>
                  </Link>
                  <Link to="apple.com" target="_blank">
                    <button className="btn btn-primary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                "text-align": "right",
                "padding-right": "0",
                "padding-left": "0",
              }}
              className="col-sm-6"
            >
              <img
                src="https://media.istockphoto.com/id/1330214199/photo/indian-farmer-busy-using-mobile-phone-while-sitting-in-between-the-crop-seedlings-inside.jpg?s=612x612&w=0&k=20&c=PmGOwjZlQdOhETmjVwBoT4thL3mJn3VfEm5q9doj4aU="
                alt="drone-img"
                className="image-responsive EHimg"
              />
            </div>
          </div>
          <div className="row proj-tab mt-5">
            <div className="col-sm-6">
              <div className="px-3 py-4">
                <h2 className="h2 text-center mt-2">
                  Cancer Detection using ML
                </h2>
                <p className="mt-3 des">Description</p>
                <p className="prj-des">
                  Machine learning algorithms have capabilites to predict cancer
                  by absoring diffeerent parameters The project is about a drone
                  controlled by AI.Which will reduce the human effort to operate
                  the drones and saves lot of time and money....
                </p>
                <p className="des">Problem Statement</p>
                <p className="prb-sta">
                  Voice Commands are not working properly.And motion detection
                  is not working properly.
                </p>

                <p>
                  <span className="des">No.Of.Responses: </span>
                  <span style={{ "font-size": "18px" }}>25</span>
                </p>
                <div className="d-flex justify-content-between my-4">
                  <a href="respones.html" target="_blank">
                    <button className="btn btn-success">View Responses</button>
                  </a>
                  <a href="apple.com" target="_blank">
                    <button className="btn btn-primary">View Project</button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                "text-align": "right",
                "padding-left": "0",
                "padding-right": "0",
              }}
              className="col-sm-6"
            >
              <img
                src="https://media.istockphoto.com/id/979576420/photo/diagnostician-combining-ai-app-and-diagnostics.jpg?s=612x612&w=0&k=20&c=jNWbIPBUQMuHAf5grCEthrh_16Svw3WTWIvtOhWrBpM="
                alt="drone-img"
                className="img-responsive EHimg"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default EH;
