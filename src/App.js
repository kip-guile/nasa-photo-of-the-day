import React from "react";
import "./App.css";
import Header from "./Header";
import Image from "./Image";
import Explanation from "./Explanation";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Header/>
      <Image/>
      <Explanation/>
      <Footer/>
    </div>
  );
}

export default App;
