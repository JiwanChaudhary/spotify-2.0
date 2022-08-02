import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Container from "./components/container";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Support from "./pages/support";
import { Box } from "@mui/material";
import "./GlobalStyle.css"; 

function App() {
  return (
    <>
      <Box sx={{ ml: "130px", mr: "130px" }}>
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
      </Box>
    </>
  );
}

export default App;
