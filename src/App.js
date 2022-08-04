import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Container from "./components/container";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Support from "./pages/support";
import "./GlobalStyle.css";
import { useEffect } from "react";
import { UIProvider } from "./context";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import AppbarDrawer from "./components/drawer";

function App() {
  useEffect(() => {
    document.title = "Spotify 2.0";
  }, []);

  return (
    <>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <UIProvider>
       <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Container />
                <Faq />
                <AppbarDrawer />
              </>
            }
          />

          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
       </UIProvider>
      </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
