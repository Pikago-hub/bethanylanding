import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeHero from "./HomePage/HomeHero";
import About from "./About";

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bethany Cafe</title>
        </Helmet>
      </HelmetProvider>

      <HomeHero />
      <About />
    </>
  );
};

export default Home;
