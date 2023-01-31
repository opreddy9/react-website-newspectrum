import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function RES() {
  return (
    <Fragment>
      <div className="container fluid p-4">
        <div className="d-flex justify-content-center mt-2">
          <h3>RESPONSES</h3>
        </div>
        <div className="p-2">
          <div className="resop mt-5 p-2 border">
            <h5 className="mt-2">
              <strong>contributor :</strong> Om prakash reddy
            </h5>
            <p className="mt-4">
              <strong>Description</strong>
            </p>
            <p className="mt-1">
              Artificial intelligence is the simulation of human intelligence
              processes by machines, especially computer systems. Specific
              applications of AI include expert systems, natural language
              processing, speech recognition and machine vision.Artificial
              intelligence is the simulation of human intelligence processes by
              machines, especially computer systems. Specific applications of AI
              include expert systems, natural language processing, speech
              recognition and machine vision.
            </p>
            <div className="d-flex justify-content-center mt-2">
              <Link to="/seeresponse">
                <button className="btn btn-primary active">SEE MORE</button>
              </Link>
            </div>
          </div>
          <div className="resop mt-5 p-2 border">
            <h5 className="mt-2">
              <strong>contributor :</strong>Jeff Bezos
            </h5>
            <p className="mt-4">
              <strong>Description</strong>
            </p>
            <p className="mt-1">
              Artificial intelligence is the simulation of human intelligence
              processes by machines, especially computer systems. Specific
              applications of AI include expert systems, natural language
              processing, speech recognition and machine vision.Artificial
              intelligence is the simulation of human intelligence processes by
              machines, especially computer systems. Specific applications of AI
              include expert systems, natural language processing, speech
              recognition and machine vision.
            </p>
            <div className="d-flex justify-content-center mt-2">
              <Link to="/seeresponse">
                <button className="btn btn-primary active">SEE MORE</button>
              </Link>
            </div>
          </div>
          <div className="resop mt-5 p-2 border">
            <h5 className="mt-2">
              <strong>contributor :</strong>Elon Musk
            </h5>
            <p className="mt-4">
              <strong>Description</strong>
            </p>
            <p className="mt-1">
              Artificial intelligence is the simulation of human intelligence
              processes by machines, especially computer systems. Specific
              applications of AI include expert systems, natural language
              processing, speech recognition and machine vision.Artificial
              intelligence is the simulation of human intelligence processes by
              machines, especially computer systems. Specific applications of AI
              include expert systems, natural language processing, speech
              recognition and machine vision.
            </p>
            <div className="d-flex justify-content-center mt-2">
              <Link href="/seeresponse">
                <button className="btn btn-primary active">SEE MORE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default RES;
