import React, { CSSProperties, useState, useEffect } from "react";
import aboutHeroImage from "../../src/assets/img/aboutHero.jpg";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const StyledLine = () => {
    const lineStyle: React.CSSProperties = {
      height: 1,
      backgroundColor: "#aaa",
      width: "80%",
      margin: "20px auto",
    };

    return <div style={lineStyle}></div>;
  };

  const iframeStyle: React.CSSProperties = {
    border: 0,
    width: windowWidth < 768 ? "100%" : "50%",
    height: windowWidth < 768 ? "300px" : "500px",
    maxWidth: windowWidth < 768 ? "100%" : "50%",
  };

  const styles = {
    containerStyle: {
      textAlign: "center",
      padding: "20px",
    } as CSSProperties,

    titleStyle: {
      fontSize: window.innerWidth < 768 ? "2em" : "4em",
      color: "darkred",
      fontWeight: "bold",
    } as CSSProperties,

    subtitle: {
      fontSize: window.innerWidth < 768 ? "0.9em" : "1.2em",
      color: "darkred",
      fontWeight: "bold",
      marginBottom: "2em",
      width: window.innerWidth < 768 ? "100%" : "50%",
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
    } as CSSProperties,

    imageStyle: {
      maxWidth: window.innerWidth < 768 ? "100%" : "75%",
      height: "auto",
      marginBottom: "4em",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    } as CSSProperties,

    mapSectionStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    } as CSSProperties,

    mapTitleStyle: {
      fontSize: "2.5em",
      fontWeight: "bold",
      color: "darkred",
      width: "100%",
      marginBottom: "20px",
    } as CSSProperties,
  };

  return (
    <div style={styles.containerStyle}>
      <h1 style={styles.titleStyle}>About Us</h1>
      <p style={styles.subtitle}>
        Bethany Cafe, an American Chinese restaurant, is conveniently located
        near UT Arlington and Arlington High School. We offer a wide range of
        delicious Chinese dishes and refreshing boba tea.
      </p>
      <p style={styles.subtitle}>
        At Bethany Cafe, we’re more than just a place to eat; we’re a gathering
        spot where friends and families come together. Our cozy atmosphere and
        heartfelt hospitality make every visit special. Every bite tells a story
        of culinary excellence.
      </p>
      <p style={styles.subtitle}>
        Join us at Bethany Cafe, where the flavors of China meet the warmth of
        home. We look forward to welcoming you!
      </p>
      <img src={aboutHeroImage} alt="About Us" style={styles.imageStyle} />
      <StyledLine />

      <div style={styles.mapSectionStyle}>
        <h2 style={styles.mapTitleStyle}>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3356.6461716663734!2d-97.11515208650705!3d32.722028635688645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d15341e9e31%3A0x6a8ed1459990dadf!2sBethany%20Cafe%20boba%20tea!5e0!3m2!1sen!2sus!4v1702713047573!5m2!1sen!2sus"
          style={iframeStyle}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
