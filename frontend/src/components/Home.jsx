import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className=" w-full bg-cyan-950 min-h-[500px] h-auto flex flex-col items-center flex-wrap p-2  ">
        {/* Hero Texts  */}
        <div className="flex flex-col gap-10 p-20 ">
          <h1
            className="text-white text-5xl mt-28 
        "
          >
            Recipes Here
          </h1>
          <p className="text-zinc-300 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            perferendis quidem nihil aut dolorum libero, quaerat atque odio,
            laboriosam esse aliquid ex natus, similique debitis eius nisi
            nostrum aperiam aspernatur odit velit quo. Minima necessitatibus
            beatae deleniti nulla voluptatum, dolorum, enim ex qui et quae, est
            sapiente sed illo animi.
          </p>
        </div>

        {/* Render Cards */}
        <div className="flex flex-wrap  justify-center items-center gap-5 p-[1rem]   ">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}

export default Home;
