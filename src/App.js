import React from "react";
import "./App.css";
import Top from "./components/common/top";
import Footer from "./components/common/footer";
import RouterIndex from "./config/router";

function App() {
  // const body = `proudct:%0D%0Anumber in need:%0D%0Atargeted
  // price:%0D%0Atargeted location:%0D%0A`;
  // const deviceType = parser(req.headers['user-agent']).device.type || 'desktop';

  return (
    <div className="App">
      <Top />
      <RouterIndex />
      <Footer />
    </div>
  );
}

export default App;
