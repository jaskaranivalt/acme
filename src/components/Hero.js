import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.svg";

const Hero = () => {
  const {
    isAuthenticated
  } = useAuth0();
  return(
  <div className="text-center hero my-3">
    <div style={{
      // display: "flex",
      // flexDirection: "column",
        position: "absolute",
        right : isAuthenticated ? 180 : 200,
        top : 80,
      }} >
      <img className="mb-1" src={"https://media2.giphy.com/media/3xe5SFU2AemSU3swnz/giphy.gif"} alt="React logo" width={isAuthenticated ? 80 : 100} style={{
        transform: "scaleX(-1)",
      }} />
    </div>
    <img className="mb-1" src={"https://res.cloudinary.com/practicaldev/image/fetch/s--aO6rLDm---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2el5bemug5u4ik8wdigg.png"} alt="React logo" width="180" />
    <img className="mb-1 app-logo" src={"https://pngimg.com/d/plus_PNG34.png"} alt="React logo" width="120"/>
    <img className="mb-1" src={"https://ivalt.com/images/logo.png"} alt="iVALT logo" width={180} />
    <br/>
    <hr/>
    <br/>
    <h1 className="mb-4">iVALT Biomatics Multifactor Authentication</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow using iVALT Biomatics and the Auth0.
    </p>
  </div>
)};

export default Hero;
