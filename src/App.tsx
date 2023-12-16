import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Promotions from "./components/Promotions";
import GiftCards from "./components/GiftCards";
import About from "./components/About";

export default function App() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Bethany Cafe</title>
        </Helmet>
      </HelmetProvider>

      <Router>
        <div id="page-container">
          <Header />
          <main id="content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/giftcards" element={<GiftCards />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
