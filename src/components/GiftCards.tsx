import React, { CSSProperties, useState, useEffect } from "react";
import giftCardImage from "../assets/img/giftcards.png";

const GiftCards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    containerStyle: {
      backgroundImage: "url('/heroBG2.png')",
      display: windowWidth < 768 ? "block" : "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: windowWidth < 768 ? "0" : "20px",
      paddingTop: windowWidth < 768 ? "20px" : "0",

      height: windowWidth < 768 ? "auto" : "100%",
      flexDirection: windowWidth < 768 ? "column" : "row",
    } as CSSProperties,

    textStyle: {
      flexBasis: windowWidth < 768 ? "100%" : "50%",
      padding: "0 20px",
      textAlign: windowWidth < 768 ? "center" : "left",
    } as CSSProperties,

    titleStyle: {
      fontSize: windowWidth < 768 ? "2.5em" : "4em",
      fontWeight: "bold",
      color: "darkred",
      marginBottom: "0.5em",
    } as CSSProperties,

    subtitle: {
      fontSize: windowWidth < 768 ? "0.9em" : "1em",
      fontWeight: "bold",
      marginBottom: "2em",
    } as CSSProperties,

    imageStyle: {
      maxWidth: windowWidth < 768 ? "100%" : "75%",
      height: "auto",
      margin: windowWidth < 768 ? "20px 0" : "0",
    } as CSSProperties,
  };

  return (
    <div style={styles.containerStyle}>
      <img src={giftCardImage} alt="Gift Cards" style={styles.imageStyle} />
      <div style={styles.textStyle}>
        <h1 style={styles.titleStyle}>Available in Store</h1>
        <p style={styles.subtitle}>
          Visit our store to purchase gift cards and make your loved ones happy
          with a special treat!
        </p>
      </div>
    </div>
  );
};

export default GiftCards;
