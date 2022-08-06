import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import {
  HomeButton,
  HomeContainer,
  HomeTitle,
  HomeTitleContainer,
  MainImage,
} from "../../styles/home";
import { Colors } from "../../styles/theme";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HomeContainer>
      <Box
        sx={{
          ml: matches ? "30px" : "100px",
          mr: matches ? "30px" : "100px",
          height: matches ? "376px" : "600px",
        }}
        display="flex"
        alignItems="center"
      >
        <MainImage src="/images/mobile.jpg" alt="Spotify" sx={{ mr: "100px" }} />
        <HomeTitleContainer>
          <HomeTitle variant="h2">
            Play millions of songs and podcasts, for free.
          </HomeTitle>
          <HomeButton
            variant="contained"
            sx={{
              "&:hover": { background: Colors.white, transform: "scale(1.1)" },
              transition: "0.4s",
              mt: "20px",
            }}
          >
            Get Spotify Free
          </HomeButton>
        </HomeTitleContainer>
      </Box>
    </HomeContainer>
  );
};

export default Home;
