import React, { useState } from "react";
import menu1Image from "../../src/assets/img/Menu1.jpg";
import menu2Image from "../../src/assets/img/Menu2.jpg";
import HomeFeature1 from "./HomePage/HomeFeature1";

const Menu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const styles = {
    wrapperStyle: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,

    menuImageStyle: {
      maxWidth: "100%",
      height: "auto",
      marginBottom: "20px",
    } as React.CSSProperties,

    featureWrapperStyle: {
      width: "100%",
      maxWidth: "1200px",
      overflow: "hidden",
      position: "relative",
    } as React.CSSProperties,

    // arrowButton: {
    //   position: "absolute",
    //   top: "50%",
    //   transform: "translateY(-50%)",
    //   backgroundColor: "#fff",
    //   border: "1px solid #ddd",
    //   width: "50px",
    //   height: "50px",
    //   borderRadius: "50%",
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   cursor: "pointer",
    //   zIndex: 10,
    // } as React.CSSProperties,

    leftArrow: {
      left: "-70px",
    } as React.CSSProperties,

    rightArrow: {
      right: "-70px",
    } as React.CSSProperties,
  };

  return (
    <div style={styles.wrapperStyle}>
      <div style={styles.featureWrapperStyle}>
        <HomeFeature1 id="home-feature" className="relative z-10" />
      </div>
      <img src={menu1Image} alt="Menu 1" style={styles.menuImageStyle} />
      <img src={menu2Image} alt="Menu 2" style={styles.menuImageStyle} />
    </div>
  );
};

export default Menu;
