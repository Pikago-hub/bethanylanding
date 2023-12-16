import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PromotionsHero from "./Promotions/PromotionsHero";
import PromotionsFeature from "./Promotions/PromotionsFeature";

const StyledLine = () => {
  const lineStyle: React.CSSProperties = {
    height: 1,
    backgroundColor: "#aaa",
    width: "80%",
    margin: "20px auto",
  };

  return <div style={lineStyle}></div>;
};

const Promotions = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Bethany Cafe | Promotions</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <PromotionsHero />
        <StyledLine />
        <PromotionsFeature />
      </div>
    </div>
  );
};

export default Promotions;
