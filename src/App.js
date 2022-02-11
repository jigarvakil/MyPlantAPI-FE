import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Plant from "./components/plant";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <div style={{ backgroundColor: "rgba(1, 95, 117, 0.37)" }}>
            <Navbar />
            <LoadingBar
              height={3}
              color="rgb(15, 40, 55)"
              progress={this.state.progress}
            />
          </div>
          <Routes>
            <Route
              exact
              path="/"
              element={<Plant setProgress={this.setProgress} key="home" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
