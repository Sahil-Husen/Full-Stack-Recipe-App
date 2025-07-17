import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";
function App() {
  const [pop, setPopUp] = useState(false);
  const handlePopUp = () => {
    setPopUp(!pop);
    console.log("show pop up", pop);
  };
 
  const popStyle= {
    position:'absolute',
    display:'flex',
    backgroundColor:'black',
    color:'white',
  }

  return (
    <>
      {pop ? (
        <PopUp popStyle={popStyle} />
      ) : (
        <>
          {" "}
          <Header handlePopUp={handlePopUp}></Header>
          <Home></Home>
          <Footer></Footer>{" "}
        </>
      )}
    </>
  );
}

export default App;
