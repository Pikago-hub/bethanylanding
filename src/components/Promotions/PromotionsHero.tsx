import React, { CSSProperties } from "react";

const PromotionsHero = () => {
  const styles = {
    heroContainer: {
      backgroundImage: "url('/heroBG2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    } as CSSProperties,

    heroTitle: {
      fontSize: "3em",
      color: "darkred",
      fontWeight: "bold",
      marginBottom: "0.2em",
    } as CSSProperties,

    heroSubtitle: {
      fontSize: "1.2em",
      fontWeight: "bold",
      marginBottom: "2em",
    } as CSSProperties,

    orderOnlineButton: {
      backgroundColor: "#EF4444",
      color: "white",
      padding: "10px 20px",
      borderRadius: "20px",
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "1.2em",
    } as CSSProperties,
  };

  return (
    <div style={styles.heroContainer}>
      <div>
        <h1 style={styles.heroTitle}>Combo Deal</h1>
        <p style={styles.heroSubtitle}>
          FYI, all entrees come with a complimentary drink - choose from
          original black tea, green tea, or milk tea. You can also upgrade to
          other drinks for half off (excluding fizzy drinks).
        </p>
        <a
          href="https://bethany-cafe.redbirdtab.com/"
          style={styles.orderOnlineButton}
        >
          Order Online Now
        </a>
      </div>
    </div>
  );
};

export default PromotionsHero;
