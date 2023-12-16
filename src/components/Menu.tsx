import React from "react";
import menu1Image from "../../src/assets/img/Menu1.png";
import menu2Image from "../../src/assets/img/Menu2.png";

const Menu = () => {
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
  };

  return (
    <div style={styles.wrapperStyle}>
      <img src={menu1Image} alt="Menu 1" style={styles.menuImageStyle} />
      <img src={menu2Image} alt="Menu 2" style={styles.menuImageStyle} />
    </div>
  );
};

export default Menu;
