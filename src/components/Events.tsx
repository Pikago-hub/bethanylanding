import React from "react";
import HomeFeature2 from "./HomePage/HomeFeature2";

const Events = () => {
  const wrapperStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  return (
    <div style={wrapperStyle}>
      <HomeFeature2 />
    </div>
  );
};

export default Events;
