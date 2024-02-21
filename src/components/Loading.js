import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
  <div style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
    <div className="logo-container loading-animation">
      <img src="https://ivalt.com/mfa/ivalt_logo.png" alt="Logo" className="ivalt-image" />
      <div className="loading"></div>
    </div>
  </div>
);

export default Loading;
