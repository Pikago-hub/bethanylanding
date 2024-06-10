import React, { CSSProperties, useState, useEffect } from "react";
import dealImage from "../../../src/assets/img/deal-1.png";

const PromotionsFeature = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const styles = {
    promotionsFeatureContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "30px 0",
      padding: "0 20px",
    } as CSSProperties,

    promotionsFeatureImage: {
      width: "100%",
      maxWidth: "1200px",
      height: "auto",
    } as CSSProperties,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.promotionsFeatureContainer}>
      <img src={dealImage} alt="Deal" style={styles.promotionsFeatureImage} />
    </div>
  );
};

export default PromotionsFeature;
