import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Container from "./components/container";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Support from "./pages/support";
import "./GlobalStyle.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Spotify 2.0";
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Container />
                <Faq />
              </>
            }
          />

          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
