import React from "react";
import "./App.css";
import Providers from "./components/providers";
import Footer from "./components/common/footer";
import Top from "./components/common/top";

function App() {
  return (
    <div className="App">
      <Top />
      <div style={{padding: "20px"}}>
        Please contact jay.lin@ppewholesale.us or wechat: weijingjaylin for more
        detail.
        <Providers />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
