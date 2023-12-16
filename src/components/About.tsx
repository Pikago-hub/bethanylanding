import React, { CSSProperties, useState, useEffect } from "react";
import aboutHeroImage from "../../src/assets/img/aboutHero.png";

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
    height: windowWidth < 768 ? "50%" : "100%",
    minHeight: windowWidth < 768 ? "300px" : "500px",
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
      fontSize: window.innerWidth < 768 ? "0.9em" : "1em",
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

    hiringSectionStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      flexDirection: windowWidth < 768 ? "column" : "row",
      flexWrap: "wrap",
    } as CSSProperties,

    hiringTitleStyle: {
      fontSize: "2.5em",
      fontWeight: "bold",
      color: "darkred",
      width: "100%",
      marginBottom: "20px",
    } as CSSProperties,

    formMapContainerStyle: {
      display: "flex",
      flexDirection: windowWidth < 768 ? "column" : "row",
      flexWrap: "nowrap",
      width: "100%",
    } as CSSProperties,

    formContainerStyle: {
      width: windowWidth < 768 ? "100%" : "50%",
      padding: "20px",
    } as CSSProperties,

    formTitleStyle: {
      fontSize: "2em",
      fontWeight: "bold",
      marginBottom: "0.5em",
    } as CSSProperties,

    labelStyle: {
      textAlign: "left",
      display: "block",
      marginBottom: "5px",
    } as CSSProperties,

    inputStyle: {
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      width: "100%",
    } as CSSProperties,

    textareaStyle: {
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      width: "100%",
      height: "150px",
    } as CSSProperties,

    buttonStyle: {
      backgroundColor: "darkred",
      color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    } as CSSProperties,
  };

  return (
    <div style={styles.containerStyle}>
      <h1 style={styles.titleStyle}>About Us</h1>
      <p style={styles.subtitle}>
        Bethany Cafe in Arlington is a warm and inviting culinary destination
        where every meal feels like a special occasion. Nestled in the heart of
        the city, our cafe offers a unique blend of cozy ambiance and
        exceptional cuisine that reflects the rich tapestry of flavors our
        community loves. Founded by a team of passionate food enthusiasts, we
        pride ourselves on using only the freshest, locally-sourced ingredients
        to craft dishes that delight the senses and bring people together.
        Whether you're joining us for a leisurely brunch, a business lunch, or a
        relaxing dinner, our dedicated staff is committed to providing an
        unforgettable dining experience. At Bethany Cafe, we're more than just a
        place to eat; we're a place where memories are made, where friends and
        families gather, and where every bite tells a story of culinary
        excellence and heartfelt hospitality.
      </p>
      <img src={aboutHeroImage} alt="About Us" style={styles.imageStyle} />
      <StyledLine />

      <div style={styles.hiringSectionStyle}>
        <h2 style={styles.hiringTitleStyle}>We Are Hiring</h2>

        <div style={styles.formMapContainerStyle}>
          <div style={styles.formContainerStyle}>
            <form>
              <h2 style={styles.formTitleStyle}>Join Our Team</h2>
              <label htmlFor="name" style={styles.labelStyle}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style={styles.inputStyle}
              />

              <label htmlFor="email" style={styles.labelStyle}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={styles.inputStyle}
              />

              <label htmlFor="message" style={styles.labelStyle}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                style={styles.textareaStyle}
              />

              <button type="submit" style={styles.labelStyle}>
                Submit
              </button>
            </form>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3356.6461716663734!2d-97.11515208650705!3d32.722028635688645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d15341e9e31%3A0x6a8ed1459990dadf!2sBethany%20Cafe%20boba%20tea!5e0!3m2!1sen!2sus!4v1702713047573!5m2!1sen!2sus"
            style={iframeStyle}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
