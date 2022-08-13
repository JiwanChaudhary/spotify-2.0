import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { HomeButton } from "../../styles/home";
import { Colors } from "../../styles/theme";

const LetsPlay = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component="div"
      sx={{
        background: "linear-gradient(rgb(176, 35, 194) 15%, rgb(96, 11, 231))",
      }}
    >
      <Box
        component="article"
        sx={{
          pt: matches ? "90px" : "200px",
          pb: matches ? "90px" : "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: Colors.white,
        }}
      >
        <Typography
          variant={matches ? "h3" : "h2"}
          sx={{ fontWeight: "bold", letterSpacing: 2, mb: "20px" }}
        >
          Ready? Let's Play.
        </Typography>
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
      </Box>
    </Box>
  );
};

export default LetsPlay;
