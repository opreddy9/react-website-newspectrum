import React, { Fragment } from "react";

function PE() {
  return (
    <Fragment>
      <div className="container-fluid p-4">
        <h1 className="d-flex justify-content-center">Post your Problem</h1>
        <h5 className="mt-3 p-2">Problem TITLE</h5>
        <form className="mt-2">
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
            ></textarea>
          </div>
        </form>
        <h5 className="mt-3 p-2">Add Description</h5>
        <form className="mt-2">
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
          </div>
        </form>
        <div className="d-flex justify-content-around mt-4">
          <form>
            <div className="form-group">
              <label for="exampleFormControlFile1">
                <strong>Upload a file</strong>
              </label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
          </form>
          <form>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                <strong>ADD #TAGS</strong>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="1"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-success active mt-5">
            SUBMIT PROBLEM
          </button>
        </div>
      </div>
    </Fragment>
  );
}
export default PE;
