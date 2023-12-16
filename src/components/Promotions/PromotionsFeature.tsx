import React, { CSSProperties, useState, useEffect } from "react";
import promotionsFeature1Image from "../../../src/assets/img/promotionsFeature2.png";
import promotionsFeature2Image from "../../../src/assets/img/promotionsFeature1.png";
import promotionsFeature3Image from "../../../src/assets/img/promotionsFeature3.png";

const PromotionsFeature = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const StyledLine = () => {
    const lineStyle: React.CSSProperties = {
      height: 1,
      backgroundColor: "#aaa",
      width: "80%",
      margin: "20px auto",
    };

    return <div style={lineStyle}></div>;
  };
  const styles = {
    promotionsFeatureContainer: {
      display: "flex",
      flexDirection: windowWidth < 768 ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "20px 0",
    } as CSSProperties,

    promotionsFeatureImage: {
      width: windowWidth < 768 ? "100%" : "50%",
      margin: windowWidth < 768 ? "20px 0" : "0",
    } as CSSProperties,

    promotionsFeatureText: {
      width: windowWidth < 768 ? "100%" : "60%",
      margin: windowWidth < 768 ? "0" : "0 20px",
      textAlign: windowWidth < 768 ? "center" : "left",
    } as CSSProperties,

    promotionsFeatureTitle: {
      fontSize: "3em",
      fontWeight: "bold",
      marginBottom: "0.2em",
      color: "darkred",
    } as CSSProperties,

    promotionsFeatureSubtitle: {
      fontSize: "1.5em",
      fontWeight: "bold",
      marginBottom: "2em",
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
      <div style={styles.promotionsFeatureImage}>
        <img
          src={promotionsFeature1Image}
          alt="Bethany Rewards"
          style={{ width: "100%" }}
        />
      </div>
      <div style={styles.promotionsFeatureText}>
        <h2 style={styles.promotionsFeatureTitle}>Free Tea</h2>
        <p style={styles.promotionsFeatureSubtitle}>
          Get a free tea when you order any entree!
        </p>
      </div>
      <div style={styles.promotionsFeatureImage}>
        <img
          src={promotionsFeature2Image}
          alt="Bethany Rewards"
          style={{ width: "100%" }}
        />
      </div>
      <div style={styles.promotionsFeatureText}>
        <h2 style={styles.promotionsFeatureTitle}>50% off Drinks</h2>
        <p style={styles.promotionsFeatureSubtitle}>
          Get 50% off any drink when you order any entree!
        </p>
      </div>
      <div style={styles.promotionsFeatureImage}>
        <img
          src={promotionsFeature3Image}
          alt="Bethany Rewards"
          style={{ width: "100%" }}
        />
      </div>
      <div style={styles.promotionsFeatureText}>
        <h2 style={styles.promotionsFeatureTitle}>Free Drinks</h2>
        <p style={styles.promotionsFeatureSubtitle}>
          Get a free drink when you purchased 7 drinks!
        </p>
      </div>
    </div>
  );
};

export default PromotionsFeature;
