import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function RegistrationStatus() {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  return (
    <>
      <div class="col-md-12 font-weight-bold text-center h1">
        Create an Account!
      </div>
      <div class="col-md-12 text-center">( As a Job Sheeker )</div>
      <div class="col-md-12 text-center">
        It only takes a couple of minutes to get started!
      </div>
      <div class="col-md-12 text-center">
        <span class="px-3 py-1 backcolor">It's free</span>
      </div>
      <div class="col-md-12 mt-3 text-center d-flex align-items-center justify-content-center">
        <b className="midil backcolor px-3 py-1">Please Verify yourself</b>
      </div>
      <div class="container">
        <form>
          <div class="form-row d-flex align-items-center justify-content-center">
            <div class="col-md-8 mb-3">
              <label for="text">Looking For Job</label>
              <select class="form-control form-control-lg">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div class="col-md-8 mb-3">
              <label for="text">Notice Period</label>
              <select class="form-control form-control-lg">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div class="col-md-8 mb-3">
              <label for="text">Immediate Joiner</label>
              <select class="form-control form-control-lg">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="col-md-8">
              <i
                className="feather-sunrise"
                style={{ color: "#fff700", border: "2px solid pink" }}
              ></i>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center mt-5">
            <button class="btn btn-pink mb-5" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
