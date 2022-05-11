import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Scroll from "./components/ScrollToTop";
import FAQ from "./components/FAQ";
import Order from "./components/Order";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      {/* header starts */}
      <Header />
      {/* header ends */}

      {/* Home starts */}
      <Home />
      {/* Home starts */}

      {/* About starts */}
      <About />
      {/* About starts */}

      {/* Menu starts */}
      <Menu />
      {/* Menu starts */}

      {/* Review starts */}
      <Review />
      {/* Review starts */}

      {/* Order starts */}
      <Order />
      {/* Order starts */}

      {/* FAQ starts */}
      <FAQ />
      {/* FAQ starts */}

      {/* Footer starts */}
      <Footer />
      {/* Footer starts */}

      <Scroll />
    </div>
  );
}

export default App;
