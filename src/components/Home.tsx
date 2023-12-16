import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeHero from "./HomePage/HomeHero";
import HomeFeature1 from "./HomePage/HomeFeature1";
import HomeFeature2 from "./HomePage/HomeFeature2";

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bethany Cafe</title>
        </Helmet>
      </HelmetProvider>

      <HomeHero />
      <HomeFeature1 id="home-feature" className="relative z-10" />
      <HomeFeature2 />
    </>
  );
};

export default Home;
