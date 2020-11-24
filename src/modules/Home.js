import React from "react";
import "./home.css";
import hero from "./hero.jpg";
function Home() {
  return (
    <div
      id="homeContainer"
      style={{
        backgroundImage: "url(" + hero + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div id="splash"><h1>Audecca</h1>
      <h2>Audio Equipment Specialists</h2></div>
      
    </div>
  );
}

export default Home;
