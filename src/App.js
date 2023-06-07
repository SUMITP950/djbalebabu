import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import Timeline from "./Component/Timeline";
import Home from "./Pages/Home/home";
import Jobs from "./Pages/jobs/jobs";
import Profile from "./Pages/profile/profile";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Message from "./Pages/Message/Message";
import Notifications from "./Pages/Notifications/Notifications";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Connection from "./Pages/connection/connection";
import CompanyProfile from "./Pages/CompanyProfile/CompanyProfile";
import JobProfile from "./Pages/JobProfile/JobProfile";
import SigninAsHr from "./Pages/SigninAsHr/SigninAsHr";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SideBar from "./Component/SideBar";
import RegistrationBasic from "./Pages/RegistrationBasic/RegistrationBasic";
import RegistrationVarify from "./Pages/RegistrationVarify/RegistrationVarify";
import RegistrationCreate from "./Pages/RegistrationCreate/RegistrationCreate";
import RegistrationStatus from "./Pages/RegistrationStatus/RegistrationStatus";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav /> <Home />
              </>
            }
          />
          <Route
            path="/jobs"
            element={
              <>
                <Nav /> <Jobs />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Nav />
                <Profile />
              </>
            }
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route
            path="/Message"
            element={
              <>
                <Nav />
                <Message />
              </>
            }
          />
          <Route
            path="/Notifications"
            element={
              <>
                <Nav />
                <Notifications />
              </>
            }
          />
          <Route
            path="/EditProfile"
            element={
              <>
                <Nav />
                <EditProfile />
              </>
            }
          />
          <Route
            path="/Connection"
            element={
              <>
                <Nav />
                <Connection />
              </>
            }
          />
          <Route
            path="/CompanyProfile"
            element={
              <>
                <Nav />
                <CompanyProfile />
              </>
            }
          />
          <Route
            path="/JobProfile"
            element={
              <>
                <Nav />
                <JobProfile />
              </>
            }
          />
          <Route
            path="/SigninAsHr"
            element={
              <>
                <SigninAsHr />
              </>
            }
          />
          <Route
            path="/LandingPage"
            element={
              <>
                <LandingPage />
              </>
            }
          />

          <Route
            path="/RegistrationBasic"
            element={
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <SideBar />
                    </div>
                    <div className="col-md-8">
                      <RegistrationBasic />
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/RegistrationVarify"
            element={
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 ">
                      <SideBar />
                    </div>
                    <div className="col-md-8">
                      <RegistrationVarify />
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/RegistrationCreate"
            element={
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 ">
                      <SideBar />
                    </div>
                    <div className="col-md-8">
                      <RegistrationCreate />
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/RegistrationStatus"
            element={
              <>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 ">
                      <SideBar />
                    </div>
                    <div className="col-md-8">
                      <RegistrationStatus />
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
