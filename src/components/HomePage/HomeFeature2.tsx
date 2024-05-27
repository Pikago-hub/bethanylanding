import React, { CSSProperties, useState, useEffect } from "react";

import feature1Image from "../../assets/img/homeFeature2Image1.jpg";
import feature2Image from "../../assets/img/homeFeature2Image2.jpg";

const HomeFeature2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const wrapperStyle = {
    backgroundImage: "url('/heroBG2.png')",
    maxWidth: "100%",
    margin: "0 auto",
  };

  const imageLeftStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    margin: "20px 0",
  };

  const imageRightStyle: CSSProperties = {
    ...imageLeftStyle,
    flexDirection: isMobile ? "column" : "row-reverse",
  };

  const contentStyle: CSSProperties = {
    flexBasis: isMobile ? "100%" : "40%",
    paddingRight: isMobile ? "0" : "20px",
    textAlign: isMobile ? "center" : "left",
  };

  const contentLeftStyle: CSSProperties = {
    ...contentStyle,
    textAlign: isMobile ? "center" : "right",
    margin: isMobile ? "0" : "20px",
  };

  const contentRightStyle: CSSProperties = {
    ...contentStyle,
    textAlign: isMobile ? "center" : "left",
    margin: isMobile ? "0" : "30px",
  };

  const imageStyle = {
    flexBasis: isMobile ? "100%" : "50%",
    display: "flex",
    justifyContent: "center",
  };

  const imageTagStyle = {
    width: isMobile ? "100%" : "100%",
    height: "auto",
    objectFit: "cover" as "cover",
  };

  const headingStyle: CSSProperties = {
    fontSize: isMobile ? "2em" : "4em",
    color: "darkred",
    fontFamily: "'Arial', sans-serif",
  };

  const paragraphStyle: CSSProperties = {
    fontSize: isMobile ? "1em" : "1.1em",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={imageLeftStyle}>
        {/* Text content */}
        <div style={contentLeftStyle}>
          <h1 style={headingStyle}>Savor Authentic Chinese Delights</h1>
          <p style={paragraphStyle}>
            Indulge in a culinary journey with our range of traditional Chinese
            dishes, expertly prepared to tantalize your taste buds.
          </p>
          <a
            href="https://bethany-cafe.redbirdtab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                marginBottom: "20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Order Now
            </button>
          </a>
        </div>
        {/* Image */}
        <div style={imageStyle}>
          <img src={feature1Image} alt="Feature 1" style={imageTagStyle} />
        </div>
      </div>

      <div style={imageRightStyle}>
        {/* Image */}

        {/* Text content */}
        <div style={contentRightStyle}>
          <h1 style={headingStyle}>Discover the Magic of Boba</h1>
          <p style={paragraphStyle}>
            Explore our diverse selection of boba teas, from classic flavors to
            innovative creations, all crafted with the finest ingredients.
          </p>
          <a
            href="https://bethany-cafe.redbirdtab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            >
              Order Now
            </button>
          </a>
        </div>
        <div style={imageStyle}>
          <img src={feature2Image} alt="Feature 2" style={imageTagStyle} />
        </div>
      </div>
    </div>
  );
};

export default HomeFeature2;
