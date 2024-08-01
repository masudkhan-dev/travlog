import React from "react";
import Menubar from "../Menubar/Menubar";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import Destination from "../Destination/Destination";

const Home1 = () => {
  return (
    <main>
      <div className="">
        <div>
          <Menubar />
          <Hero />
          <Service />
          <Destination />
        </div>
      </div>
    </main>
  );
};

export default Home1;
