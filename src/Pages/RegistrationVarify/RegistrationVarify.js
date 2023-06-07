import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function RegistrationVarify() {
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
              <p className="d-flex h4 my-5 justify-content-center">OTP</p>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Your 6 Digit OTP"
                required
              />
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
